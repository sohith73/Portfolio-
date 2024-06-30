import React from "react";
import {
     RxDiscordLogo,
     RxGithubLogo,
} from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { ImTwitter } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
     const email = "sohith73@gmail.com";
     return (
          <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]  z-40 ">
               <div className="w-full flex flex-col items-center justify-center m-auto">
                    <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                         <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                              <div className="font-bold text-[16px]">Community</div>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <FaYoutube />
                                   <Link to='https://www.youtube.com/channel/UCeJjuSgqLi3PHF3arQbtniw'><span className="text-[15px] ml-[6px]">Youtube</span></Link>
                              </p>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <RxGithubLogo />
                                   <Link to="https://github.com/sohith73"><span className="text-[15px] ml-[6px]">Github</span></Link>
                              </p>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <RxDiscordLogo />
                                   <Link to='https://discord.gg/6rmwgeWjsx'><span className="text-[15px] ml-[6px]">Discord</span></Link>
                              </p>
                         </div>
                         <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                              <div className="font-bold text-[16px]">Social Media</div>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <CiLinkedin height={29} />
                                   <Link to="https://www.linkedin.com/in/sohith-bandreddi/"><span className="text-[15px] ml-[6px]">Linkedin</span></Link>
                              </p>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <FaInstagram />
                                   <span className="text-[15px] ml-[6px]">Instagram</span>
                              </p>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <ImTwitter />
                                   <span className="text-[15px] ml-[6px]">Twitter</span>
                              </p>
                         </div>
                         <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                              <div className="font-bold text-[16px]">About</div>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <Link to='/xyz'><span className="text-[15px] ml-[6px]">About me</span></Link>
                              </p>
                              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                   <a href={`mailto:${email}`} style={styles.emailLink}>{email}</a>
                              </p>
                         </div>
                    </div>

                    <div className="mb-[20px] text-[15px] text-center">
                         &copy; BSC Op.co.in 2021 Inc. All rights reserved
                    </div>
               </div>
          </div>
     )
}
const styles = {
     emailLink: {
          color: '#0000EE',
          textDecoration: 'none',
     }
};

export default Footer