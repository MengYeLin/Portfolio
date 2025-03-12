'use client'
import * as React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <button className={`flex justify-center px-9 py-6 rounded-2xl ${className}`}>
    {children}
  </button>
);

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}


const Project: React.FC<ProjectProps> = ({ title, description, imageUrl, href }) => (
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
      <div
        className="flex flex-col self-stretch my-auto text-2xl leading-9 max-md:mt-10"
      >
        <div className="text-3xl font-bold text-stone-700">{title}</div>
        <div className="mt-1 font-medium leading-9 text-stone-600">
          {description}
        </div>
        <a href={href} className="mt-6 font-semibold text-slate-600">View Case Study</a>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src={imageUrl}
        className="grow w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  </div>
);



const MyComponent: React.FC = () => {
  const myWork = () => {
    document.getElementById("mywork")?.scrollIntoView({ behavior: 'smooth' });
  }

  const contactme = () => {
    document.getElementById("contactme")?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="flex flex-col pb-20 bg-orange-100">
      <section className="w-full max-md:max-w-full">
        <header className="flex gap-5 flex-row relative">
          <div className="flex flex-col md:w-6/12 sm:w-full">
            <img src="images/banner.svg" alt="banner image" className='relative sm:-left-[20%] 2sm:left-0 md:left-0 sm:max-h-[500px] md:max-h-none sm:self-start md:self-auto ' />
          </div>
          <div className="flex flex-col sm:w-fit sm:p-2 md:p-0  md:w-6/12 justify-center sm:z-10 sm:absolute md:relative sm:right-0 sm:top-20 md:top-0
          ">
            <h1 className="flex flex-col self-stretch font-semibold sm:items-center md:items-start ">
              <span className="flex flex-col justify-center md:text-4xl md:leading-[60px] md:whitespace-nowrap lg:whitespace-normal tracking-widest sm:text-2xl lg:text-6xl lg:leading-[80px] text-stone-700">
                <span className="justify-center px-5">
                  I’m Sophia Lin,
                </span>
                <span className="justify-center px-5">
                  A UX/UI Designer
                </span>
              </span>
            </h1>
            <div className="flex gap-4 mt-8 sm:text-base md:text-2xl sm:flex-col md:flex-row sm:items-center md:items-start">
              <button type='button' className="transition-all duration-300 text-violet-50 bg-slate-600 hover:shadow-xl hover:scale-105 border-4 border-slate-600 rounded-lg p-5 sm:w-fit md:w-fit" onClick={myWork}>
                <div className="flex gap-3 pr-2 justify-center" >
                  View My Work
                </div>
              </button>
              <button type='button' className="transition-all duration-300 hover:shadow-xl hover:scale-105 text-gray-600 border-4 border-gray-600 max-md:px-5 rounded-lg p-5 w-[165px] md:w-fit bg-orange-100" onClick={contactme} >
                <div className="flex gap-3 pr-2 justify-center">
                  Contact Me
                </div>
              </button>
            </div>
          </div>
        </header>
      </section>
      <div className="flex flex-col justify-center items-center p-20 bg-orange-200 bg-opacity-50 max-md:px-5">
        <div id="mywork" className="mt-4 text-6xl font-semibold tracking-wider text-stone-700 max-md:max-w-full max-md:text-4xl">
          My Recent Work
        </div>
        <div className="flex flex-col justify-center items-start px-16 mt-10 max-w-full bg-orange-50 rounded-3xl max-w-screen-xl max-md:pl-5">
          <div className="ml-3 max-md:max-w-full">
            <Project
              title="Marianna Construction"
              description="We developed Marianna Construction's digital presence, from UX research to a user-friendly UI prototype, attracting new clientele."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad0f6732c3800a4b1c67aa237350f5b246dfe2e51e690527bb60a9c850f4cd5?apiKey=1df82e88e56546ae8eb46a6a9599b6ce&"
              href='/marianna-construction'
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-10 mt-7 max-w-full bg-orange-50 rounded-3xl max-w-screen-xl max-md:px-5">
          <div className="max-md:max-w-full">
            <Project
              title="YIN HUA ASSOCIATION OF ONTARIO CANADA"
              description="An immersive platform for celebrating and preserving Hakka culture online."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a3f101a1cafa9316862e4a9765543f6b6e47fe9b574f663afa99180d012422e2?apiKey=1df82e88e56546ae8eb46a6a9599b6ce&"
              href='/yin-hua'
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-16 mt-7 m
        ax-w-full bg-orange-50 rounded-3xl max-w-screen-xl max-md:pl-5">
          <div className="ml-3 max-md:max-w-full">
            <Project
              title="Yippy"
              description="Simplifying family travel with custom planning and booking services for parents and kids."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b918109203546d3b103dae58e77549e685b72a175532a39e826022e7171d0894?apiKey=1df82e88e56546ae8eb46a6a9599b6ce&"
              href='/yippy'
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 text-2xl font-semibold bg-orange-100 max-md:px-5">
        <div className="flex flex-col items-start w-full max-w-screen-xl max-md:max-w-full">
          <div id="aboutme" className=" text-6xl tracking-wider text-stone-700 max-md:max-w-full max-md:text-4xl">
            A Little Bit About Me
          </div>
          <div className="mt-8 font-medium leading-9 text-stone-600 max-md:max-w-full">
            Welcome to the digital realm of Sophia Lin, a passionate UX/UI
            designer dedicated to reshaping how we interact with technology. With
            a background in graphic design and a fervent curiosity for
            human-centered design principles, Sophia blends artistry with
            functionality to create memorable user experiences. Her journey is
            fueled by a relentless pursuit of excellence, driven by a deep
            understanding of user needs and behaviors. Through collaboration and
            iterative design processes, Sophia crafts intuitive interfaces that
            guide users seamlessly through digital landscapes. Join Sophia on her
            quest to redefine digital interactions and shape the future of UX/UI
            design.
          </div>
          <div className="justify-center px-10 py-6 mt-20 text-gray-600 rounded-2xl border-4 border-gray-600 border-solid leading-[150%] max-md:px-7 max-md:mt-10">
            Contact Me
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-20 font-semibold bg-orange-200 bg-opacity-50 max-md:px-5">
        <div className="flex gap-5 items-end my-32 max-md:flex-wrap max-w-screen-xl w-full">
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <div id="contactme" className="text-6xl tracking-wider text-stone-700 max-md:max-w-full max-md:text-4xl">
              Let’s work together{" "}
            </div>
            <div className="justify-center self-start px-10 py-6 mt-14 text-2xl leading-9 text-gray-600 rounded-2xl border-4 border-gray-600 border-solid max-md:px-7 max-md:mt-10">
              Contact Me
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/99097578fd9c1a895bb901dee66c3e4a001ae544a232adc9ed9606c5b44cdf6c?apiKey=1df82e88e56546ae8eb46a6a9599b6ce&"
            className="shrink-0 mt-32 aspect-[0.99] w-[83px] max-md:mt-10 ml-auto"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05388ab49aa2f5cd1200c76199e5ddaf74f953d88aa6a0a88f057584eedc65b?apiKey=1df82e88e56546ae8eb46a6a9599b6ce&"
            className="shrink-0 mt-32 aspect-square w-[87px] max-md:mt-10"
          />
        </div>
      </div>
    </main>
  )
};

export default MyComponent;