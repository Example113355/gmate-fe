import React from "react";

type UserContentHeaderProps = {
  title: string;
  content: string;
  unit: string;
};

const UserContentHeader: React.FC<UserContentHeaderProps> = ({title, content, unit}) => {
    return (
        <div className="user_content_item">
            <h3 className="title">{title}</h3>
            <div className="content">
                <p className="value">{content}</p>
                <span className="unit">{unit}</span>
            </div>
        </div>
    )
}

export default UserContentHeader;
