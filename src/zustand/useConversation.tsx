import { create } from "zustand";

interface Conversation {
    _id: string;
    avatar: string;
    firstName: string;
    lastName: string;
}

interface ConversationState {
    selectedConversation: Conversation | null;
    setSelectedConversation: (selectedConversation: Conversation | null) => void;
    messages: any[];
    setMessages: (messages: any[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;