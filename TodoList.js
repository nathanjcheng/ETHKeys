import Navbar from './Navbar'
import { IoMdAddCircle } from 'react-icons/io'
import Task from './Task'

const TodoList = ({ tasks, input, setInput, addTask, deleteTask }) => <div className='w-[70%] bg-[#222222] py-4 px-9 rounded-[30px] overflow-y-scroll'>
  <Navbar />
  <h2 className='text-4xl bolder text-white pb-8'>
<div className = 'pl-[360px]'>🔑<span className='text-blue-700'>ETH</span><span className="text-yellow-500">Keys </span></div>
  </h2>
  <div className='py-3 text-[#ffffff]'>&nbsp;Passwords</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[25px] border-none outline-none bg-[#000000] text-white mb-[10px]'
      placeholder='Add new password!'
      // take input from the form here
      value={input}
      onChange={e => setInput(e.target.value)}
    />
    <IoMdAddCircle
      onClick={addTask}
      className='text-[#e4ac00] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
    />
  </form>
  <ul>
    {/* Loop through all tasks here using the Task component */}
    {tasks.map(item => (
      <Task
        key={item.id}
        tasktext={item.tasktext}
        onClick={deleteTask(item.id)}
      //onclick delete
      />
    ))}
  </ul>
</div>

export default TodoList