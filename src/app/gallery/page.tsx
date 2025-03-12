import Image from "next/image";
import * as React from "react";
import SimpleGallery from "./gallery";



const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">

            <section className="flex flex-row justify-center w-full section-y-padding gap-x-10">
                <div className="self-center text-right font-semibold text-black section-title w-1/2">
                    Inner Child
                </div>
                <div className="w-1/2">
                    <Image src='/images/poster.png' width="800" height="100" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10 bg-[#FFE5CC]">
                <div className="w-1/2 flex justify-end">
                    <Image src='/images/springevent.png' width="800" height="100" alt="image of brainstorm" />
                </div>
                <div className="self-center text-left font-semibold text-black section-title w-1/2">
                    Sprint Event
                </div>
            </section>
            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10">
                <div className="self-center text-right font-semibold text-black section-title w-1/2">
                    Nature
                </div>
                <div className="w-1/2 ">
                    <Image src='/images/magazinecover.png' width="800" height="100" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex flex-row justify-center w-full bg-[#FFE5CC]">
                <div className="max-w-screen-2xl">
                  <SimpleGallery/>
                </div>

            </section>

        </div>
    );
};

export default MyComponent;