// import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-400 text-black">
  <aside>
    <p  className="websiteName pt-8">Snake Eye</p>
    <div className='flex'>
        <img className='h-[20px] w-[20px] mr-4 mt-4 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="" />
        <img className='h-[20px] w-[20px] mr-4 mt-4 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="" />
        <img className='h-[20px] w-[20px] mr-4 mt-4 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="" />
    </div>
  </aside> 
  <nav>
    <h6 className="footer-title">Locate US</h6> 
    <a className="link link-hover">2247 Dhaka street, NY, NY</a>
    <a className="link link-hover">Phone: 0035 244 58 265</a>
    <a className="link link-hover">Phone: 0035 265 244 58</a>
    <a className="link link-hover">Email: snake@eye.com</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Profile</h6> 
    <a className="link link-hover">My Account</a>
    <a className="link link-hover">Checkout</a>
    <a className="link link-hover">Oder Tracking</a>
    <a className="link link-hover">Help & Support</a>
  </nav> 
  <nav>
    <input placeholder='Your Email' className='p-3 rounded-md w-[300px] bg-white' type="email" name="" id="" />
    <input className=' font-bold pl-4 cursor-pointer' type="button" value="submit" />
  </nav>
</footer>
    );
};

export default Footer;