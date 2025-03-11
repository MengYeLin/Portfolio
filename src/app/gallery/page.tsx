import Image from "next/image";
import * as React from "react";
import SimpleGallery from "./gallery";

const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col  bg-[#FFEED9] justify-center">

            <section className="flex flex-row justify-center w-full section-y-padding gap-x-10">
                <div className="self-center font-semibold text-black section-title w-1/2">
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
                <div className="self-center font-semibold text-black section-title w-1/2">
                    Sprint Event
                </div>
            </section>
            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10">
                <div className="self-center font-semibold text-black section-title w-1/2">
                    Nature
                </div>
                <div className="w-1/2 ">
                    <Image src='/images/magazinecover.png' width="800" height="100" alt="image of brainstorm" />
                </div>
            </section>

            <section className="flex flex-row justify-center w-full section-y-padding  gap-x-10 bg-[#FFE5CC]">
                <div className="w-full">
                    <SimpleGallery
                        galleryID="my-test-gallery"
                        images={[
                            {
                                largeURL:
                                '/images/torontomagazine -1.png',
                                thumbnailURL:
                                    '/images/torontomagazine -1.png',
                                width: 1875,
                                height: 2500,
                            },
                            {
                                largeURL: '/images/torontomagazine -2.png',
                                thumbnailURL: '/images/torontomagazine -2.png',
                                width: 1875,
                                height: 2500,
                            },
                            {
                                largeURL: '/images/torontomagazine -3.png',
                                thumbnailURL:'/images/torontomagazine -3.png',
                                width: 1875,
                                height: 2500,
                            },
                        ]}
                    />
                </div>

            </section>

        </div>
    );
};

export default MyComponent;