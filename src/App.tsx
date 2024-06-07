import { useState } from 'react';
import { User } from './types';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import './App.css';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', active: false, email: 'Good@meal.com', name: 'Ivan', role: 'Admin'},
    {id: '2', active: false, email: 'Dog@muil.com', name: 'Jane', role: 'User'},
    {id: '3', active: true, email: 'Cat@gail.com', name: 'Nikita', role: 'Redactor'},
  ]);

  const addUser = (user: User) => {
    setUsers(prevState => {
      return [...prevState, user];
    });
  };

  return (
    <div className="App container-fluid">
      <main className="row border rounded-2 py-3 justify-content-around">
        <UserForm onSubmit={addUser} />
        <Users users={users}/>
      </main>
    </div>
  );
};

export default App;