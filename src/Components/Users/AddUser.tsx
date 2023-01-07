import React, { useState, useRef } from 'react';
import { IUser } from '../../Interfaces/IUser';
import { IError } from '../../Interfaces/IError';
import Wrapper from '../Helpers/Wrapper';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

type AddUserProps = {
  onAddUser: (newUser: IUser) => void;
}

const var1 = "";

const AddUser = (props: any) => {

    const nameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredAge] = useState('');
    const [error, setError] = useState<IError | null | undefined>();

    const usernameChangeHandler = (event: any) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event: any) => {
        setEnteredAge(event.target.value);
    };

  const addUserHandler = (event: any) => {
    event.preventDefault();
    if(nameInputRef.current){
      const enteredName = nameInputRef.current.value;
    }
    if(ageInputRef.current){
      const enteredAge = ageInputRef.current.value;
    }
     
    if(enteredUsername.trim().length === 0 ){
      setError({
        errorTitle: 'Invalid Username', 
        errorMessage: 'Username must be more than 4 characters',
      })
      return;
    }
    if (enteredUserAge.trim().length === 0 || +enteredUserAge < 10 || +enteredUserAge > 110){
      setError({
        errorTitle: 'Invalid Age', 
        errorMessage: 'Please enter an age between 10 and 110',
      })
      return;
    }

    const enteredUser: IUser = {
      username: enteredUsername,
      age: enteredUserAge,
      id: Math.random().toString()
    }

    const userID = Math.random().toString();

    props.onAddUser(enteredUser);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = ()=> {
    setError(null);
  }

  return (
  <Wrapper>
   {error && <ErrorModal 
                errorTitle={error.errorTitle} 
                errorMessage={error.errorMessage} 
                onConfirmError={errorHandler}/>}
    {/* {error && <ErrorModal error={error} onConfirmError={errorHandler}/>} */}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
          value={enteredUsername} 
          id="username" type="text" 
          onChange={usernameChangeHandler}
          ref={nameInputRef}/>
        <label htmlFor="age">Age</label>
        <input 
          value={enteredUserAge} 
          id="age" type="number" 
          onChange={ageChangeHandler}
          ref={ageInputRef}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
    
  );
};

export default AddUser;