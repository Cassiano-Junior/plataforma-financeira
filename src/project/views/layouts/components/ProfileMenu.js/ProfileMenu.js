import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export default function ProfileMenu() {
  return (
    <button className='ml-auto md:ml-0'>
      <div className="dropdown">
        <label
          tabindex="0"
          class="btn m-1 md:m-0 md:p-0 capitalize flex text-gray-400 items-center gap-3 hover:text-gray-600 hover:bg-transparent bg-white border-none text-[16px] font-normal"
        >
          <CgProfile className='text-[25px]' />
          <span className='md:hidden'>Olá, Rodrigo!</span>
          <FaCaretDown size={12} />
        </label>
        <ul
          tabindex="0"
          className="dropdown-content menu p-2 md:ml-[-120px] shadow bg-white text-gray-400 rounded-box border border-gray-200 w-[12rem]"
        >
          <li>
            <a href="/myprofile" className='hover:bg-transparent hover:text-gray-600'>MEU PERFIL</a>
          </li>
          <li>
            <a href="/security" className='hover:bg-transparent hover:text-gray-600'>SEGURANÇA</a>
          </li>
          <li>
            <a href="/login" className='hover:bg-transparent hover:text-gray-600'>SAIR</a>
          </li>
        </ul>
      </div>
    </button>
  )
}
