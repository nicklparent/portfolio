import React from "react";
import portrait from '../../images/';

export function Card(){
    return (
        <div className="flex flex-row m-4 border dark:border-slate-400 ">
            <div className="flex flex-col justify-center align-middle *:p-1 *:rounded-md *:border">
                <div>
                    <img src={portrait} alt="portrait_image" className="rounded-lg " width={400}/>
                </div>
                <h4>DOB:October 31st 2005</h4>
                <h4>Moncton NB, Halifax NS</h4>
            </div>
        </div>
    )
}