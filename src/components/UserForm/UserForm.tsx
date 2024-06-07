import React, {useState} from 'react';
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

  const checkUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormData(prevState => {
      return {
        ...prevState,
        active: e.target.checked,
      };
    });
  };

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <form onSubmit={getNewUser}>
      <h2 className="text-secondary-emphasis">Create User form</h2>
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
        <label htmlFor="email" className="my-2">email</label>
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
          className="form-control"
        >
          <option value="user">User</option>
          <option value="redactor">Redactor</option>
          <option value="admin">Admin</option>
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
          className="fs-1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Create UserItem</button>
    </form>
  );
};

export default UserForm;