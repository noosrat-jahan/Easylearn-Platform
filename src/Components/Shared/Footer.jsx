import React from 'react';
import logo from '../../assets/Easy learn.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div>
                <footer className="bg-pink-100 dark:bg-gray-800 dark:text-white font-poppins text-black py-8">
                    <div className="container mx-auto px-5 md:px-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
                            
                            <div className='flex flex-col items-center justify-center space-y-5'>
                                {/* Logo & Description */}
                                <div className='space-y-3'>
                                    <img src={logo} alt="" className=' w-1/2 mx-auto' />
                                    <p className=" text-sm text-center">
                                        EasyLearn is your trusted educational platform, designed to empower students and educators with innovative tools and seamless learning experiences for academic success.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div>
                                    <h4 className="text-xl text-center font-bold mb-4">Follow Us On</h4>
                                    <ul className="flex space-x-4 items-center justify-center">
                                        <li className='bg-[#fcc54a] p-2 rounded-full'>
                                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

                                                <FaFacebook className='text-2xl hover:text-pink-500'></FaFacebook>
                                            </a>
                                        </li>
                                        <li className='bg-[#fcc54a] p-2 rounded-full'>
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">

                                                <FaTwitter className="text-2xl hover:text-pink-500"></FaTwitter>
                                            </a>
                                        </li>
                                        <li className='bg-[#fcc54a] p-2 rounded-full'>
                                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

                                                <FaInstagram className="text-2xl hover:text-pink-500"></FaInstagram>
                                            </a>
                                        </li>
                                        <li className='bg-[#fcc54a] p-2 rounded-full'>
                                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">

                                                <FaYoutube className="text-2xl hover:text-pink-500"></FaYoutube>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Quick Links */}

                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul>
                                    <li><a className="text-white-400 ">Home</a></li>
                                    <li><a className="text-white-400 ">About EASYLEARN</a></li>
                                    <li><a className="text-white-400 ">FAQs</a></li>
                                    <li><a className="text-white-400 ">Terms of Service</a></li>
                                    <li><a className="text-white-400 ">Contact Us</a></li>
                                    <li><a className="text-white-400 ">Privacy Policy</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">Resources</h3>
                                <ul>
                                    <li><a className="text-white-400 ">Blog</a></li>
                                    <li><a className="text-white-400 ">Training Tips</a></li>
                                    <li><a className="text-white-400 ">Tutorials</a></li>
                                    <li><a className="text-white-400 ">Support</a></li>
                                    <li><a className="text-white-400 ">Upcoming Events</a></li>
                                    <li><a className="text-white-400 ">Sponsorship Opportunities</a></li>
                                </ul>
                            </div>



                            <div>
                                <h3 className="text-xl font-bold mb-4">EASYLEARN Headquarters</h3>
                                <p>EasyLearn HQ</p>
                                <p>123 Learning Street</p>
                                <p>Dhaka, Bangladesh</p>

                                <p>Phone: +880 123-456-789</p>
                                <p>Email: <a href="mailto:contact@EASYLEARN.com" className="text-[#d46934] font-bold">contact@EASYLEARN.com</a></p>
                            </div>
                        </div>

                        <div className="border-t border-white-700 mt-10 pt-5 text-center text-sm text-black dark:text-white">
                            © {new Date().getFullYear()} EASYLEARN. All Rights Reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;