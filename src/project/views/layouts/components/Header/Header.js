import SelectLanguage from '../SelectLanguage/SelectLanguage'
import {BsFillShareFill} from 'react-icons/bs'
import ProfileMenu from '../ProfileMenu.js/ProfileMenu'

export default function Header() {
  return (
    <div className="h-[6.2rem] bg-white flex items-center justify-between pl-[5rem] md:pl-[2rem] lg:pl-[3rem] pr-[3rem] text-letter">

      <div className="flex gap-[2rem] text-[16px] pt-[5px] ">
        <SelectLanguage />
        <div className="indicator">
          <span className="indicator-item badge badge-secondary bg-blue-50 border-none ">
            99+
          </span>
          <button className=" hover:text-gray-600 text-[16px] pt-[5px]">Notificações</button>
        </div>
        <button className="flex items-center gap-[0.5rem] hover:text-gray-600 pt-[5px]">
            Link de Indicação
            <BsFillShareFill />
          </button>
      </div>
      
      <ProfileMenu />
    </div>
  )
}
