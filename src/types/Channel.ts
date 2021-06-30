import { Message } from "./Message";

export type Channel = {
    id: string,
    messages: Message[],
    receipents: number[],
    pinned: boolean
}