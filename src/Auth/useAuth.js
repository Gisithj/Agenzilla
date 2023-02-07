// import React, { useEffect } from 'react'
// import { useUser } from './useUser';
// import { useLocalStorage } from './useLocalStorage';


// export const useAuth = () => {

//     const {user,addUser,removeUser} = useUser();
//     const {getItem} = useLocalStorage();

//     useEffect(()=>{
//         const user = getItem('user');
//         if(user){
//             addUser(JSON.stringify(user));
//         }
//     },[]);

//     const login = (user) =>{
//         addUser(user);
//     }

//     const logOut = (user) =>{
//         removeUser(user);
//     }

//   return{user,login,logOut}
// }