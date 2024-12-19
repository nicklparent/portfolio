import React from "react";

export function ImageSlider({images = []}: {images: string[]}){
    return(
        <div className="">
            {images.map((image, index) => (
                <img
                    src={image}
                    
                    width={500}
                />
            ))}
        </div>        
    )
}