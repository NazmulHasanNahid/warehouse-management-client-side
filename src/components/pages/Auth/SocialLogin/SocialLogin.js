import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading'

const SocialLogin = () => {

     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const navigate = useNavigate()

     
     const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      if (user) {
        navigate(from, { replace: true });
      }
      if(loading){
            <Loading/>
      }
     return (
          <div className='ms-3'>
               <input
                  onClick={()=>signInWithGoogle()}
                  className="login-btn"
                  type="submit"
                  name=""
                  value="Google Sign In"
                  
                />
          </div>
     );
};

export default SocialLogin;