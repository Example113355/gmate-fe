import React from "react";

interface UserGameItemProps {
    type: string;
}

const UserGameItem: React.FC<UserGameItemProps> = ({ type }) => {
    return (
        <div className="user_game_item">
            {type}
        </div>
    )
}

export default UserGameItem;
