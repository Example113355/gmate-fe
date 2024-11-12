import React from 'react';

type UserDescriptionProps = {
    description: string;
    date: string;
}

const UserDescription: React.FC<UserDescriptionProps> = ({ date, description }) => {
    return (
        <div className="user_description">
            <p>{description}</p>
            <span>{date}</span>
        </div>
    );
}

export default UserDescription;
