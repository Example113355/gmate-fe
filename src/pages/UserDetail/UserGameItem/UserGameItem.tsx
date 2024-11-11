import React from "react";

const GAMETYPE = {
    "lol": {
        name: "Liên Minh Huyền Thoại",
        image: "",
    },
    "pubg": {
        name: "PUBG",
        image: "",
    },
    "freefire": {
        name: "Free Fire",
        image: "",
    },
    "other": {
        name: "Khác",
        image: "",
    }
}

type GameType = 'lol' | 'pubg' | 'freefire' | 'other';

type UserGameItemProps = {
    type: GameType;
}

const UserGameItem: React.FC<UserGameItemProps> = ({ type }) => {
    return (
        <div className="user_game_item">
            {GAMETYPE[type].name}
        </div>
    )
}

export default UserGameItem;
