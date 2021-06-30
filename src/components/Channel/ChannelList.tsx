import './ChannelList.scss';

import React, { Fragment, MouseEventHandler, useMemo } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectChannel } from '../../actions/channels';

interface ChannelListProps {
    currentChannel: string
}
export function ChannelList({ currentChannel }: ChannelListProps) {
    const dispatch = useAppDispatch();
    const users = useAppSelector(s => s.users);
    const channelFromStore = useAppSelector(s => s.channels.channels);
    const channels = useMemo(() =>
        [...channelFromStore].sort((a, b) => ((a.pinned === b.pinned) ? 0 : a.pinned ? -1 : 1)),
        [channelFromStore]);
    return (
        <div className="channel-list">
            {
                channels.map((channel, channelKey) => (
                    <div onClick={() => dispatch(selectChannel(channel.id))} key={channelKey}
                        className={"channel-list-item"
                            + (channel.pinned ? " channel-list-item--pinned" : " channel-list-item--default")
                            + (currentChannel === channel.id ? " channel-list-item--active" : "")}>
                        {
                            <>
                                {
                                    <div className="channel-list-item-image" data-count={channel.receipents.length}>
                                        {
                                            channel.receipents.map((receipent, receipentKey) => (
                                                <img key={receipentKey} src={"/images/receipents/" + users.find(user => user.id === receipent)?.image} />
                                            ))
                                        }
                                    </div>

                                }
                                <div className="channel-list-item-wrapper">
                                    <div className="channel-list-item-receipents">
                                        {
                                            channel.receipents.map((receipent, receipentKey) => (
                                                <Fragment key={receipentKey}>
                                                    {users.find(user => user.id === receipent)?.firstname}
                                                    <span>{' ' + users.find(user => user.id === receipent)?.lastname + ','}</span>
                                                </Fragment>
                                            ))
                                        }
                                    </div>
                                    <div className="channel-list-item-excerpt">
                                        {channel.messages[channel.messages.length - 1]?.content.substr(0, 35)}
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                ))
            }
        </div>
    )
}
