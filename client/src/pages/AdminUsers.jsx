import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () => {
    const[users, setUsers] = useState([]);
    const {authorizationToken} = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/admin/users`, {
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                }
            })
            const data = await response.json();
            setUsers(data)
            // console.log(`users ${data}`)
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = fetch(`http://localhost:4000/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers:{
                    Authorization: authorizationToken,
                }
            });
            console.log((await response).statusText);
            if ((await response).statusText){
                getAllUsersData();
            }
            
        } catch (error) {
            console.log("Error from delete user function :",error)
        }
    }

    useEffect(() => {
        getAllUsersData();
    },[])
    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr style={{color:"black", fontSize:"24px"}}>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <hr/>
                        <tbody>
                            {users.map((curUser, index) => {
                                const {_id, username, email, phone } = curUser
                                return (
                                    <tr key={index}>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>Edit</td>
                                        <td><button onClick={() => deleteUser(_id)}>Delete </button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
            
        </>
    )
}