import React, {useRef, useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom';

const Landing = () => {
    const [btn, setBtn] = useState(false)
    const refMain = useRef(null);
    console.log(refMain);
    useEffect( () => {
        refMain.current.classList.add("startingImg");
        setTimeout(() => {
            refMain.current.classList.remove("startingImg");
            setBtn(true);
        },1000)
    },[]);

    const setLeftImage = () => {
      refMain.current.classList.add("leftImg");
    }

    const setRightImage = () => {
      refMain.current.classList.add("rightImg");
    }

    const clearImg = () => {
      if (refMain.current.classList.contains("rightImg")) {
        refMain.current.classList.remove("rightImg");
      } else if(refMain.current.classList.contains("leftImg")) {
        refMain.current.classList.remove("leftImg");
      }
    }

    const showBtn = btn && (<Fragment>
        <div onMouseOver={setLeftImage} onMouseOut={clearImg} className="leftBox">
       <Link to="/signup" className="btn-welcome">Inscription</Link>
      </div>
      <div onMouseOver={setRightImage} onMouseOut={clearImg} className="rightBox">
        <Link to="/login" className="btn-welcome">Connexion</Link>
      </div>
    </Fragment>)
  return (
    <main ref={refMain} className="welcomePage">
      {showBtn}
    </main>
  );
}

export default Landing;
