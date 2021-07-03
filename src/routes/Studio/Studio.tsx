import './Studio.scss'
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { Channel, ChannelList } from '../../components/Channel';
import { WindowButtons } from '../../components/WindowButtons';
import { useAppSelector } from '../../hooks';

export function Studio() {
    const currentChannel = useAppSelector(s => s.channels.current)

    useEffect(() => {
        localStorage.setItem('welcomeRedirect', 'true');
    }, [])


    return (
        <>
            <h1>Studio</h1>
            <Link to="/welcome">See welcome screen</Link>
            <div className="container">
                <div className="window-aside">
                    <WindowButtons />
                    <div className="wrapper">
                        <ChannelList currentChannel={currentChannel} />
                    </div>
                </div>
                <div className="channel-wrapper">
                    {currentChannel && <Channel id={currentChannel} />}
                </div>
            </div>
        </>
    )
}