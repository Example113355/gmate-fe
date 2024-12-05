import React, { createContext, useState } from "react";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    gender: string;
    dateOfBirth: Date;
    isGmater: boolean;
    avatar: string;
    email: string;
    password: string;
    isProfileCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface UserContextType {
    user: User;
    setUser: (user: User) => void;
}

const defaultUser: User = {
    _id: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: new Date(),
    isGmater: false,
    avatar: '',
    email: '',
    password: '',
    isProfileCompleted: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
}

const UserContextType = {
    user: defaultUser,
    setUser: (user: User) => {}
}

export const UserContext = createContext<UserContextType>({
    user: defaultUser,
    setUser: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(defaultUser);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const user = React.useContext(UserContext);
    if (!user) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return user;
}
