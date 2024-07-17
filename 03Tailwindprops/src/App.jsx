import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='bg-black flex items-center justify-center flex-col gap-5 md:flex-row '>
      <Card name="Mac" btn="firse bhar"/>
      <Card name="Apple" btn="aukat ke bhar"/>
    </div>
  )
}

export default App