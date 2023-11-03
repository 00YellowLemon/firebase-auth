import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { initializeApp } from 'firebase/app';
import { signOut,getAuth } from "firebase/auth";



export default function LogOut() {
    const [open,setOpen] = useState(false);


  
  const navigate = useNavigate();
  function toggleNavbar() {
    setOpen(!open);
  }







  return (
    <div className="flex p-10 bg-lime-400 justify-between opacity-50 shadow-lg relative w-full" >

        <h2>
            Buyoyees
        </h2>

    {!open && (
        <div className="123" onClick={toggleNavbar} >
           <AiOutlineMenu  />
        </div>
      )}
        {
            open && <Toggle navigate={navigate} setOpen={setOpen}/>
        }
        

    </div>

  );
}

function Toggle({setOpen,navigate}){
    function showOpen() {

        const firebaseConfig = {
            apiKey: "AIzaSyBMHtFvxtl_BZDyoJI0ZVWWpBiK22epGwY",
            authDomain: "firestore-learn-52744.firebaseapp.com",
            projectId: "firestore-learn-52744",
            storageBucket: "firestore-learn-52744.appspot.com",
            messagingSenderId: "1027661924386",
            appId: "1:1027661924386:web:c9c448faacf43c171be27b",
            measurementId: "G-7HNEVVVRCF"
          };
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        signOut(auth).then(
          () => {
            console.log("Signed Out");
            navigate('/')
    
      })
    }

    return (
        <div className="nav-toggle  block absolute z-40 top-8 right-16 bg-lime-200 rounded-xl p-3">
            <div className="flex justify-end pr-4" onClick={() => setOpen(false) }>
                <AiOutlineClose className="cursor-pointer" />
            </div>
            <ul className="w-64">
                <li className="cursor-pointer pb-4 text-lg" onClick={showOpen}>
                SignOut
                </li>
                
                <li className="cursor-pointer pb-4 text-lg" >
                Cart
                </li>
                <li className="cursor-pointer pb-4 text-lg  ">
                Profile
                </li>
            </ul>
        </div>
    )
}


