import "./header.css";
import { Link } from "react-router-dom";

<header>
  <a href="index.html" aria-label="홈으로 이동">
    <img src="images/logo/logo.svg" alt="판다마켓 로고" width="153" />
  </a>
  <a id="freeAnnounce">자유게시판</a>
  <Link to="/items" id="usedMarket">
    중고마켓
  </Link>
  <a href="login.html" id="loginLink" className="button">
    로그인
  </a>
</header>;
