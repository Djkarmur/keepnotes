import React from 'react'
import './newnote.css';
const Footer = () => {
    const year =  new Date().getFullYear();
  return (
    <div className='footer'>Copyright © {year}</div>
  )
}

export default Footer