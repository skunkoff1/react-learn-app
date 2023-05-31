import React, { Fragment, useEffect, useRef, useState } from "react";

const Landing = () => {
  const refWolverine = useRef(null);

  const [btn, setBtn] = useState(false);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");    

    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add('leftImg');
  }

  const setRightImg = () => {
    refWolverine.current.classList.add('rightImg');
  }

  const clearImg = () => {
    refWolverine.current.classList.remove("leftImg", "rightImg");
  }

  const displayBtns = btn && (
    <Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
        <button className="btn-welcome">Inscription</button>
      </div>
      <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
        <button className="btn-welcome">Connexion</button>
      </div>
    </Fragment>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
        {displayBtns}
    </main>);
};

export default Landing;
