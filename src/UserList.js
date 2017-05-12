import React from 'react';
import './UserList.css'

class UserList extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td>
                        id
                    </td>
                    <td>
                        Username
                    </td>
                    <td>
                        First Name
                    </td>
                    <td>
                        Last Name
                    </td>
                    <td>
                        E-mail
                    </td>
                    <td>
                        Last online
                    </td>
                </tr>
            </table>
        )
    }
}

export default UserList;