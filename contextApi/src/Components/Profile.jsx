import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    if (!user) return <div></div>
  return (
    <div>
        Welcome, {user.username}
    </div>
  )
}

export default Profile