import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

  const navigate = useNavigate()

  return (
    <div className='nav-main'>
        <div className='nav-work'>
            <div className='nav-id' onClick={ () => { navigate('/id')}} >Industrial Design</div>
            <div className='nav-uxui' onClick={ () => { navigate('/ux')}} >UX Design</div>
        </div>
        <div className='nav-name'onClick={ () => { navigate('/')}} >MENGDIAN XING</div>
        <div className='nav-rc'>
            <div className='nav-resume'>Resume</div>
            <div className='nav-contact'>Contact</div>
        </div>
    </div>
  )
}
