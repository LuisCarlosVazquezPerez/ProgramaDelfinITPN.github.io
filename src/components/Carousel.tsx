import React, { useLayoutEffect } from 'react';
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function Carousel(): JSX.Element {
    
    return (
        <>
            <TECarousel showControls ride="carousel" className="sombra">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="bg-[url('/image/carousel/1.jpeg')] h-[500px] bg-cover bg-center"></div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="bg-[url('/image/carousel/2.jpg')] h-[500px] bg-cover bg-center"></div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="bg-[url('/image/carousel/3.jpg')] h-[500px] bg-cover bg-center"></div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={4}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="bg-[url('/image/carousel/4.jpg')] h-[500px] bg-cover bg-center"></div>
                    </TECarouselItem>
                </div>
            </TECarousel>
        </>
    );
}