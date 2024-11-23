export interface TabProps {
    id: string;
    title: string;
    to: string;
}

export interface TabState {
    activeTabId: string;
    tabs: TabProps[];
}