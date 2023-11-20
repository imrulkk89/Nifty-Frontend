import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './components/tables/UserTable.jsx';
import AddUserForm from './components/forms/AddUserForm.jsx';
import EditUserForm from './components/forms/EditUserForm.jsx';
import { URL } from './constants';


function App() {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    
    const apiCall = async () => {
      const response = await axios.get(URL._GET_ALL);
      const output = response.data;
      if(output.httpStatusCode === 200){
        setUsers(output.data)
      }
    }

    apiCall();

  }, []);

  const addUser = async (user) => {
  
    if(!user.name || !user.email)
      return;

    const response = await axios.post(URL._ADD_USER, user);
    const output = response.data; 

    if(output.httpStatusCode === 200){
      setUsers([...users, user]);
    }
  };

  const deleteUser = async (userId) => {
    if(!userId)
      return;

    const response = await axios.delete(URL._DELETE_USER(userId));
    const output = response.data;

    if(output.httpStatusCode === 200){
      setUsers(users.filter((user) => user.userId !== userId));
    }    
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { userId: null, name: "", email: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (userId, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = async (newUser) => {
    
    if(!newUser)
      return;

    const userId = newUser.userId;
    const userData = {
      name: newUser.name,
      email: newUser.email
    }

    const response =  await axios.patch(URL._UPDATE_USER(userId), userData);
    const output = response.data;
    
    if(output.httpStatusCode === 200){
      setUsers(
         users.map((user) => (user.userId === currentUser.userId ? newUser : user))
      );
      setCurrentUser(initialUser);
      setEditing(false);
    }
  };

  
  return (
    <div className='container'>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
