// import React from 'react';
// import { useState } from 'react'

// export const useLocalStorage=()=> {

//     const[value,setValue] =useState("");

//     const setItem = (key,value) =>{
//         localStorage.setItem(key,value);
//         setValue(value);
//         console.log(value);
//     };

//     const getItem = (key) =>{
//         const value = localStorage.getItem(key);
//         setValue(value);
//         return value;
//     };

//     const removeItem = (key) =>{
//         localStorage.removeItem(key);
//         setValue(null);
//     };

//     return { value, setItem, getItem, removeItem };

// }