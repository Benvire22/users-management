import React, { useState } from 'react';
import {User, UserMutation} from '../../types';

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

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const checkUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData(prevState => {
      return {
        ...prevState,
        active: e.target.checked,
      };
    });
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
    <div className="col-5 border p-3 rounded-2 fs-5 align-self-start">
      <h2 className="text-secondary-emphasis text-center">Create User form</h2>
      <form onSubmit={getNewUser}>
        <div className="form-group">
          <label htmlFor="name" className="my-2">User name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="User name"
            onChange={changeUser}
            value={userFormData.name}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="my-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={changeUser}
            value={userFormData.email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role" className="my-2">Role</label>
          <select
            onChange={changeUser}
            value={userFormData.role}
            name="role"
            id="role"
            className="form-select"
          >
            <option value="User">User</option>
            <option value="Redactor">Redactor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="active" className="my-2 me-2">active</label>
          <input
            type="checkbox"
            onChange={checkUser}
            checked={userFormData.active}
            name="active"
            id="active"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create UserItem</button>
      </form>
    </div>
  );
};

export default UserForm;