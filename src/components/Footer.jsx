import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo.png'
const Footer = () => {
  return (
    <>
      <footer class="bg-[#3E0478] pt-20 pb-6 px-4">
        <div class="flex justify-between lg:max-w-7xl w-full px-2 mx-auto pb-8 border-b-1 border-[#D9D9D9]">
            <div class="lg:w-1/4 w-1/3">
                <div class="footer_logo mb-5">
                    <Link to="/">
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <p className="!text-white text-sm mb-5">Trusted <strong>Mattress</strong> experts delivering reliable heating and cooling solutions.</p>
                <ul className="flex gap-4">
                    <li><a href="#" class="text-white text-2xl"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#" class="text-white text-2xl"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#" class="text-white text-2xl"><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="w-1/3 text-center">
                <h5 className="text-white mb-4 font-semibold text-xl">Our Products</h5>
                <ul>
                    <li className="mb-2"><Link to="/" class="text-white">Mattress</Link></li>
                    <li className="mb-2"><Link to="#" class="text-white">Pillows</Link></li>
                    <li class="mb-2"><Link to="#" class="text-white"> Baby Set</Link></li>
                    <li><Link to="#" class="text-white">Spin mattress</Link></li>
                </ul>
            </div>
            <div class="w-1/3">
                <ul>
                    <li className="text-white mb-3"><i class="fa-solid fa-phone mr-3"></i> (555) 123-4567</li>
                    <li className="text-white mb-3"><i class="fa-solid fa-envelope mr-3"></i> mail.coolquest.com</li>
                    <li className="text-white mb-3"><i class="fa-solid fa-location-dot mr-3"></i> 1234 Maplewood Drive, Houston, TX 77002, United States</li>
                </ul>
            </div>
        </div>
        <div>
            <p className="!text-white text-center text-sm pt-6">&copy;2025 all rights resereved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer