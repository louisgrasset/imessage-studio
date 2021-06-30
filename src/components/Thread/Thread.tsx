import './Thread.scss'
import React from "react";
import { Message } from "../../types/";
import { Bubble } from "../Bubble/Bubble";

interface ThreadProps {
    senderId: number,
    messages: Message[]
}

export function Thread({ senderId, messages }: ThreadProps) {
    return (
        <div className={"thread" + (senderId === 0 ? " thread--right" : " thread-left")}>
            {
                messages.map((message, key) => (
                    <Bubble key={key} self={senderId === 0}>
                        {message.content}
                    </Bubble>
                ))
            }
        </div>
    )
}