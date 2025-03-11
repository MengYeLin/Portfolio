import Image from "next/image";
import * as React from "react";

const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">
            <div className="flex flex-col self-center w-full max-w-screen-xl sm:p-5 md:p-10 lg:p-20">
                <div className="z-10 sm:text-3xl md:text-6xl lg:text-7xl font-extrabold text-yippy">
                    Yippy
                </div>
                <div className="mt-2 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col my-auto text-neutral-500 md:mt-10">
                                <div className="rounded-3xl text-2xl border p-4 w-fit text-yippy bg-[#F8FFEC]" >UI/UX Case Study</div>
                                <div className="sm:text-2xl md:text-3xl whitespace-nowrap">Your family’s travel assistant </div>
                                <div className="flex flex-row mt-20 gap-5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ec7bd6fc70443c4beb9cffc63e65af0663fd5d7a43345158f7d4fe2320b44?apiKey=c1a57e0a3f6549b4b931d9b94e2037d0&"
                                    alt=""
                                    className="border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                                   <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ec7bd6fc70443c4beb9cffc63e65af0663fd5d7a43345158f7d4fe2320b44?apiKey=c1a57e0a3f6549b4b931d9b94e2037d0&"
                                    alt=""
                                    className="border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                                   <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ec7bd6fc70443c4beb9cffc63e65af0663fd5d7a43345158f7d4fe2320b44?apiKey=c1a57e0a3f6549b4b931d9b94e2037d0&"
                                    alt=""
                                    className="border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                                   <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ec7bd6fc70443c4beb9cffc63e65af0663fd5d7a43345158f7d4fe2320b44?apiKey=c1a57e0a3f6549b4b931d9b94e2037d0&"
                                    alt=""
                                    className="border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full sm:-mt-24 md:m-0">
                            <img
                                loading="lazy"
                                src="images/yippy/banner.png"
                                alt=""
                                className="grow w-full max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex flex-col items-center w-full text-black bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        Design Thinking Process
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/DesignThinkingProcess.svg' width="1042" height="603" alt="Design thinking process image" />
                    </div>

                </div>
            </section>

            <section className="flex justify-center w-full section-y-padding">
                <div className="max-w-screen-xl sm:p-5 md:p-10 lg:p-20">
                    <Image src='images/marianna/Brainstorm.svg' width="1107" height="817" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex justify-center items-center w-full bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col w-full max-w-screen-xl md:text-4xl sm:p-5 md:p-10 lg:p-20 text-black">
                    <div className="self-start font-semibold text-yippy section-title">
                        Empathize Phase
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


            <section className="flex flex-col items-center w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="flex gap-5 justify-between sm:flex-col md:flex-row">
                        <div className="flex flex-col max-md:max-w-full basis-1/2">
                            <div className="md:mt-5 text-yippy title font-semibold  whitespace-nowrap">Problem Statement</div>
                            <div className="sm:mt-2 md:my-5 text-justify text-black  paragraph">
                                <span>
                                    Marianna Construction is challenged in effectively establishing and promoting their professional services.
                                    Only receiving referrals through word-of-mouth means they do not reach a large demographic.
                                </span>
                            </div>
                        </div>
                        <div className="shrink-0 w-2 bg-black border-4 border-black border-solid sm:hidden md:block " />
                        <div className="flex flex-col max-md:max-w-full basis-1/2">
                            <div className="md:mt-5 title text-yippy font-semibold whitespace-nowrap">Problem Solution</div>
                            <div className="sm:mt-2 md:my-5 paragraph text-justify text-black">
                                How might we create a platform that is user-friendly to showcase their expertise, offerings and attract
                                potential clients?
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center  w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        Affinity diagram
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/Affinity.svg' width="1141" height="1517" alt="image of affinity diagram" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        Value Proposition
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/ValueProposition.svg' width="1098" height="557" alt="image of value proposition" />
                    </div>
                </div>
            </section>




            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
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
                                    <div className="sm:mt-2 md:mt-6 title text-yippy">Hannah Lee</div>
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
                                    <div className="mt-10 subtitle text-yippy">Personality</div>
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
                                        <div className="title text-yippy">Brief Story</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Hannah currently lives in a home with her husband and son. They have lived there for the past 5 years. She loves
                                            spending time in her backyard and garage but feels like some renovations inside the house are needed.{" "}
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 bg-white rounded-3xl shadow-sm ">
                                        <div className="title text-yippy">Goals</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Wants to find a trustworthy contractor for home renovation projects
                                            <br />
                                            She wants consistent communication with the contractor and to stay within budget
                                            <br />
                                            She prefers using online websites to find contractors and educate herself
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 rounded-3xl shadow-sm bg-white">
                                        <div className="title text-yippy">Frustations</div>
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


            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                    Storyboard
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 w-full">
                    <Image className="w-full" src='images/marianna/Storyboard.svg' width="1366" height="1071" alt="image of a storyboard" />
                </div>
            </section>



            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        Site Map
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='images/marianna/Sitemap.svg' width="1098" height="557" alt="image of a sitemap" />
                    </div>
                </div>
            </section>



            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        Low Fi Wireframes
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
                    <div className="self-start font-semibold text-yippy section-title">
                        Mobile Wireframe
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 w-full">
                    <Image className="w-full" src='images/marianna/wireframe.svg' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>


            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="font-semibold">Typography & </span>
                        <span className="font-semibold text-yippy">Colors</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 flex flex-col gap-20">
                        <Image src='images/marianna/font.svg' width="1280" height="557" alt="image of a sitemap" />
                        <Image src='images/marianna/colors.svg' width="1280" height="557" alt="image of a sitemap" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="text-5xl font-semibold text-yippy md:text-4xl sm:text-3xl lg:text-5xl pb-5">
                        User Flow
                    </div>
                    <div className="max-w-full h-auto self-center w-full sm:mt-5 md:mt-20 lg:mt-32">
                        <Image className="w-full" src='images/marianna/userflow.svg' width="1366" height="1071" alt="image of a wireframe" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="font-semibold text-black">UI </span>
                        <span className="font-semibold text-yippy">Style Guide</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image className="w-full" src='images/marianna/uistyleguide.svg' width="1366" height="1071" alt="image of a wireframe" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="font-semibold text-yippy">Mobile </span>
                        <span className="font-semibold">Prototype</span>
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                    <Image className="w-full" src='images/marianna/mobileprototype.svg' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="font-semibold text-yippy">Desktop </span>
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