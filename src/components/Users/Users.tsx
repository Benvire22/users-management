import UserItem from './UserItem';
import {User} from '../../types';
import React from 'react';

interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      <h2 className="mb-4 text-secondary-emphasis">Users list</h2>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;