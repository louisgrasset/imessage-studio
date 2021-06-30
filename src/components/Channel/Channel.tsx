import './Channel.scss';
import React from 'react';
import { ChannelHeader, ChannelInput, ChannelThreads } from './';
import { useAppSelector } from '../../hooks';

interface ChannelProps {
    id: string
}

export function Channel({ id }: ChannelProps) {
    const channel = useAppSelector(s => s.channels.channels.find(channel => channel.id === id))
    const receipents = useAppSelector(s => s.users).filter(user => channel?.receipents.includes(user.id))

    return (
        <div className="channel">
            <ChannelHeader receipents={receipents} />
            <ChannelThreads threads={channel?.messages} />
            <ChannelInput />
        </div>
    )
}