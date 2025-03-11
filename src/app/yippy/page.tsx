import Image from "next/image";
import * as React from "react";

const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">
            <div className="absolute w-full justify-between flex top-0">
                <div className="mt-32 flex gap-4 bg-[#EEAB99] w-fit p-8 rounded-r-full h-fit ">
                    <p className="text-[#FEE4CD] text-4xl  font-extrabold">
                        Yippy
                    </p>
                </div>
                <div className="self-end">
                    <img src="/images/yippy/Union.png" />
                </div>
            </div>
            <div className="flex flex-col self-center w-full sm:p-5 md:p-10 lg:p-0 z-10">
                <div className="max-md:max-w-full  sm:p-5 md:p-10 lg:p-20 mt-40">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between">
                        <div className="flex flex-col  max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col my-auto  text-neutral-500 md:mt-10">
                                <div className="relative rounded-[50px] text-2xl border p-4 w-fit text-yippy bg-[#F8FFEC]" >
                                    UI/UX Case Study
                                    <img className="absolute -right-11 top-10" src="/images/arrow.svg" />
                                </div>
                                <div className="z-10 sm:text-3xl md:text-6xl lg:text-7xl font-extrabold text-yippy mt-20">
                                    Yippy
                                </div>
                                <div className="mt-4 text-black">Your family's travel assistant</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40ec7bd6fc70443c4beb9cffc63e65af0663fd5d7a43345158f7d4fe2320b44?apiKey=c1a57e0a3f6549b4b931d9b94e2037d0&"
                                    alt=""
                                    className="md:mt-40 border border-white border-solid aspect-square w-[79px] max-md:mt-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full sm:-mt-24 md:m-0 max-w-[50%] ">
                            <img
                                loading="lazy"
                                src="images/yippy/banner.png"
                                alt=""
                                className="grow w-full  max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="flex flex-col items-center w-full text-black bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        Problem <span className="text-yippy">Statement</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 md:text-xl">
                        The challenge in traveling with kids lies in the difficulty of having enjoyable and relaxing experiences, hindering the ability to have fun during the journey.
                    </div>
                </div>

                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        <span className="text-yippy">Design Thinking</span> Process
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32">
                        <Image src='/images/yippy/DesignThinkingProcess.png' width="1042" height="603" alt="Design thinking process image" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center w-full section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        Brainstorming
                    </div>
                    <div className="max-w-screen-xl sm:p-5 md:p-10 lg:px-20 lg:pb-20">
                        <Image src='/images/yippy/Brainstorm.png' width="1107" height="817" alt="image of brainstorm" />
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center w-full bg-[#FFE5CC] section-y-padding">
                <div className="flex flex-col w-full max-w-screen-xl md:text-4xl sm:p-5 md:p-10 lg:p-20 text-black">
                    <div className="self-start font-semibold section-title">
                        <span className="text-yippy">Empathize</span> Phase
                    </div>
                    <div className="self-start sm:mt-5 md:mt-20 lg:mt-32 title">
                        Qualitative Research
                    </div>
                    <div className="mt-3.5 text-justify paragraph">
                        <ol className="list-decimal pl-4">
                            <li>
                                We choose five interviewees who has child and has family travel history before.
                            </li>
                            <li>
                                There are mainly parent with young kids
                            </li>
                            <li>
                                All question is get to know them on their travel experience
                            </li>
                        </ol>

                    </div>
                    <div className="self-start sm:mt-5 md:mt-10 lg:mt-32 title">
                        Interview Questions
                    </div>
                    <div className="mt-3.5 text-justify paragraph">
                        <ol className="list-decimal pl-4">
                            <li>
                                What is your favorite travel destination?
                            </li>
                            <li>
                                Where do you kids want to go?
                            </li>
                            <li>
                                How do you usually plan your trip?
                            </li>
                            <li>
                                What is your budget for the family travel?
                            </li>
                            <li>
                                Tell me about the experience of the last trip you went on with the kids.
                            </li>
                            <li>
                                What is the hardest part about traveling with kids?
                            </li>
                            <li>
                                What will make the trip easier?
                            </li>
                            <li>
                                What app or website do you usually use to plan the trip?
                            </li>

                        </ol>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center  w-full text-black section-y-padding">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title rounded-[50px]">
                        Affinity Diagram
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 ">
                        <Image src='/images/yippy/AffinityDiagram.png' width="1141" height="1517" alt="image of affinity diagram" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        <span className="text-yippy">Define Phase</span>
                    </div>
                    <div className="self-start font-semibold text-black section-title mt-20 text-3xl">
                        User Persona
                    </div>

                    <div className="self-start sm:mt-5 md:mt-10 ">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col sm:w-full md:w-[50%] lg:w-[40%]">
                                <div className="flex flex-col grow items-center p-5 lg:p-10 w-full bg-white rounded-3xl shadow-lg">
                                    <Image src='/images/yippy/emma.png' className="max-w-full rounded-full border-white border-solid aspect-[0.99] border-[10px] w-[249px]" width={230} height={230} loading="lazy" alt="Photo of Hannah Lee" />
                                    <div className="sm:mt-2 md:mt-6 title text-yippy">Emma Thomas</div>
                                    <div className="self-stretch mt-8">
                                        <div className="flex gap-5 flex-row sm:justify-center lg:justify-normal">
                                            <div className="flex flex-col">
                                                <div className="flex flex-col grow description text-black capitalize whitespace-nowrap gap-2">
                                                    <div>Age</div>
                                                    <div>Status</div>
                                                    <div>Occupation</div>
                                                    <div>Location</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col description text-black gap-2">
                                                    <div>35</div>
                                                    <div>Married</div>
                                                    <div>Veterinarian</div>
                                                    <div>North York</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 subtitle text-yippy">Personality</div>
                                    <div className="flex gap-1 mt-5 text-black whitespace-nowrap">
                                        <div className="flex flex-auto gap-2 items-center flex-wrap ">
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Wise</div>
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Friendly</div>
                                            <div className="description justify-center px-4 py-2 bg-gray-300 bg-opacity-80 rounded-[56px] max-md:px-5">Confident</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:w-full md:w-[50%] lg:w-[60%] max-md:ml-0 max-md:w-full ">
                                <div className="flex flex-col grow gap-5">
                                    <div className="flex flex-col p-5 lg:p-10 bg-white rounded-3xl shadow-sm  ">
                                        <div className="title text-yippy">Brief Story</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            Emma was married with her husband and have a baby few months ago. Lily and her husband wish to  travel and explore new places, make memories, and have fun together as a family.
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 bg-white rounded-3xl shadow-sm ">
                                        <div className="title text-yippy">Goals</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            <ul className="list-disc">
                                                <li>
                                                    Travel to place that is kids friendly
                                                </li>
                                                <li>
                                                    She wants have nice trip but stay within budget
                                                </li>
                                                <li>
                                                    Easy travel
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-5 lg:p-10 rounded-3xl shadow-sm bg-white">
                                        <div className="title text-yippy">Frustations</div>
                                        <div className="sm:mt-2 md:mt-6 description text-justify text-black">
                                            <ul className="list-disc">
                                                <li>
                                                    It is hard to book all the restaurant before the trip
                                                </li>
                                                <li>
                                                    There are not many places that are kid friendly.
                                                </li>
                                                <li>
                                                    There are too much stuff to pack before the trip.
                                                </li>
                                            </ul>
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
                    <div className="self-start font-semibold text-yippy section-title">
                        Storyboard
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 w-full">
                    <Image className="w-full" src='/images/yippy/Storyboard.png' width="1366" height="1071" alt="image of a storyboard" />
                </div>
            </section>

            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-black section-title">
                        <span className="text-yippy">User Flow</span>
                    </div>
                    <div className="max-w-full h-auto self-center w-full sm:mt-5 md:mt-20 lg:mt-32">
                        <Image className="w-full" src='/images/yippy/userflow.png' width="1366" height="1071" alt="image of a wireframe" />
                    </div>
                </div>
            </section>


            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="text-yippy">Mobile Wireframe</span>
                    </div>
                </div>
                <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 w-full">
                    <Image className="w-full" src='/images/yippy/wireframe.png' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>


            <section className="flex flex-col items-center  section-y-padding w-full text-black ">
                <div className="flex flex-col justify-center max-w-screen-xl w-full sm:p-5 md:p-10 lg:p-20">
                    <div className="self-start font-semibold text-yippy section-title">
                        <span className="font-semibold">Typography & </span>
                        <span className="font-semibold text-yippy">Colors</span>
                    </div>
                    <div className="max-w-full h-auto self-center sm:mt-5 md:mt-20 lg:mt-32 flex flex-col gap-20">
                        <span className="text-black font-semibold">Fonts Used</span>
                        <Image src='/images/yippy/font.png' width="1280" height="557" alt="image of a sitemap" />
                        <span className="text-black font-semibold">Color Used</span>
                        <Image src='/images/yippy/colors.png' width="1280" height="557" alt="image of a sitemap" />
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
                    <Image className="w-full" src='/images/yippy/prototype.png' width="1366" height="1071" alt="image of a wireframe" />
                </div>
            </section>

        </div>
    );
};

export default MyComponent;