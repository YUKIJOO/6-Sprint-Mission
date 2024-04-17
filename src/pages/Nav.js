import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/pandamarket">
        <img src="../images/og-images.png" alt="판다마켓" />
      </Link>
      <Link to="/freewriter">자유게시판</Link>
      <Link to="/usedmarket">중고마켓</Link>
      <Link to="/login">
        <button>로그인</button>
      </Link>
    </>
  );
}

export default Nav;
