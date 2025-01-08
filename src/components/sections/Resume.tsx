import React, { useEffect } from "react";
import "../../assets/css/resume.css";
export const Resume = () => {

    function viewResume(){
        const resumeRef = document.querySelector("#resume");
        var hidden = resumeRef?.classList.contains('hidden');       
        if (hidden){
            resumeRef?.classList.add('resume-container');
            resumeRef?.classList.remove('hidden');
        } else {
            resumeRef?.classList.add('hidden');
            resumeRef?.classList.remove('resume-container');
        }
    }
    return(
        <div className="bg-darkStart dark:bg-lightEnd">
            <div>
                <button onClick={viewResume} className="text-xl">View My Resume!</button>
            </div>
            <div id="resume" className="hidden">
                <iframe src="../../assets/Nick_Parent_Resume.pdf"
                className="size-full px-36"
                title="Resume"
                />
            </div>
        </div>
    )
}