import React,{useState} from 'react'

function Login() {
    let [phone,setphone]=useState("")
    let [otp,setotp]=useState("")

  async  function getUserLogin() {
    let result= await fetch('https://admin.gifinfinity.com/accounts/api/client/v1/user-otp-login/', {
        method: 'post',
        body: JSON.stringify({ phone, otp}),
        headers:{
            'Content-Type':'application/json'
        }
    })
  
     result=await result.json()
     console.warn(result.auth)
     console.warn(result)
     if(result ){
        console.log(result);
    localStorage.setItem("woner",JSON.stringify(result.phone))
    localStorage.setItem("data",JSON.stringify(result))
    localStorage.setItem("token",JSON.stringify(result.access))
   
    }else{
        alert(result.message)
    }

    }
  return (
    <div id='logIn'>
        <input type="text" placeholder='Enter Name' value={phone} onChange={(e)=>setphone(e.target.value)}  />
        <input type="password" placeholder='Enter password' value={otp} onChange={(e)=>setotp(e.target.value)}/>
        <button onClick={getUserLogin} type="button">Log In</button>
    </div>
  )
}

export default Login
