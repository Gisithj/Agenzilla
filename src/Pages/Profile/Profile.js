import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '../../Auth/AuthContext';
import './profile.css'

function Profile() {

    const { user: loggedUser, status, error } = useAuthState();
    console.log("ptosdfsdf");
    console.log(loggedUser);
    let navigate = useNavigate();
    if (!loggedUser) {
        return navigate("/login");
        
    }

  return (
    <div className='profile-container'>
        <div>
            <h1>My Profile</h1>
        </div>
        {/* <div className='profile-picture'></div> */}
        <div className='profile-detail'>
            <div className='detail-group'>
                <div className='details'>
                    <p className='detail-title'>First Name</p>
                    <p>{loggedUser.fName}</p>
                </div>
                {/* <div className='details'>
                    <p className='detail-title'>Last Name</p>
                    <p>{loggedUser.lName}</p>
                </div> */}
            </div>
            <div className='details'>
                <p className='detail-title'>Address</p>
                <p>{loggedUser.address}</p>
            </div>
            <div className='details'>
                <p className='detail-title'>Contact No</p>
                <p>{loggedUser.phoneNo}</p>
            </div>
            <div className='details'>
                <p className='detail-title'>Email</p>
                <p>email@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Profile