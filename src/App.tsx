import './App.css';
import UserForm from "./components/UserForm/UserForm";
import {useState} from "react";
import {User} from "./types";
import Users from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState<User[]>([
        {id: '1', active: false, email: '423432@fewfwe', name: 'Ivan', role: 'Admin'},
        {id: '2', active: true, email: '423432@fewfwe', name: 'John', role: 'Redactor'},
        {id: '3', active: false, email: '423432@fewfwe', name: 'Jane', role: 'Admin'},
        {id: '4', active: true, email: '423432@fewfwe', name: 'Nikita', role: 'user'},
    ]);

    const addUser = (user: User) => {
        setUsers(prevState => {
            return [...prevState, user];
        });
    };


    return (
        <div className="App container-fluid">
            <main className="row">
                <div className="col-5">
                    <UserForm onSubmit={addUser} />
                </div>
                <div className="col-7">
                    <Users users={users} />
                </div>
            </main>
        </div>
    );
};

export default App;