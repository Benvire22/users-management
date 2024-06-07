import './App.css';
import UserForm from './components/UserForm/UserForm';
import {useState} from 'react';
import {User} from './types';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', active: false, email: 'Good@meal.com', name: 'Ivan', role: 'admin'},
    {id: '2', active: false, email: 'Dog@muil.com', name: 'Jane', role: 'user'},
    {id: '3', active: true, email: 'Cat@gail.com', name: 'Nikita', role: 'redactor'},
  ]);

  const addUser = (user: User) => {
    setUsers(prevState => {
      return [...prevState, user];
    });
  };

  return (
    <div className="App container-fluid">
      <main className="row border rounded-2 py-3 justify-content-around">
        <div className="col-5 border p-3 rounded-2  fs-5">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-6 border p-3 rounded-2">
          <Users users={users}/>
        </div>
      </main>
    </div>
  );
};

export default App;