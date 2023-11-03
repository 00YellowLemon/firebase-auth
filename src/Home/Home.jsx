import {useState} from 'react'
import { Outlet } from 'react-router-dom'

import NavBas from '../NavBas/NavBas'


export default function Home() {
    const [show,setShow] = useState(false)
    


  return (
    <>
    <div className='w-full bg-lime-400 h-screen bg relative' >
        <NavBas setShow={setShow}/>
        <Outlet />
      
    </div>
        
    </>

    


  )
}
