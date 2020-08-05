import React, {useState, useEffect, useContext} from 'react'
import { FirebaseContext } from '../Firebase'


const Logout = (props) => {
    const firebase                  = useContext(FirebaseContext);
    const [checked, setChecked]     = useState(false);
    useEffect(()=> {
        if(checked) {
            firebase.signOutUser();
            console.log('logout');
        } else {
            console.log('login');
        }
    }, [checked]);

  const handleChange = (event) => {
        setChecked(event.target.checked);
  }

  return (
    <div className="logoutContainer">
        <label className="switch">
            <input type="checkbox" onChange = {handleChange} checked={checked}></input>
            <span className="slider round"></span>
        </label>
    </div>
  );
}

export default Logout;
