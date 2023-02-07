import React from 'react'
import './profile.css'

function Profile() {
  return (
    <div className='profile-container'>
        <div>
            <h1>My Profile</h1>
        </div>
        {/* <div className='profile-picture'></div> */}
        <div className='profile-detail'>
            <div className='detail-group'>
                <div className='details'>
                    <p className='detail-title'>FIrst Name</p>
                    <p>Tom Holland</p>
                </div>
                <div className='details'>
                    <p className='detail-title'>Last Name</p>
                    <p>Tom Holland</p>
                </div>
            </div>
            <div className='details'>
                <p className='detail-title'>Address</p>
                <p>Tom Holland</p>
            </div>
            <div className='details'>
                <p className='detail-title'>Contact No</p>
                <p>071 234 5678</p>
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