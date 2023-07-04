import "../css/Sub05ResultMain.css";
import Menu from '../home/Menu';

export interface ISub05ResultMainProps {}

export const Sub05ResultMain = ({
  ...props
}: ISub05ResultMainProps): JSX.Element => {
  return (
    <div className="R_sub-05-result-main">
      <Menu/>

      <div className="R_result-contents">
        <div className="R_com-header">
          <div className="R_group-706">
            <div className="R_btn-profile">
              <div className="R_frame-691">
                <div className="R_img-profile">
                  <img className="R_etc-profile" src="etc-profile.png" />
                </div>

                <div className="R_frame-2">
                  <div className="R_ab-admin">AB Admin</div>
                </div>
              </div>

              <svg
                className="R_icon-24-24-arrow-down-off"
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

            <div className="R_frame-3182">
              <div className="R_icon-24-24-setting-off">
                <svg
                  className="R_frame-setting"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2110_94333)">
                    <path
                      d="M8.46541 11.841C10.1183 11.841 11.4582 10.5011 11.4582 8.84822C11.4582 7.19537 10.1183 5.85547 8.46541 5.85547C6.81256 5.85547 5.47266 7.19537 5.47266 8.84822C5.47266 10.5011 6.81256 11.841 8.46541 11.841Z"
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
                    <clipPath id="clip0_2110_94333">
                      <rect width="16.9219" height="17.7" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="R_btn-input-category-search">
              <div className="R_btn-input-category">
                <div className="R_button-sub-2-dapth">
                  <div className="R_frame-909">
                    <div className="R_patient">Patient</div>

                    <svg
                      className="R_icn"
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

              <div className="R_input-box-search">
                <div className="R_frame-909">
                  <div className="R_">검색어를 입력해 주세요.</div>

                  <div className="R_icn-search">
                    <svg
                      className="R_group-2"
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

        <div className="R_module-see-resultstitle">
          <div className="R_frame-1119">
            <div className="R_R2">결과보기</div>
          </div>

          <div className="R_rectangle-568"></div>

          <div className="R_component-13-search-box-3">
            <div className="R_btn-input-category">
              <div className="R_button-sub-2-dapth">
                <div className="R_frame-909">
                  <div className="R_patient">Patient</div>

                  <svg
                    className="R_icn2"
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

            <div className="R_input-box-search">
              <div className="R_frame-909">
                <div className="R_">검색어를 입력해 주세요.</div>

                <div className="R_icn3">
                  <svg
                    className="R_group-22"
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

        <div className="R_result-table">
          <div className="R_frame-1342">
            <div className="R_group-750">
              <div className="R_frame-750">
                <div className="R_R3">최근 검사일</div>

                <div className="R_rectangle-569"></div>

                <div className="R_R4">환자명</div>

                <div className="R_rectangle-570"></div>

                <div className="R_R4">예약일 빠른 순</div>

                <div className="R_rectangle-571"></div>

                <div className="R_R4">등록일 순</div>
              </div>
            </div>
          </div>

          <div className="R_missing-risk-list">
            <div className="R_module-list">
              <div className="R_frame-7502">
                <div className="R_frame-713">
                  <div className="R_frame-7503">
                    <div className="R_no">NO</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R5">환자 정보</div>
                </div>
              </div>

              <div className="R_R6">연락처</div>

              <div className="R_R7">등록일</div>

              <div className="R_R8">검사일</div>

              <div className="R_R9">예약</div>

              <div className="R_R10">종합 위험도</div>

              <div className="R_R10">관리도</div>

              <div className="R_R11">추정 향후치료비</div>

              <div className="R_R12">담당의</div>
            </div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span">010-7468-</span>
                  <span className="R__010-7468-span2">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-496"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span3">010-7468-</span>
                  <span className="R__010-7468-span4">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-488"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span5">010-7468-</span>
                  <span className="R__010-7468-span6">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-489"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span7">010-7468-</span>
                  <span className="R__010-7468-span8">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-490"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span9">010-7468-</span>
                  <span className="R__010-7468-span10">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-491"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span11">010-7468-</span>
                  <span className="R__010-7468-span12">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-492"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span13">010-7468-</span>
                  <span className="R__010-7468-span14">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-493"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span15">010-7468-</span>
                  <span className="R__010-7468-span16">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-494"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span17">010-7468-</span>
                  <span className="R__010-7468-span18">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-495"></div>

            <div className="R_module-list2">
              <div className="R_frame-7502">
                <div className="R_frame-7132">
                  <div className="R_frame-7505">
                    <div className="R__84236">84236</div>
                  </div>
                </div>

                <div className="R_frame-7504">
                  <div className="R_R13">오지명(남)</div>

                  <div className="R__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="R__010-7468">
                <span>
                  <span className="R__010-7468-span19">010-7468-</span>
                  <span className="R__010-7468-span20">
                    ****
                    <br />
                  </span>
                </span>
              </div>

              <div className="R__2022-08-22">2022-08-22</div>

              <div className="R__2022-08-04">2022-08-04</div>

              <div className="R__2022-10-04">2022-10-04</div>

              <div className="R_R14">6</div>

              <div className="R_R14">2</div>

              <div className="R__4-500-000">4,500,000원</div>

              <div className="R_R15">김춘삼</div>
            </div>

            <div className="R_rectangle-487"></div>
          </div>
        </div>

        <div className="R_bottom">
          <div className="R_module-floating">
            <div className="R_btn-floating-plus">
              <div className="R_ellipse-11"></div>

              <div className="R_line-2"></div>

              <div className="R_line-3"></div>

              <div className="R_group-21">
                <div className="R_ellipse-112"></div>

                <svg
                  className="R_group-736"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="12.5"
                    y1="1.5"
                    x2="12.5"
                    y2="22.5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="1.5"
                    y1="12.5"
                    x2="22.5"
                    y2="12.5"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
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
