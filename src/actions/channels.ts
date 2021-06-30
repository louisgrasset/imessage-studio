export const addChannel = (receipentsIndex: number[]) => (
    {
        type: 'ADD_CHANNEL',
        payload: receipentsIndex,
    }
);

export const selectChannel = (channelId: string) => (
    {
        type: 'SELECT_CHANNEL',
        payload: channelId,
    }
);

export const addMessage = (channelId: number, senderId: number, content: string) => (
    {
        type: 'ADD_MESSAGE',
        payload: {
            channelId, senderId, content,
        }
    }
);