import { FaCaretDown } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'

export default function Select() {
	return (
		<button>
			<div className="dropdown">
				<label
					tabindex="0"
					class="btn m-1 md:m-0 md:p-0 capitalize flex text-gray-400 items-center gap-3 hover:text-gray-600 hover:bg-transparent bg-white border-none text-[16px] font-normal"
				>
					<IoLanguageSharp className='text-[25px]' />
					<span className='md:hidden'>Português</span>
					<FaCaretDown size={12} />
				</label>
				<ul
					tabindex="0"
					className="dropdown-content menu p-2 shadow bg-white text-gray-400 rounded-box border border-gray-200 w-[12rem]"
				>
					<li>
						<a className='hover:bg-transparent hover:text-gray-600'>Português</a>
					</li>
					<li>
						<a className='hover:bg-transparent hover:text-gray-600'>English</a>
					</li>
					<li>
						<a className='hover:bg-transparent hover:text-gray-600'>Spain</a>
					</li>
				</ul>
			</div>
		</button>
	)
}