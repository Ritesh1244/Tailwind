import React from 'react'
import './App.css'

function App() {
  

  return (
    <>
    {
    //=============================================grid================================
    /* <div className=" grid grid-cols-10">
      <div className='bg-red-500 col-span-4'>Hi</div>
      <div className='bg-green-500 col-span-4'>Hello</div>
      <div className='bg-yellow-500 col-span-2'>Hello2</div>
    </div> */
    }
    <div className=" grid grid-cols-1 sm:grid-cols-3">
    <div className='bg-red-500'>Hi</div>
      <div className='bg-green-500'>Hello</div>
      <div className='bg-yellow-500'>Hello2</div>
    </div>
    </>
  )
}

export default App
