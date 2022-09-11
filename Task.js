import { BsFillTrashFill } from 'react-icons/bs'

const Task = ({ tasktext, onClick }) => {
  return (
    <div className='flex items-center text-white'>
      <div className=' bg-[#000000] text-[#ffffff] flex w-[70%] rounded-[15px] mb-[10px] flex-1'>
        <div className='flex items-center justify-between w-full p-[20px] text-xl'>

          <span className='hover:text-yellow-600 transition duration-500 ease-in-out'>{tasktext}</span>
          
        </div>
      </div>
      <BsFillTrashFill
        onClick={onClick}
        className='text-2xl cursor-pointer ml-7 mr-3'
      />
    </div>
  )
}

export default Task
