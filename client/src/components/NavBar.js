import React from 'react'
import { Link } from 'react-router-dom';
import App from "../images/Logopic.png"

function Navbar() {
    return (
        <div className=' font'>
            <div className='d-flex justify-content-between mb-1'>
                <img src={App} className='imgSize  justify-content-start m-5' alt="logo"></img>
                <Link to="/" className=" m-5 p-2 justify-content-end">Home</Link>
            </div>
        </div>
    )
}

export default Navbar