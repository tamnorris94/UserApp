import Card from "../UI/Card";

import styles from './UsersList.module.css';
import { IUser } from "../../Interfaces/IUser";

interface UserListProps {
    users: IUser[];
};

const UsersList = (props:any) => {
        return (
            <Card className={styles.users}>
                    <ul>
                    {props.users.map((user: IUser) => (
                         (<li key={user.id}>{user.username} ({user.age} years old)</li>)
                    ))}
                </ul> 
            </Card>
       
        )
}

export default UsersList;