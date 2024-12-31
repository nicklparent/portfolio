import React, { useEffect } from "react";

export const Resume = () => {
    useEffect(() => {
        console.log("Resume");
    }, [])

    return(
        <div className="h-screen">
            <iframe src="./Nick_Parent_Resume.pdf"
            className="size-full px-36"
            title="Resume"
            />
        </div>
    )
}