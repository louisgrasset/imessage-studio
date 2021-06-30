import './ChannelInput.scss'
import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addMessage } from '../../actions/channels';

export function ChannelInput() {
    const [input, setInput] = useState('');
    const channelId = useAppSelector(s => s.channels.current)
    const dispatch = useAppDispatch();

    const handleChange = useCallback((e) => {
        setInput(e.target.value)
    }, [])

    const handleSubmission = useCallback((e) => {
        e.preventDefault();
        dispatch(addMessage(channelId, 0, input));
        setInput('');
    }, [input])

    return (
        <form className="channel-input" onSubmit={(e) => handleSubmission(e)}>
            <input placeholder="iMessage" type="text" required value={input} onChange={e => handleChange(e)} />
            <button type='submit' className="button" title="Envoyer"></button>
        </form>
    )
}