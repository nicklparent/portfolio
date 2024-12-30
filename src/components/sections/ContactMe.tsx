import React, { useEffect, useState } from "react";

export const ContactMe = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const messageHandler = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const response = await fetch(`/api/connect`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'subject': subject,
                'message': message,
            })
        }) 
        const result = await response;
        
        console.log("Result" + result);
        
    };

    return(
        <div className="bg-gradient-to-b to-darkEnd from-darkStart dark:from-lightEnd dark:to-lightStart">
            <h1 className="text-center text-5xl text-violet-600 p-3">Contact Me!</h1>
                {/* Social medias list */}
                <div className="list-none">
                    <li><a href="https://github.com/nicklparent" target="_blank">Git</a></li>
                    <li><a href="https://www.linkedin.com/in/nicklparent/" target="_blank">Linkden</a></li>
                    <li><a href="" target="_blank">Instagram</a></li>
                    <li><a href="" target="_blank"></a>Email</li>
            </div>
        </div>
    )
}