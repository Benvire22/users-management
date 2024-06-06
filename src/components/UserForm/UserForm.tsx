import React, {useState} from "react";
import {User, UserMutation} from "../../types";

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [userFormData, setUserFormData] = useState<UserMutation>({
        name: '',
        email: '',
        active: false,
        role: 'user',
    });

    const checkUser = () => {
        setUserFormData(prevState => {
            return {
                ...prevState,
                active: !prevState.active,
            };
        });
    };

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const getNewUser = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            id: Math.random().toString(),
            ...userFormData,
        });

        setUserFormData({
            name: '',
            email: '',
            active: false,
            role: 'user',
        });
    };



    return (
        <form onSubmit={getNewUser} >
            <div className="form-group">
                <label htmlFor="name">UserItem name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="UserItem name"
                    onChange={changeUser}
                    value={userFormData.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="UserItem email"
                    onChange={changeUser}
                    value={userFormData.email}
                />

            </div>
            <div className="form-group">
                <label htmlFor="active">active</label>
                <input
                    type="checkbox"
                    onChange={checkUser}
                    checked={userFormData.active}
                    name="active"
                    id="active"
                    placeholder="active"
                />
            </div>
            <button type="submit" className="btn btn-primary">Create UserItem</button>
        </form>
    );
};

export default UserForm;