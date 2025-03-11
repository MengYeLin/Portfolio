'use client';
import * as React from "react";
import { useRouter } from 'next/navigation'
 


const NavBar: React.FC = () => {
    const router = useRouter();

    const myWork = () => {
        const myWork = document.getElementById("mywork");
        if(myWork){
            myWork?.scrollIntoView({behavior: 'smooth'});
        }else{
            router.push("/#mywork")
        }
    }


    const aboutMe = () => {
        const aboutme = document.getElementById("aboutme");
        if(aboutme){
            aboutme?.scrollIntoView({behavior: 'smooth'});
        }else{
            router.push("/#aboutme")
        }
    }

    const contactMe = () => {
        const contactme = document.getElementById("contactme");
        if(contactme){
            contactme?.scrollIntoView({behavior: 'smooth'});
        }else{
            router.push("/#contactme")
        }
    }

    

    return (
        <nav className="bg-orange-100  w-full z-10 relative">
            <div className=" p-5  items-center">
                {/* <span>
                    Sophia
                </span> */}
                <ul className="flex font-semibold subtitle ">
                    <li className="px-4 py-2 text-[#594F43] hover:text-black hover:cursor-pointer"><a href="/">Home</a></li>
                    <li className="px-4 py-2 text-[#594F43] hover:text-black hover:cursor-pointer"><a onClick={myWork}>Work</a></li>
                    <li className="px-4 py-2 text-[#594F43] hover:text-black hover:cursor-pointer"><a onClick={contactMe} >Contact</a></li>
                    <li className="px-4 py-2 text-[#594F43] hover:text-black hover:cursor-pointer"><a onClick={aboutMe} >About Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar