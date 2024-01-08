import React from 'react';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <>
<footer className="footer p-10 mt-10 bg-[#000000] text-white">
  <aside>
  <Link to={'/'}><h1 className='lg:text-2xl text-lg font-bold'>NOVANOTES</h1></Link>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 2021</p>
    
    <div className="flex justify-center items-center text-[#17ADF8] gap-4 pt-3 text-3xl">

<CiFacebook/>
<CiInstagram/>
<FaWhatsapp/>
<FaTwitter/>
</div>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">All Blogs</a>
    <a className="link link-hover">Add Blogs</a>
    <a className="link link-hover">Featured</a>
    <a className="link link-hover">Wishlist</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    
  </nav>

 
</footer>
<h1 className='text-center text-white bg-[#000000] font-semibold'>Copyright&copy;2024 Developer Ashikur Ovi</h1>
</>
    );
};

export default Footer;