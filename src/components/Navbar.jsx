import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-4 h-[60px] rounded=lg bg-white gap-2 text-xl font-medium'>
        <img src="/firebase.svg" alt="" />
            <h1>Firebase Contact App</h1>
    </div>
  )
}

export default Navbar