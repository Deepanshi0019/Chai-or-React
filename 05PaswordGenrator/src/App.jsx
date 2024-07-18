import React, { useCallback, useEffect, useState,useRef } from 'react'

const App = () => {
   const [length, setlength] = useState(8);
   const  [number,setnumber] = useState(false);
   const [char, setchar] = useState(false);
   const [pass, setpass] = useState('')
   
   const passwordref = useRef(null);
   const copypassword = useCallback(() => {
    passwordref.current?.select();
    alert("copied")
    window.navigator.clipboard.writeText(pass)
   },
   [pass])

   const PasswordGenerator= useCallback(function(){
       let password = "";
       let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
       if(number) str += "0123456789";  
       if(char) str += "/*-!@#$%^&*";
  

       for(let i =1; i<=length; i++){
         let char2 = Math.floor(Math.random()*str.length +1)
         password += str.charAt(char2)
       }

       setpass(password);
     }, [length,number,char,setpass])
     
     useEffect(() => {
      PasswordGenerator()
     }, [length,number,char,PasswordGenerator])

  return (
    <div>
        <h1 className='text-4xl text-center text-white my-5'>Password Generator</h1>
        <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>

           <div className='flex gap-5 shadow rounded-full overflow-hidden mb-4'>
              <input 
              type="text"
              value={pass}
              className='outline-none w-full py-1 px-3' 
              placeholder='password'
              readOnly
              ref={passwordref}/>
              <button onClick={copypassword} className='px-4 bg-black'>copy</button>
            </div> 
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className=' cursor-pointer '
            onChange={(e) =>{setlength(e.target.value)}}
             />
             <label>Length: {number}</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input 
             type="checkbox"
             defaultChecked ={number}
             id='numberInput'
             onChange={() => {
              setnumber((prev) => !prev);
             }} />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
             <input 
             type="checkbox"
             defaultChecked ={char}
             id='charInput'
             onChange={() => {
              setchar((prev) => !prev);
             }} />
             <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default App