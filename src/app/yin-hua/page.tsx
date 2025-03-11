import Image from "next/image";
import * as React from "react";

const MyComponent: React.FC = () => {
    return (
        <div className="flex flex-col bg-gray-100 justify-center">
            <div className="max-w-screen-xl mx-auto bg-white">
                <section className="flex flex-col items-center w-full px-4 bg-white ">
                    <Image className="w-full" src='/images/yinhua/navbar.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full">
                    <Image className="w-full" src='/images/yinhua/Header.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full section-y-padding px-4">
                    <Image className="w-full" src='/images/yinhua/about.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full ">
                    <Image className="w-full" src='/images/yinhua/whatwedo.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full section-y-padding px-4">
                    <Image className="w-full" src='/images/yinhua/event.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full section-y-padding">
                    <Image className="w-full" src='/images/yinhua/stats.png' width="1042" height="603" alt="Design thinking process image" />
                </section>

                <section className="flex flex-col items-center w-full ">
                    <Image className="w-full" src='/images/yinhua/footer.png' width="1042" height="603" alt="Design thinking process image" />
                </section>
            </div>
        </div>
    );
};

export default MyComponent;