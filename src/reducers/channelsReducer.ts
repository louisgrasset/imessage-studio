import { v4 as uuidv4 } from 'uuid';
import { Message } from '../types';
import { Channel } from '../types/Channel';

const initialState = {
    current: "c82d096a-cdaa-4eb8-ab80-d97d8a2fb13a",
    channels: [
        {
            id: "c82d096a-cdaa-4eb8-ab80-d97d8a2fb13a",
            messages: [
                {
                    senderId: 1,
                    date: new Date("2021-06-28T18:44:18.435Z").toString(),
                    content: "Toy mouse squeak roll over disappear for four days and return home with an expensive injury; bite the vet or be superior."
                },
                {
                    senderId: 0,
                    date: new Date("2021-06-28T18:42:00.435Z").toString(),
                    content: "Rush in before the human lick arm hair so purr as loud as possible, be the most annoying cat that you can,"
                }
            ],
            receipents: [1],
            pinned: false
        },
        {
            id: "edd91cc9-d154-41a2-bfb4-377b9fa0d3a9",
            messages: [],
            receipents: [0],
            pinned: false
        },
        {
            id: "f2c97218-e7e9-4962-ad26-a3b52c93f94f",
            messages: [],
            receipents: [2, 3],
            pinned: false
        },
        {
            id: "3fe39df5-b35a-47ee-9531-dc048ccd76a4",
            receipents: [5, 8, 1],
            messages: [],
            pinned: false
        },
        {
            id: "e962a40e-16ec-4798-bf7b-c58cfad3b878",
            messages: [],
            receipents: [11, 5, 4, 8],
            pinned: true
        },
        {
            id: "eea4f824-d795-472a-88f8-d6e71302062a",
            messages: [],
            receipents: [1],
            pinned: false
        },
        {
            id: "bf6c53a1-c1de-47a9-a3ba-a5fe42fc38bd",
            messages: [],
            receipents: [2],
            pinned: true
        },
        {
            id: "7f3a99e6-cdc5-4879-a297-daff20c6d8b2",
            messages: [],
            receipents: [3],
            pinned: true
        },
        {
            id: "830c9933-e555-4402-a4d1-4dea0a166a14",
            messages: [],
            receipents: [4],
            pinned: false
        },
        {
            id: "fdb21aa0-857f-4421-983c-3674c8399eb4",
            messages: [],
            receipents: [5],
            pinned: false
        },
        {
            id: "5554ba15-daa4-43cb-a6dc-b097a0442941",
            messages: [],
            receipents: [6],
            pinned: false
        },
        {
            id: "179097d5-ceb9-4375-b7f6-a849a2863904",
            messages: [],
            receipents: [7],
            pinned: false
        },
        {
            id: "1d532004-73dd-47d9-a5c9-bd8306141e4e",
            messages: [],
            receipents: [8],
            pinned: false
        },
        {
            id: "e5ca87b7-46e4-45e7-adf0-fe6aff74435e",
            messages: [],
            receipents: [9],
            pinned: false
        },
        {
            id: "93f8f678-ea5d-4ed4-b64e-c8ba2a49ee55",
            messages: [],
            receipents: [10],
            pinned: false
        },
        {
            id: "15",
            messages: [],
            receipents: [11],
            pinned: false
        },
    ]
};

export const channelsReducer = (state = initialState, action: any) => {
    const s = state;
    switch (action.type) {
        case 'ADD_CHANNEL':
            const addedChannel: Channel = {
                id: uuidv4(),
                messages: [],
                receipents: [action.payload],
                pinned: false
            }
            s.channels.push(addedChannel);
            return s;

        case 'SELECT_CHANNEL':
            const selectedChannel = action.payload
            return {
                ...state,
                current: selectedChannel
            };

        case 'ADD_MESSAGE':
            const addedMessage: Message = {
                date: new Date().toString(),
                senderId: action.payload.senderId,
                content: action.payload.content,
            }
            const channels = s.channels.map((channel) => {
                if (channel.id === action.payload.channelId) {
                    const alteredChannel = {
                        ...channel,
                        messages: [...channel.messages, addedMessage]
                    }
                    return alteredChannel;
                }
                return channel
            })

            return {
                ...state,
                channels
            }

        default:
            return state
    }
};