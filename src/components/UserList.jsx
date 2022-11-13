import React from 'react';

const UserList = ({ usersList, userSelect, deleteUser, modalOne, setModalOne }) => {
  return (
    <div className='user-list'>
      {usersList.map((user) => (
        <div key={user.id} className='user-container'>
          <div className="items-left">
            <h3><b>{user.first_name}</b>{" "} <b> {user.last_name}</b></h3>
            <p><i className="fa-solid fa-envelope"></i> {user.email}</p>
            <p><i className="fa-solid fa-cake-candles"></i> {user.birthday}</p>
          </div>
          <div className='btn'>
            <button onClick={() => { userSelect(user) }}><i className="fa-solid fa-check" style={{ padding: '5px' }}></i></button>
            <button onClick={() => { deleteUser(user.id), setModalOne(!modalOne) }}><i className="fa-solid fa-trash-can" style={{ color: "darkred", padding: '5px' }}></i></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;