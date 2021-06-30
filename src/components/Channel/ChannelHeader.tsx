import './ChannelHeader.scss';

import React from "react";
import { User } from "../../types";
interface ChannelHeaderProps {
    receipents: User[]
}
export function ChannelHeader({ receipents }: ChannelHeaderProps) {
    return (
        <div className="channel-header">
            <p className="receipents-list">
                <span className="receipents-list--from">À : </span>
                {
                    receipents?.map((receipent, key) => (
                        <span key={key} className="receipents-list--item">
                            {receipent.firstname}
                        </span>
                    ))
                }
            </p>
        </div>
    )
}