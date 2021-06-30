import './Bubble.scss'
import React from "react";

interface BubbleProps {
    self: boolean,
    children: string;
}
export function Bubble({ self, children = "" }: BubbleProps) {
    return (
        <div className={"bubble" + (self ? " bubble--right" : " bubble--left")} >
            {children}
        </div>
    )
}