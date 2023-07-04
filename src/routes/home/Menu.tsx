import { BrowserRouter, Link } from "react-router-dom";

const onMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const {
    currentTarget: { name },
  } = event;
  <Link to={"./result"}></Link>;
};

const Menu = () => {
  return (
    <div className="moudle-menu-status_home">
      <div className="group-686_home">
        <img src="./etc-logo.png" />
      </div>
      <button className="menu_item menu_itme_1" name="my_tasks">
        <img src="/menuicon1.png" />
        <div className="sizedBoxW10"></div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="menuText">My Tasks</div>
        </Link>
      </button>
      <button className="menu_item menu_itme_2" name="patient">
        <img src="/menuicon2.png" />
        <div className="sizedBoxW20"></div>
        <Link to="/patientlist" style={{ textDecoration: "none" }}>
          <div className="menuText">환자 관리</div>
        </Link>
      </button>
      {/* <button className="menu_item menu_itme_3" name="results">
        <img src="/menuicon3.png" />
        <div className="sizedBoxW20"></div>
        <Link to="/patientdetail" style={{ textDecoration: "none" }}>
          <div className="menuText">환자 상세</div>
        </Link>
      </button> */}
      <button className="menu_item menu_itme_4" name="schedule">
        <img src="/menuicon4.png" />
        <div className="sizedBoxW20"></div>
        <Link to="/result" style={{ textDecoration: "none" }}>
          <div className="menuText">결과 보기</div>
        </Link>
      </button>
      {/* <button className="menu_item menu_itme_5" name="performance">
        <img src="/menuicon5.png" />
        <div className="sizedBoxW20"></div>
        <Link to="/resultdetail" style={{ textDecoration: "none" }}>
          <div className="menuText">결과 상세</div>
        </Link>
      </button> */}
      <button className="menu_item menu_itme_6" name="analytics">
        <img src="/menuicon6.png" />
        <div className="sizedBoxW20"></div>
        <Link to="/resultmobile" style={{ textDecoration: "none" }}>
          <div className="menuText">모바일 페이지</div>
        </Link>
      </button>
      <div className="frame-742_home"></div>

      <div className="frame-1145_home"></div>
    </div>
  );
};

export default Menu;
