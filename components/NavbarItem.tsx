import React from 'react'

interface NavbarItemProps {
    label : string
    onClick? : () => void
 }

const NavbarItem : React.FC <NavbarItemProps> = ({label, onClick}) => {
  return (
    <div onClick={onClick} className='text-white font-Montserrat cursor-pointer hover:text-red-700 transition'>
        {label}
    </div>
  )
}

export default NavbarItem