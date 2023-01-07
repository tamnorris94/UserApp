import React, {useState, Fragment} from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import {IUser} from './Interfaces/IUser';

const App: React.FC = () => {

  const [usersList, setUsersList] = useState<IUser[]>([]);

  const onAddUserHandler = (user: IUser) => {
    setUsersList(prevUsersList =>  [...prevUsersList, user]);
  };

  const appContent = {
    
  }

  return (

    <Fragment>
      <AddUser onAddUser={onAddUserHandler}/>
      {usersList.length !== 0 && <UsersList users={usersList}/>}
    </Fragment>
  );
}

export default App;
