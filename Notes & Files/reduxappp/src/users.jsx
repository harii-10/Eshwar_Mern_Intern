import React from 'react'
import { useSelector } from 'react-redux'


function Users(){
  const users = useSelector((state) => state.userinfo.users);
  console.log(users)
  return (
    <div className='users_content'>
        <h1 className='u'>Users</h1>
    </div>
  )
}

export default Users
