import {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
import {initializeApp} from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'




export default function Content({setShow}){
    const [open,setOpen] = useState(true)
    const navigate = useNavigate();
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

    function justClose(){
        navigate("/")
    }

    // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    return(
        <div className="absolute inset-0 bg-lime-100/80">
            <AiOutlineClose className="cursor-pointer absolute top-8 right-12" onClick={justClose} />

            <div className="flex bg-green-50 w-80 overflow-hidden absolute z-20 right-2/4 translate-x-1/2 -translate-y-1/3 top-1/2 rounded-2xl">
        {
            open && <LogIn auth={auth} navigate={navigate} setOpen={setOpen} />
        }
        {
            !open && <SignIn auth={auth} navigate={navigate} setOpen={setOpen}  />
        }
          
        
            
        </div>
        </div>
    )
}
function LogIn({setOpen,app,auth,navigate}){
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    function handleClick(e){
        e.preventDefault();
        setOpen(false)
    }
    function handleClick2(e){
        e.preventDefault();
        setOpen(true)
    }
    function handleForm(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,pass)
        .then((userCredentials) => {
            console.log(userCredentials.user)
            navigate('/protected')
        })
        .catch((error) => {
            console.error(error.message)
        })
    }



    return(
        <div className="p-8 w-full">
            <div className="flex w-full my-4 mb-8 gap-2 justify-center">
                <button className="h-12 w-32 bg-lime-300 rounded-lg" onClick={handleClick} >Sign Up</button>
                <button className="h-12 w-32 bg-lime-300 rounded-lg" onClick={handleClick2} >LogIn</button>
            </div>
            <div className="mb-3 h-16 w-full">
                <input className="w-full rounded-lg h-full outline-none px-4" type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3 h-16 w-full">
                <input className="w-full rounded-lg h-full outline-none px-4" type="password" name="" id="" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <input type="submit" value="LogIn" className='h-12 rounded-lg w-full bg-lime-300 cursor-pointer my-8' onClick={handleForm} />


        </div>
    )
}

function SignIn({setOpen,app,auth,navigate}){
    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    function handleClick(e){
        e.preventDefault();
        setOpen(false)
    }
    function handleClick2(e){
        e.preventDefault();
        setOpen(true)
    }
    function handleForm(e){
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,pass)
        .then((userCredentials) => {
            console.log(userCredentials.user)
            navigate('/protected')
        })
        .catch((error) => {
            console.error(error.message)
        })
    }





    return(
        <div className="p-8 w-full">
            <div className="flex w-full my-4 mb-8 gap-2 justify-center">
                <button className="h-12 w-32 bg-lime-300 rounded-lg" onClick={handleClick} >Sign Up</button>
                <button className="h-12 w-32 bg-lime-300 rounded-lg" onClick={handleClick2} >LogIn</button>
            </div>


            <div className="mb-3 h-16 w-full">
                <input className="w-full rounded-lg h-full outline-none px-4" type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3 h-16 w-full">
                <input className="w-full rounded-lg h-full outline-none px-4" type="password" name="" id="" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <input className="h-12 w-full rounded-lg bg-lime-300 my-8" type="submit" value="SignUp"onClick={handleForm} />


        </div>
    )
}