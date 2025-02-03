import React, { useState } from "react";

export function ImageSlider({ images = [] }: { images: string[] }) {
    const [imageSlider, setImageSlider] = useState(0);

    const nextSlide = () => {
        setImageSlider((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setImageSlider((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="border-none">
            <div className="relative overflow-hidden max-w-xs align-middle">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${imageSlider * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            src={image}
                            key={index}
                            alt="profile images"
                            className="size-fit rounded-lg"
                            style={{ flex: "0 0 100%" }}
                        />
                    ))}
                </div>
                <button
                    className="absolute left-0 top-1/2 transform bg-gray-500/90 rounded-full p-[0.5em] ml-[1em] hover:bg-gray-700/90 hover:p-[0.75em] hover:duration-75"
                    onClick={prevSlide}
                >
                    <svg
                        className="w-[1.5em] h-[1.5em]"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
                    </svg>
                </button>
                <button
                    className="absolute right-0 top-1/2 transform bg-gray-500/90 rounded-full p-[0.5em] mr-[1em] hover:bg-gray-700/90 hover:p-[0.75em] hover:duration-75"
                    onClick={nextSlide}
                >
                    <svg
                        className="w-[1.5em] h-[1.5em]"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}