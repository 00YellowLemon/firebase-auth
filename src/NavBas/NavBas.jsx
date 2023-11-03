import { useState } from "react"
import NavToggle from "../NavToggle/NavToggle"
import { AiOutlineMenu } from "react-icons/ai"

export default function NavBas({setShow}) {
  const [open, setOpen] = useState(false);

  function toggleNavbar() {
    setOpen(!open);
  }

  return ( 
    <div className="flex p-10 bg-lime-400 justify-between opacity-50 shadow-lg relative " >
      <h2>React Firebase</h2>
      
      {!open && (
        <div className="123" onClick={toggleNavbar} >
           <AiOutlineMenu  />
        </div>
      )}
      {open && <NavToggle setShow={setShow} setOpen={setOpen}/>}
    </div>
  )
}
