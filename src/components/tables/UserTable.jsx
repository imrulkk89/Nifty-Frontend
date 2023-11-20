import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {userId, name, email} = user;
                        return (
                            <tr key={userId}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(userId)}>Delete</button>
                                    <button onClick={() => props.editUser(userId, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default UserTable;