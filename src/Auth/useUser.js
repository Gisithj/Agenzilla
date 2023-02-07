// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import { useLocalStorage } from './useLocalStorage';

// export const useUser = () => {
//   const { user, setUser } = useContext(AuthContext);
//   const { setItem } = useLocalStorage();

//   const addUser = (id,name,email) => {
//     setUser(user);
//     setItem('user', JSON.stringify(user));
//   };

//   const removeUser = () => {
//     setUser(null);
//     setItem('user', '');
//   };

//   return { user, addUser, removeUser };
// };