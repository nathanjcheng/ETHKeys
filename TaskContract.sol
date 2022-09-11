// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;


//WE WILL DEPLOY CONTRACT ADDRESS
//ABI

contract TaskContract {
  event AddTask(address recipient, uint taskId);
  event DeleteTask(uint taskId, bool isDeleted);

  struct Task {
    uint id;
    string tasktext;
    bool isDeleted;
  }

  Task[] private tasks;
  //filled with the structs of Task
  mapping(uint256 => address) taskToOwner;

  function addTask(string memory tasktext, bool isDeleted)
  external {
    uint taskId = tasks.length;
    tasks.push(Task(taskId, tasktext, isDeleted));
    taskToOwner[taskId] = msg.sender;
    emit AddTask(msg.sender, taskId);
  }
  //tasks are within the data not deleted
  function getMyTasks() external view returns (Task[] memory) {
    Task[] memory temporary = new Task[](tasks.length);
    uint counter = 0;

    for (uint i=0; i<tasks.length; i++) {
      if(taskToOwner[i] == msg.sender && tasks[i].isDeleted == false) {
        temporary[counter] = tasks[i];
        counter++;
        //these are the user's tasks in which are also not deleted
      }
    }
    Task[] memory result = new Task[](counter);
    for (uint i=0; i < counter; i++) {
      result[i] = temporary[i];
    }
    return result;
  }

  function deleteTask(uint taskId, bool isDeleted) external {
    if(taskToOwner[taskId] == msg.sender) {
      tasks[taskId].isDeleted = isDeleted;
      emit DeleteTask(taskId, isDeleted);
      //we aren't really deleting items we just filter
      //blockchain you can't really delete
    }
  }
  
}
