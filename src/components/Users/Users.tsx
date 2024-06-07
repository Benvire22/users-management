import React from 'react';
import UserItem from './UserItem';
import { User } from '../../types';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div className="col-6 border px-3 rounded-2">
      <h2 className="my-3 text-secondary-emphasis text-center">Users list</h2>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;