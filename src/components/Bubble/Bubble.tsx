import './Bubble.scss'
import React, { useEffect, useMemo } from "react";

import emojilib from 'emojilib';
const emojis = Object.keys(emojilib);
interface BubbleProps {
    self: boolean,
    children: string;
}

export function Bubble({ self, children = "" }: BubbleProps) {
    const emojiMessageOnly = useMemo(() =>
        Array.from(children).filter(character => emojis.includes(character)).length === Array.from(children).length, [children]);

    return (
        <div className={"bubble" + (self ? " bubble--right" : " bubble--left") + (emojiMessageOnly ? " bubble--emojis" : "")} >
            {children}
        </div>
    )
}