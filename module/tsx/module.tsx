import "../m_css/Module.css";

export interface IModuleProps {
  search?: "off" | "on";
}

export const Module = ({
  search = "on",
  ...props
}: IModuleProps): JSX.Element => {
  return (
    <div className="module">
      <div className="frame-1241">
        <div className="frame-1119">
          <div className="">환자관리</div>
        </div>

        <div className="frame-1191">
          <div className="_84-236">84,236</div>
        </div>
      </div>

      <div className="rectangle-568"></div>

      <div className="component-13-search-box-3">
        <div className="btn-input-category">
          <div className="button-sub-2-dapth">
            <div className="frame-909">
              <div className="patient">Patient</div>

              <svg
                className="icn"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10L12.375 13L15.75 10"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="input-box-search">
          <div className="frame-909">
            <div className="l2">검색어를 입력해 주세요.</div>

            <div className="icn2">
              <svg
                className="group-2"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.48528"
                  cy="9.18359"
                  r="5.25"
                  transform="rotate(-45 8.48528 9.18359)"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
                <path
                  d="M16.8149 18.5738C17.1078 18.8667 17.5827 18.8667 17.8756 18.5738C18.1685 18.2809 18.1685 17.8061 17.8756 17.5132L16.8149 18.5738ZM11.8652 13.6241L16.8149 18.5738L17.8756 17.5132L12.9258 12.5634L11.8652 13.6241Z"
                  fill="#333333"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module;
