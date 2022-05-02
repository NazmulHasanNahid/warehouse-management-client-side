import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/firebase/firebase.init';

const MyItem = () => {
     const [user, loading, error] = useAuthState(auth);
     
     return (
          <div>
              <h2>this is my item</h2> 
          </div>
     );
};

export default MyItem;