import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {

        if(loading){
            return <Spinner/>
        } else {
            return (
                <div style={userStyle}>
                    {/* create a List, also needs unique key, output an UserItem instead of a div(replace div)*/}
                    {users.map(user => (
                        <UserItem key={user.id} user={user}/>
                    ))}
                </div>
            );
        }  
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
