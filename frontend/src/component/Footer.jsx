import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        {/*----left section---- */}
        <div>
            <img src={assets.logo} alt="" />
            <p>Your health, our priority. Stay connected with top doctors through our app</p>
        </div>
             {/*----center section---- */}
        <div>
           <p>COMPANY</p>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
           </ul>
        </div>

                {/*----center section---- */}
                <div>
            <p>GET IN TOUCH</p>
            <ul>
                <li>+234 90 2537 5109</li>
                <li>carebuddy@info.com</li>
            </ul>
           </div>
    </div>
  )
}

export default Footer