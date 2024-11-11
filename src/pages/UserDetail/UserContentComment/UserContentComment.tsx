import React from "react";

type UserContentCommentProps = {
    avatarLink: string;
    name: string;
    date: string;
    content: string;
}

const UserContentComment: React.FC<UserContentCommentProps> = ({ avatarLink, name, date, content }) => {
    return (
        <div className="user_content_rating">
            <img src={avatarLink} alt="" />
            <div className="content_rating--comment">
                <h4>{name}</h4>
                <span>{date}</span>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default UserContentComment;
