import './ChannelThreads.scss';

import React, { useEffect, useRef } from 'react';
import { Thread } from '../Thread';
import { Message } from '../../types';

interface ChannelThreadsProps {
    threads: Message[]
}
export function ChannelThreads({ threads }: ChannelThreadsProps) {
    const threadsRef = useRef<null | HTMLDivElement>(null);
    const scrollToBottom = () => { threadsRef.current?.scroll({ top: threadsRef.current.scrollHeight, behavior: 'smooth' }); }
    useEffect(() => scrollToBottom(), [])

    return (
        <div className="channel-threads" ref={threadsRef}>
            {
                threads.map((message, threadKey) => (
                    <Thread key={threadKey} senderId={message.senderId} messages={[message]} />
                ))
            }
        </div>
    )
}