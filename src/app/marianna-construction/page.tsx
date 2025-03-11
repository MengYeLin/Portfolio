import Image from "next/image";
import * as React from "react";

const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">
            <div className="absolute w-full justify-between flex top-0">
                <div className="mt-32 flex gap-4 bg-[#1A5F58] w-fit p-8 rounded-r-full h-fit ">
                    <Image src="/images/house.png" width={54} height={54} alt="house" className="w-14 h-14" />
                    <p className="text-white text-xl">
                        Marianna <br />
                        Construction
                    </p>
                </div>
                <div className="self-end">
                    <Image src="/images/Union.png" width={500} height={400} className="w-auto h-auto" alt="header image" />
                </div>
            </div>
            <div className="flex flex-col self-center w-full sm:p-5 md:p-10 lg:p-0 z-10">
                <div className="max-md:max-w-full  sm:p-5 md:p-10 lg:p-20 mt-40">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between">
                        <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col my-auto  text-neutral-500 md:mt-10">
                                <div className="relative rounded-[50px] text-2xl border p-4 w-fit text-marianna bg-[#F8FFEC]" >
                                    UI/UX Case Study
                                    <Image className="absolute -right-11 top-10" src="/images/arrow.png" alt="arrow" width={65} height={65} />
                                </div>
                                <div className="z-10 sm:text-3xl md:text-6xl lg:text-7xl font-extrabold text-marianna mt-20">
                                    Marianna Construction
                                </div>
                                <Image src="/images/figma.png" alt="figma" width={79} height={79} className="md:mt-40 border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full sm:-mt-24 md:m-0 max-w-[50%] ">
                            <Image src="/images/marianna/header.svg"  width={974} height={795} alt="header" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex flex-col items-center w-full text-black bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        Problem <span className="text-marianna">Statement</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 md:text-xl">
                        Marianna Construction is challenged in effectively establishing and promoting their professional services. Only receiving referrals through word-of-mouth means they do not reach a large demographic.
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        Possible <span className="text-marianna">Solution</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 md:text-xl">
                        How might we create a  platform that is user-friendly to showcase their expertise, offerings and attract potential clients?
                    </div>
                </div>
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="text-marianna">Design Thinking</span> Process
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/DesignThinkingProcess.svg' width="1042" height="603" alt="Design thinking process image" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center w-full section-y-padding">
                <div className="self-center font-semibold text-black section-title">
                    Brainstorming
                </div>
                <div className="max-w-screen-xl sm:p-5 md:p-10 lg:px-20 lg:pt-0 lg:pb-20">
                    <Image src='images/marianna/Brainstorm.svg' width="1107" height="817" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex justify-center items-center w-full bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col w-full max-w-screen-xl md:text-4xl sm:p-5 md:p-10 lg:p-20 text-black">
                    <div className="self-center font-semibold section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="text-marianna">Empathize</span> Phase
                    </div>
                    <div className="self-start sm:mt-5 md:mt-20 lg:mt-32 title">
                        Qualitative Research
                    </div>
                    <div className="mt-3.5 text-justify paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                    <div className="self-start sm:mt-5 md:mt-10 lg:mt-32 title">
                        User Interview Questions
                    </div>
                    <div className="mt-3.5 text-justify paragraph">
                        <ol className="list-decimal pl-4">
                            <li>
                                How long have you been living here?
                            </li>
                            <li>
                                Do you like your house?
                            </li>
                            <li>
                                Why do you want to renovate your home?
                            </li>
                            <li>
                                Did you do any online research about your project? What website did you use?
                            </li>
                            <li>
                                Why did you decide to find a contractor, and how did you find him
                            </li>
                            <li>
                                How do you set up the budget?
                            </li>
                            <li>
                                In the end, is it over budget if yes? How do you feel about that?
                            </li>
                            <li>
                                Are you satisfied with the result?
                            </li>
                            <li>
                                If you need to do another home project, will you do anything different?
                            </li>
                            <li>
                                What are their dislikes?
                            </li>
                            <li>
                                What will make them not to hire same contractor?
                            </li>
                            <li>
                                What is the preferences in payment options?
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title">
                        Affinity <span className="text-marianna">diagram</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/Affinity.svg' width="1141" height="1517" alt="image of affinity diagram" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="text-marianna">Competitor</span> Analysis
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src="/images/marianna/competitor.png" width="1098" height="557" alt="image of competitor" />
                    </div>

                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5 mt-20">
                        Value <span className="text-marianna">Proposition</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/ValueProposition.svg' width="1098" height="557" alt="image of value proposition" />
                    </div>
                </div>
            </section>




            <section className="flex flex-col items-center section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="text-marianna">Define</span> Phase
                    </div>
                    <div className="self-start font-semibold text-black section-title mt-20 text-3xl">
                        User Persona
                    </div>
                    <div className="self-start subtitle text-justify text-black mt-5">
                        Hannah is a married professional mother who is interested in pursuing some home renovation projects and would like
                        to find a small business contractor online.
                    </div>
                    <div className="self-start sm:mt-5 md:mt-20 lg:mt-32">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col sm:w-full md:w-[50%] lg:w-[40%]">
                                <div className="flex flex-col grow items-center p-5 lg:p-10 w-full bg-white rounded-3xl shadow-lg">
                                    <Image src='/images/marianna/hannah.png' className="max-w-full rounded-full border-white border-solid aspect-[0.99] border-[10px] w-[249px]" width={230} height={230} loading="lazy" alt="Photo of Hannah Lee" />
                                    <div className="sm:mt-2 md:mt-6 title text-marianna">Hannah Lee</div>
                                    <div className="self-stretch mt-8">
                                        <div className="flex gap-5 flex-row sm:justify-center lg:justify-normal">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col grow description text-black capitalize whitespace-nowrap gap-2">
                                                    <div>Age</div>
                                                    <div>Education</div>
                                                    <div>Status</div>
                                                    <div>Occupation</div>
                                                    <div>Location</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col description text-black gap-2">
                                                    <div>37</div>
                                                    <div>Master in Business</div>
                                                    <div>Married with children</div>
                                                    <div>Sales Manager</div>
                                                    <div>Toronto</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 subtitle text-marianna">Personality</div>
                                    <div className="flex gap-1 mt-5 text-black whitespace-nowrap">
                                        <div className="flex flex-auto gap-2 items-center flex-wrap ">
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Introvert</div>
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Thinker</div>
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Tech-Savy</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 subtitle text-black">Masters in Business</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:w-full md:w-[50%] lg:w-[60%] max-md:ml-0 max-md:w-full ">
                                <div className="flex flex-col grow gap-5">
                                    <div className="flex flex-col p-5 lg:p-10 bg-white rounded-3xl shadow-sm  ">
                                        <div className="title text-marianna">Brief Story</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Hannah currently lives in a home with her husband and son. They have lived there for the past 5 years. She loves
                                            spending time in her backyard and garage but feels like some renovations inside the house are needed.{" "}
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 bg-white rounded-3xl shadow-sm ">
                                        <div className="title text-marianna">Goals</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Wants to find a trustworthy contractor for home renovation projects
                                            <br />
                                            She wants consistent communication with the contractor and to stay within budget
                                            <br />
                                            She prefers using online websites to find contractors and educate herself
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 rounded-3xl shadow-sm bg-white">
                                        <div className="title text-marianna">Frustations</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Price and budget can get too high related to quality they provide
                                            <br />
                                            Currently finds perfect people from past work relations, family, friends and within my circle which is tedious.
                                            <br />
                                            Not much choice online to find reliable contractor websites with information, services offered and pictures with
                                            reviews and testimonials
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center  section-y-padding w-full text-black bg-[#ECF0EF]">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title">
                        Storyboard
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 w-full">
                    <Image className="w-full" src='images/marianna/Storyboard.svg' width="1366" height="1071" alt="image of a storyboard" />
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-black section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        User <span className="text-marianna">Flow</span>
                    </div>
                    <div className="max-w-full h-auto self-center w-full sm:mt-5 md:mt-20 lg:mt-32">
                        <Image className="w-full" src='images/marianna/userflow.svg' width="1366" height="1071" alt="image of a wireframe" />
                    </div>
                </div>
            </section>



            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        Site Map
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/Sitemap.svg' width="1098" height="557" alt="image of a sitemap" />
                    </div>
                </div>
            </section>



            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        Low-Fidelity Wireframes
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <Image src='images/marianna/LowFi-1.svg' width="1098" height="557" alt="image of a sitemap" />
                            </div>
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ">
                                <div className="flex flex-col max-md:mt-6 max-md:max-w-full gap-5">
                                    <Image src='images/marianna/LowFi-2.svg' width="1098" height="557" alt="image of a sitemap" />
                                    <Image src='images/marianna/LowFi-3.svg' width="1098" height="557" alt="image of a sitemap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="text-marianna"></span>Mobile Wireframe
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 w-full">
                    <Image className="w-full" src='images/marianna/wireframe.svg' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>


            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="font-semibold">Typography & </span>
                        <span className="font-semibold text-marianna">Colors</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 flex flex-col gap-20">
                        <Image src='images/marianna/font.svg' width="1280" height="557" alt="image of a sitemap" />
                        <Image src='images/marianna/colors.svg' width="1280" height="557" alt="image of a sitemap" />
                    </div>
                </div>
            </section>



            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="font-semibold text-black">UI </span>
                        <span className="font-semibold text-marianna">Style Guide</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image className="w-full" src='images/marianna/uistyleguide.svg' width="1366" height="1071" alt="image of a wireframe" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="font-semibold text-marianna">Mobile </span>
                        <span className="font-semibold">Prototype</span>
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                    <Image className="w-full" src='images/marianna/mobileprototype.svg' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-center font-semibold text-marianna section-title rounded-[50px] border bg-[#EBF0EF] px-20 py-5">
                        <span className="font-semibold text-marianna">Desktop </span>
                        <span className="font-semibold">Prototype</span>
                    </div>
                    <div className="sm:mt-5 md:mt-20 lg:mt-32 shadow-lg max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full gap-5">
                                    <Image className="w-full" src='images/marianna/desktop-1.svg' width="1366" height="1071" alt="image of a wireframe" />
                                    <Image className="w-full" src='images/marianna/desktop-2.svg' width="1366" height="1071" alt="image of a wireframe" />
                                    <Image className="w-full" src='images/marianna/desktop-3.svg' width="1366" height="1071" alt="image of a wireframe" />
                                    <Image className="w-full" src='images/marianna/desktop-4.svg' width="1366" height="1071" alt="image of a wireframe" />
                                </div>
                            </div>
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col max-md:mt-10 max-md:max-w-full gap-5">
                                    <Image className="w-full" src='images/marianna/desktop-5.svg' width="1366" height="1071" alt="image of a wireframe" />
                                    <Image className="w-full" src='images/marianna/desktop-6.svg' width="1366" height="1071" alt="image of a wireframe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>``
            </section>
        </div>
    );
};

export default MyComponent;