const Menu = () => {
  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
  };

  return (
    <div className="moudle-menu-status_home">
            <div className="group-686_home">
                <img src="./etc-logo.png"/>
              </div>

            <button
              className="menu_item menu_itme_1"
              name="my_tasks"
              onClick={onMenuClick}
            >
              <img src="/menuicon1.png" />
              <div className="sizedBoxW10"></div>
              <div className='menuText'>My Tasks</div>
            </button>
            <button
              className="menu_item menu_itme_2"
              name="patient"
              onClick={onMenuClick}
            >
              <img src="/menuicon2.png" />
              <div className="sizedBoxW20"></div>
              <div className='menuText'>환자 관리</div>
            </button>
            <button
              className="menu_item menu_itme_3"
              name="results"
              onClick={onMenuClick}
            >
              <img src="/menuicon3.png" />
              <div className="sizedBoxW20"></div>
              <div className='menuText'>Results</div>
            </button>
            <button
              className="menu_item menu_itme_4"
              name="schedule"
              onClick={onMenuClick}
            >
              <img src="/menuicon4.png" />
              <div className="sizedBoxW20"></div>
              <div className='menuText'>Schedule</div>
            </button>
            <button
              className="menu_item menu_itme_5"
              name="performance"
              onClick={onMenuClick}
            >
              <img src="/menuicon5.png" />
              <div className="sizedBoxW20"></div>
              <div className='menuText'>성과 관리</div>
            </button>
            <button
              className="menu_item menu_itme_6"
              name="analytics"
              onClick={onMenuClick}
            >
              <img src="/menuicon6.png" />
              <div className="sizedBoxW20"></div>
              <div className='menuText'>Analyics</div>
            </button>
        <div className="frame-742_home"></div>

      <div className="frame-1145_home"></div>
    </div>
  );
};

export default Menu;
