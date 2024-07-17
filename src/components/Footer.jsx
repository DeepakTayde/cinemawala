import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2'>
      <div className="flex justify-center items-center gap-4">
        <Link>About Us</Link>
        <Link>Contact us</Link>
      </div>
      <p>Created By Deepak Tayde</p>
    </footer>
  )
}

export default Footer