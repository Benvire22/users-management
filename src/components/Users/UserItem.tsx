import {User} from "../../types";
import React from "react";

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
    return (
        <div>
            <div>
                <span>Name: {user.name}</span>
                <span>Email: {user.email}</span>
            </div>
            <span>Role: {user.role}</span>
            <div>
                <span>Active: {user.active ? 'В сети' : 'не в сети'}</span>
            </div>
        </div>
    );
};

export default UserItem;