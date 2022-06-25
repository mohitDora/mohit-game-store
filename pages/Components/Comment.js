import React, { useState } from 'react'
import { db } from '../firebase';
import { toast } from 'react-hot-toast';

function Comment() {
    const [comname, setcomname] = useState("");
    const [msg, setmsg] = useState("");

    const submitcomment = (e) => {
        e.preventDefault();
        if(comname && msg){
            db.collection('Comments').add({
                name:comname,
                message:msg
            }).then(()=>{
                toast(
                    <div style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                    }}>Sucessfully posted</div>
                  ); 
            }).catch((error)=>{
                toast(
                    <div style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                    }}>Failed to post</div>
                  ); 
            })
        }
        else{
            toast(
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                }}>Please fill the fields</div>
              );  
        }
        
        setcomname("");
        setmsg("")
        
    }
console.log(comname,msg)
    return (
        <div className='comcon'>
            <div className="reply">Leave a comment</div>
            <form className='comform'>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Enter your name' required value={comname} onChange={(e) => setcomname(e.target.value)} />
                <label htmlFor="textarea">Comment</label>
                <textarea placeholder='Leave a comment ...' name="" id="textarea" cols="30" rows="10" required value={msg} onChange={(e) => setmsg(e.target.value)}></textarea>
            </form>
            <div className="combtn" type="submit" onClick={submitcomment}>Post Comment</div>
        </div>
    )
}

export default Comment