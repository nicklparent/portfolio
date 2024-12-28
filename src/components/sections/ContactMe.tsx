import React, { useEffect } from "react";

export const ContactMe = () => {
    const messageHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("working");

        // Securly save messages to db 
    };

    useEffect(() => {
        const button = document.querySelector("#message-submit"); 
        button?.addEventListener('click', messageHandler);
        return () => button?.removeEventListener('click', messageHandler);
    }, [])

    return(
        <div className="bg-gradient-to-b to-darkEnd from-darkStart dark:from-lightEnd dark:to-lightStart">
            <h1 className="text-center text-5xl text-violet-600 p-3">Contact Me!</h1>
            <div className="flex justify-center gap-6 p-2">
                
                {/* Email contact Form */}
                <form className="w-1/3">
                    
                    <label htmlFor="email-in">Email Address</label>
                    <input type="email" id="email-in" className="rounded p-2 border appearance-none w-full leading-tight mb-4" placeholder="Email Address"/>
                    <label htmlFor="subject-in">Subject</label>
                    <input type="text" id="subject-in" className="rounded p-2 border appearance-none w-full leading-tight mb-4" placeholder="Subject"/>
                    <label htmlFor="message-in">Message</label>
                    <textarea id="message-in" className="rounded p-2 border appearance-none leading-tight w-full min-h-32 max-h-60 text-black" placeholder="Message"/>
                    <div className="flex justify-end">
                        <button id="message-submit" className="rounded-md px-4 py-3  my-3 bg-blue-800 dark:bg-blue-500 w-1/5">Send </button>
                    </div>
                </form>
                {/* Social medias list */}
                <div className="list-none">
                    <li><a href="https://github.com/nicklparent" target="_blank">Git</a></li>
                    <li><a href="https://www.linkedin.com/in/nicklparent/" target="_blank">Linkden</a></li>
                    <li><a href="" target="_blank">Instagram</a></li>
                    <li><a href="" target="_blank"></a>Email</li>
                </div>
            </div>
        </div>
    )
}