import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/firebase/firebase.init';

const MyItem = () => {
     const [user, loading, error] = useAuthState(auth);
     const [items , setItems] = useState([])
     useEffect(()=>{
          const getItems = async () =>{
               const email = user.email;
               const url = `http://localhost:5000/userAddedItem?email=${email}`
               const {data} = await axios.get(url)
               setItems(data)
          }
          getItems()
          
     },[user])
     
     return (
          <div>
              <h2>this is my item {items.length}</h2> 
              <div className=''>
                   {
                        items.map(item => <li>{item.name}</li>)
                   }
              </div>
          </div>
     );
};

export default MyItem;