import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState("red") 

  const buttonData = [
    { color: "red", text: "red" },
    { color: "green", text: "green" },
    { color: "blue", text: "blue" },
    { color: "yellow", text: "yellow" },
    { color: "orange", text: "orange" },
    { color: "black", text: "black" },
    { color: "skyblue", text: "skyblue" },
  ];
  return (
    <div style={{backgroundColor: color}} className='w-full h-screen duration-200'>
         <div className='fixed flex flex-wrap justify-center px-3 bottom-12 inset-x-0'>
              <div className='flex flex-wrap justify-center gap-3 shadow-lg text-white bg-white px-3 py-2 rounded-3xl'>
              {buttonData.map((button, index) => (
        <button onClick={()=> setcolor(button.color)}
          key={index}
          style={{ backgroundColor: button.color }}
          className="outline-none px-4 py-1 rounded-full shadow-xl"
        >
          {button.text}
        </button>
      ))}
              </div>
         </div>
    </div>
  )
}

export default App