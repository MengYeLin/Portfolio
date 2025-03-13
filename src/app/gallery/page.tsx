import Image from "next/image";
import * as React from "react";
import SimpleGallery from "./gallery";



const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">
            <section className="flex sm:flex-col-reverse md:flex-row justify-center w-full section-y-padding gap-x-10 sm:gap-y-5 md:gap-y-0">
                <div className="self-center sm:text-left md:text-right text-black section-title sm:w-full md:w-1/2 sm:p-4 md:p-0">
                    <span className="flex flex-col max-w-2xl sm:ml-4 md:ml-auto" >
                        <span className="sm:text-[25px] md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Inner Child</span>
                        <p className="sm:text-base md:text-[20px] md:leading-[150%] mb-2 sm:mt-4 md:mt-10 ">
                            This poster promotes a group art show at the 401 Richmount Building in Toronto, featuring works by my TMU study group. The theme, &quot;Bring Back the Memory of Our Childhood in the 90s,&quot; celebrates the joy and nostalgia of that era. The design uses bright 90s colors, playful fonts, and fun visuals to remind us of our inner child. The message is simple: we all have a &quot;child&quot; inside us, and reconnecting with that spirit can help us face life&apos;s challenges. The show invites everyone to relive their childhood memories, find joy, and embrace resilience through art.
                        </p>
                    </span>
                </div>
                <div className="sm:w-full md:w-1/2">
                    <Image src='/images/poster.png' width="800" height="100" alt="poster of inner child" />
                </div>
            </section>

            <section className="flex sm:flex-col md:flex-row  justify-center w-full section-y-padding   gap-x-10 sm:gap-y-5 md:gap-y-0 bg-[#FFE5CC]">
                <div className="sm:w-full md:w-1/2 flex justify-end">
                    <Image src='/images/springevent.png' width="800" height="100" alt="poster of spring event" />
                </div>
                <div className="self-center text-left text-black section-title sm:w-full md:w-1/2 sm:p-4 md:p-0">
                    <span className="flex flex-col max-w-2xl sm:ml-4 md:ml-0" >
                        <span className="sm:text-[25px] md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Sprint Event</span>
                        <p className="sm:text-base md:text-[20px] md:leading-[150%] mb-2 sm:mt-4 md:mt-10">
                            This poster for a local Chinese community event is inspired by the colors of spring and Toronto&apos;s vibrant culture. Featuring elegant orchids, symbolizing beauty, and subtle nods to Toronto&apos;s landmarks, the design blends soft pastels and bold hues to create harmony and energy. Working closely with the organizer, we&apos;ll craft a visually appealing poster that celebrates community and culture, inviting everyone to join the festivities. Let&apos;s bring this vision to life together!
                        </p>
                    </span>
                </div>
            </section>
            <section className="flex sm:flex-col-reverse md:flex-row justify-center w-full section-y-padding gap-x-10 sm:gap-y-5 md:gap-y-0">
                <div className="self-center sm:text-left md:text-right text-black section-title sm:w-full md:w-1/2 sm:p-4 md:p-0">
                    <span className="flex flex-col max-w-2xl sm:ml-4 md:ml-auto" >
                        <span className="sm:text-[25px] md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Nature</span>
                        <p className="sm:text-base md:text-[20px] md:leading-[150%] mb-2 sm:mt-4 md:mt-10 ">
                        Venturing into the woods for a scavenger hunt brings a thrilling sense of discovery and excitement. The rustling leaves and dappled sunlight set the stage for an adventure where each step uncovers hidden treasures. Participants eagerly scour the forest floor, searching for clues and ticking off items on their list. From spotting unique wildlife, such as a vibrant red cardinal or a camouflaged frog, to finding natural wonders like a perfectly shaped pinecone or a rare wildflower, every moment is an opportunity for wonder. This immersive experience fosters a deeper connection with nature, encourages teamwork, and ignites a sense of childlike wonder, making it a memorable and exhilarating outdoor activity.
                        </p>
                    </span>
                </div>
                <div className="sm:w-full md:w-1/2">
                    <Image src='/images/magazinecover.png' width="800" height="100" alt="poster of nature" />
                </div>
            </section>

            <section className="flex flex-col items-center justify-center w-full bg-[#FFE5CC] gap-5">
                <div className="mb-2 sm:mt-4 md:mt-10 w-full max-w-[1050px]">
                    <p className="text-center sm:text-[25px] md:text-[100px] text-black">TORONTO</p>
                    <p className="sm:text-base md:text-[20px] text-center md:leading-[150%] text-gray-700">
                        This art and travel magazine is a personal project for a small Swedish travel group, featuring my own photography from our trips. Each picture captures the beauty of the places we&apos;ve explored, telling stories of landscapes, cultures, and shared moments. The design combines vibrant visuals and clean layouts to inspire wanderlust and connection. It&apos;s a celebration of our adventures and the memories we&apos;ve made together, inviting readers to relive the journeys and dream of new ones. A heartfelt tribute to travel and friendship.

                    </p>
                </div>
                <div className="max-w-screen-xl w-full">
                    <SimpleGallery />
                </div>

            </section>

        </div>
    );
};

export default MyComponent;