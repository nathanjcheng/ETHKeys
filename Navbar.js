import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='w-[full] flex px-2 py-8 justify-between'>
      <HiMenuAlt4 className='text-[#e4ac00] text-3xl cursor-pointer' />
      <div className='flex-1 flex place-content-end gap-[30px]'>
        <BiSearch className='text-[#e4ac00] text-3xl cursor-pointer' />
        <FiHelpCircle className='text-[#e4ac00] text-3xl cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar
