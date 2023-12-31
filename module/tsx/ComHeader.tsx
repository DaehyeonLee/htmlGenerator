import "../m_css/ComHeader.css";
export interface IComHeaderProps {
  property1?: "off" | "on";
}
export const ComHeader = ({
  property1 = "off",
  ...props
}: IComHeaderProps): JSX.Element => {
  return (
    <div className="com-header">
      <div className="group-706">
        <div className="btn-profile">
          <div className="frame-691">
            <div className="img-profile">
              <img className="etc-profile" src="etc-profile.png" />
            </div>

            <div className="frame-2">
              <div className="ab-admin">AB Admin</div>
            </div>
          </div>

          <svg
            className="icon-24-24-arrow-down-off"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 11L11.625 14L8.25 11"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="frame-3182">
          <div className="icon-24-24-setting-off">
            <svg
              className="frame"
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2055_95324)">
                <path
                  d="M8.46541 11.8429C10.1183 11.8429 11.4582 10.503 11.4582 8.85018C11.4582 7.19732 10.1183 5.85742 8.46541 5.85742C6.81256 5.85742 5.47266 7.19732 5.47266 8.85018C5.47266 10.503 6.81256 11.8429 8.46541 11.8429Z"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.8786 8.8508C14.8786 8.33775 14.8101 7.85036 14.699 7.37152L16.2809 5.97775L14.8529 3.50659L12.852 4.1821C12.1338 3.50659 11.2616 2.985 10.2868 2.69428L9.87638 0.625H7.02899L6.61856 2.69428C5.64377 2.985 4.78015 3.49804 4.06189 4.1821L2.06102 3.49804L0.641602 5.97775L2.23204 7.37152C2.12088 7.85036 2.05247 8.33775 2.05247 8.8508C2.05247 9.36384 2.12088 9.85123 2.23204 10.3301L0.641602 11.7238L2.06957 14.195L4.07044 13.5195C4.7887 14.195 5.66088 14.7166 6.63566 15.0073L7.04609 17.068H9.89348L10.3039 15.0073C11.2787 14.7166 12.1509 14.2036 12.8691 13.5195L14.87 14.195L16.298 11.7238L14.7161 10.3386C14.8272 9.85978 14.8957 9.37239 14.8957 8.85935L14.8786 8.8508Z"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2055_95324">
                  <rect width="16.9219" height="17.7" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="btn-input-category-search">
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
              <div className="">검색어를 입력해 주세요.</div>

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
    </div>
  );
};
export default ComHeader;
