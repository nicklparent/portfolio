import React from "react";
import portrait from '../assets/images';
import { ImageSlider } from "../assets/ImageSlider";

export function Card(){
    return (
        
        <div className="flex flex-row bg-gradient-to-b from-darkStart to-darkEnd dark:from-lightStart dark:to-lightEnd m-4 border bg-zinc-800 dark:border-slate-800 rounded-lg p-3">
            <div className="flex flex-col justify-start *:p-1 *:border-gray-600 *:border-t-2 *:m-1">
                <ImageSlider images={portrait} />
                
                <h4>19 Years old</h4>
                <h4>Moncton NB, Halifax NS</h4>
                <div>
                    <h4 className="font-semibold">Goals</h4>
                    <ul className="list-inside list-disc">
                        <li>Graduate</li>
                        <li>FullStack | Backend</li>
                        <li>Make a difference</li>
                    </ul>
                </div>                
            </div>
        </div>
    )
}