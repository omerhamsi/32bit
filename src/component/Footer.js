import React from 'react'
import Dummy from "../images/dummy.png"
import "../style/Footer.css"
function Footer() {
  return (
    <div className='Footer'>
        <img src={Dummy} alt="" />
        <h3 style={{marginLeft:"20px"}}>Dummy Footer</h3>
    </div>
  )
}
export default Footer
