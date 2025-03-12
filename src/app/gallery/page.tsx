import Image from "next/image";
import * as React from "react";
import SimpleGallery from "./gallery";



const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">

            <section className="flex flex-row justify-center w-full section-y-padding gap-x-10">
                <div className="self-center text-right  text-black section-title w-1/2">
                    <span className="flex flex-col max-w-2xl ml-auto" >
                        <span className="text-[50px] text-md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Inner Child</span>
                        <p className="text-[20px] leading-[150%] mb-2 mt-10 ">
                            This poster promotes a group art show at the 401 Richmount Building in Toronto, featuring works by my TMU study group. The theme, &quot;Bring Back the Memory of Our Childhood in the 90s,&quot; celebrates the joy and nostalgia of that era. The design uses bright 90s colors, playful fonts, and fun visuals to remind us of our inner child. The message is simple: we all have a &quot;child&quot; inside us, and reconnecting with that spirit can help us face life&apos;s challenges. The show invites everyone to relive their childhood memories, find joy, and embrace resilience through art.
                        </p>
                    </span>
                </div>
                <div className="w-1/2">
                    <Image src='/images/poster.png' width="800" height="100" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10 bg-[#FFE5CC]">
                <div className="w-1/2 flex justify-end">
                    <Image src='/images/springevent.png' width="800" height="100" alt="image of brainstorm" />
                </div>
                <div className="self-center text-left text-black w-1/2">
                    <span className="flex flex-col max-w-2xl" >
                        <span className="text-[50px] text-md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Sprint Event</span>
                        <p className="text-[20px] leading-[150%] mb-2 mt-10 ">
                            This poster for a local Chinese community event is inspired by the colors of spring and Toronto&apos;s vibrant culture. Featuring elegant orchids, symbolizing beauty, and subtle nods to Toronto&apos;s landmarks, the design blends soft pastels and bold hues to create harmony and energy. Working closely with the organizer, we&apos;ll craft a visually appealing poster that celebrates community and culture, inviting everyone to join the festivities. Let&apos;s bring this vision to life together!
                        </p>
                    </span>
                </div>
            </section>
            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10">
                <div className="self-center text-right  text-black section-title w-1/2">
                    <span className="flex flex-col max-w-2xl ml-auto" >
                        <span className="text-[50px] text-md:text-[100px] leading-[100%] text-md:leading-[90%] tracking-[-1.5px] text-md:tracking-[-4px] font-medium">Nature</span>
                        <p className="text-[20px] leading-[150%] mb-2 mt-10 ">
                            This art and travel magazine is a personal project for a small Swedish travel group, featuring my own photography from our trips. Each picture captures the beauty of the places we&apos;ve explored, telling stories of landscapes, cultures, and shared moments. The design combines vibrant visuals and clean layouts to inspire wanderlust and connection. It&apos;s a celebration of our adventures and the memories we&apos;ve made together, inviting readers to relive the journeys and dream of new ones. A heartfelt tribute to travel and friendship.
                        </p>
                    </span>
                </div>
                <div className="w-1/2 ">
                    <Image src='/images/magazinecover.png' width="800" height="100" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex flex-row justify-center w-full bg-[#FFE5CC]">
                <div className="max-w-screen-xl w-full">
                    <SimpleGallery />
                </div>

            </section>

        </div>
    );
};

export default MyComponent;