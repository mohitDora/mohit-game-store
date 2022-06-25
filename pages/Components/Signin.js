import React,{useState,useEffect} from 'react'
import { auth } from '../firebase';
import router from 'next/router';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';

function Signin() {
    const [issign,setissign]=useState(true);
    const [type,settype]=useState(true);
    const [email,setemail]=useState("");
    const [pwd,setpwd]=useState("");
    const [upemail,upsetemail]=useState("");
    const [uppwd,upsetpwd]=useState("");
    const [upname,upsetname]=useState("");

    const {isprof,setisprof,setcuruser,curuser}=useStateContext();

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setcuruser(user);   
        })
        return unsubscribe
    },[])

    function register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(upemail,uppwd).then((auth)=>{
            router.push("/");
            toast(
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}>Sucessfully Created Account</div>
              ); 
              // setisprof(curuser?true:false)   
        })
        .catch((error)=>alert(error.message))
    }
    function signin(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,pwd).then((auth)=>{
            router.push("/");
            toast(
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}>Sucessfully Signed In</div>
              );  
              // setisprof(curuser?true:false)   
        })
        .catch((error)=>alert(error.message))
    }

  return (
    <div className='maincon'>
        <div className="formcon">
            <div className="formname">{issign?"Sign In":"Sign Up"}</div>
            <form className='formsign'>
                {issign?
                <>
                <label htmlFor="Email">Email Address</label>
                <input type="email" id='Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type={type?"password":"text"} id='password' required minLength="8" value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
                <div className='checkcon'>
                <input type="checkbox" className='check' id='check' onClick={()=>settype(!type)}/>
                <label htmlFor="check">Show Password</label>
                </div>
                </>
                :
                <>
                <label htmlFor="name">Username</label>
                <input type="text" id='name' required value={upname} onChange={(e)=>upsetname(e.target.value)}/>
                <label htmlFor="Email">Email Address</label>
                <input type="email" id='Email' required value={upemail} onChange={(e)=>upsetemail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type={type?"password":"text"} id='password' required minLength="8" value={uppwd} onChange={(e)=>upsetpwd(e.target.value)}/>
                <div className='checkcon'>
                <input type="checkbox" className='check' id='check' onClick={()=>settype(!type)}/>
                <label htmlFor="check">Show Password</label>
                </div>
                </>
                }
            </form>
            {
                issign?<button className="submitbtn" type="submit" onClick={signin}>Submit</button>:
                <button className="submitbtn" type="submit" onClick={register}>Create Account</button>
            }
            {
                issign?<div className="exist">New to here? <span onClick={()=>setissign(!issign)}>Create Account</span></div>:<div className="exist">Already have an account ? <span onClick={()=>setissign(!issign)}>Sign In</span></div>
            }
        
        </div>
    </div>
  )
}

export default Signin