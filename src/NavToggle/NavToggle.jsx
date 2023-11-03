import { AiOutlineClose } from "react-icons/ai";
import {useNavigate} from 'react-router-dom';

export default function NavToggle({ setOpen, setShow }) {
  const navigate = useNavigate();


  function showOpen() {
    setShow(true);
    setOpen(false);
    navigate('/signin')
  }



  return (
    <div className="nav-toggle  block absolute z-40 top-8 right-16 bg-lime-200 rounded-xl p-3">
      <div className="flex justify-end pr-4" onClick={() => setOpen(false) }>
        <AiOutlineClose className="cursor-pointer" />
      </div>
      <ul className="w-64">
        <li className="cursor-pointer pb-4 text-lg" onClick={showOpen}>
          LogIn
        </li>
        <li className="cursor-pointer pb-4 text-lg" onClick={showOpen}>
          SignUp
        </li>
        <li className="cursor-pointer pb-4 text-lg" >
          Cart
        </li>
        <li className="cursor-pointer pb-4 text-lg  ">
          Services
        </li>
      </ul>
    </div>
  );
}
