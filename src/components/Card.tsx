import React from "react";
import portrait from '../images';
import { ImageSlider } from "./ImageSlider";

export function Card(){
    return (
        <div className="flex flex-row m-2 border dark:border-slate-800 dark:rounded-md p-3">
            <div className="flex flex-col justify-start *:p-2 *:rounded-md *:border-gray-600 *:border-2 *:m-1">
                <div>
                    <ImageSlider images={portrait} />
                </div>
                <h4>DOB:October 31st 2005</h4>
                <h4>Moncton NB, Halifax NS</h4>
                <div>
                    <h4 className="font-semibold">Skills</h4>
                    <ul className="list-inside list-disc">
                        <li>FullStack</li>
                        <li></li>
                    </ul>    
                </div>                
            </div>
        </div>
    )
}