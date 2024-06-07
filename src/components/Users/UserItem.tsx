import React from 'react';
import { User } from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  const activeClasses: string[] = [];

  if (user.active) {
    activeClasses.push('text-success');
  } else {
    activeClasses.push('text-secondary');
  }

  return (
    <div className="border pb-2 mb-3 rounded">
      <div className="mb-2 p-2 border-bottom rounded-top bg-light ">
        <span className="d-inline-block me-3">Name: {user.name}</span>
        <span className={activeClasses.join()}>{user.active ? 'в сети' : 'не в сети'}</span>
      </div>
      <div className="p-2 fs-4">
        <span className="d-block mb-3">Email: {user.email}</span>
        <span>Role: {user.role}</span>
      </div>
    </div>
  );
};

export default UserItem;