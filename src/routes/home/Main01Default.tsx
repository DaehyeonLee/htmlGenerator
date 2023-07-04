import "../css/Main01Default.css";
import ApexCharts from "apexcharts";
import Menu from "./Menu";

export interface IMain01DefaultProps {}

export const Main01Default = ({
  ...props
}: IMain01DefaultProps): JSX.Element => {
  return (
    <div className="M_main-01-default">
      {/* <div className="M_module-menu-status">
        <div className="M_module-menu-hover">
          <div className="M_sidebar">
            <h1>ddddddddd</h1>
          </div>
        </div>

        <div className="M_frame-705"></div>
      </div> */}

      <Menu></Menu>

      <div className="M_contents">
        <div className="M_com-header">
          <div className="M_group-706">
            <div className="M_btn-profile">
              <div className="M_frame-691">
                <div className="M_img-profile">
                  <img className="M_etc-profile" src="./etc-profile.png" />
                </div>

                <div className="M_frame-2">
                  <div className="M_ab-admin">AB Admin</div>
                </div>
              </div>

              <svg
                className="M_icon-24-24-arrow-down-off"
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

            <div className="M_frame-3182">
              <div className="M_icon-24-24-setting-off">
                <svg
                  className="M_frame"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2097_94696)">
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
                    <clipPath id="clip0_2097_94696">
                      <rect width="16.9219" height="17.7" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="M_btn-input-category-search">
              <div className="M_btn-input-category">
                <div className="M_button-sub-2-dapth">
                  <div className="M_frame-909">
                    <div className="M_patient">Patient</div>

                    <svg
                      className="M_icn"
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

              <div className="M_input-box-search">
                <div className="M_frame-909">
                  <div className="M_M1">검색어를 입력해 주세요.</div>

                  <div className="M_icn2">
                    <svg
                      className="M_group-2"
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

        <div className="M_admin">
          <div className="M_group-796">
            <div className="M_reservation-rate">
              <div className="M_frame-1344">
                <div className="M_frame-1119">
                  <div className="M__2022-8-11-1-10-pm">
                    2022년 8월 11일 (목) 1:10PM
                  </div>

                  <div className="M_ab-admin2">안녕하세요! AB Admin님</div>
                </div>

                <div className="M_component-13-search-box-3">
                  <div className="M_btn-input-category">
                    <div className="M_button-sub-2-dapth">
                      <div className="M_frame-909">
                        <div className="M_patient">Patient</div>

                        <svg
                          className="M_icn3"
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

                  <div className="M_input-box-search">
                    <div className="M_frame-909">
                      <div className="M_M1">검색어를 입력해 주세요.</div>
                      <div className="M_icn2">
                        <svg
                          className="M_group-22"
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

              <div className="M_frame-1341">
                <div className="M_mod-rate"></div>

                <div className="M_frame-1138">
                  <div className="M_frame-1158">
                    <div className="M_frame-7052">
                      <div className="M_frame-750">
                        <div className="M_2">관리대상 환자 대비 예약 비율</div>

                        <svg
                          className="M_vector-24"
                          width="6"
                          height="14"
                          viewBox="0 0 6 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.86103e-07 0.500001L6 7L1.4226e-06 13.5"
                            stroke="#333333"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="M_3">
                    전체환자 수 및 관리대상 대비 예약된 환자의 비율을
                    나타냅니다.
                  </div>
                </div>

                <div className="M_rectangle-560"></div>

                <div className="M_group-749">
                  <div className="M_rectangle-546"></div>

                  <div className="M_rectangle-549"></div>

                  <div className="M_rectangle-550"></div>

                  <div className="M_rectangle-557"></div>

                  <div className="M_rectangle-551"></div>

                  <div className="M_rectangle-558"></div>

                  <div className="M_rectangle-552"></div>

                  <div className="M_rectangle-553"></div>

                  <div className="M_rectangle-559"></div>

                  <div className="M_rectangle-554"></div>

                  <div className="M_rectangle-555"></div>

                  <div className="M_rectangle-556"></div>

                  <div className="M_rectangle-548"></div>

                  <div className="M__0">0</div>

                  <div className="M__1">1</div>

                  <div className="M__2">2</div>

                  <div className="M__3">3</div>

                  <div className="M__4">4</div>

                  <div className="M__5">5</div>

                  <div className="M__6">6</div>

                  <div className="M__7">7</div>

                  <div className="M__8">8</div>

                  <div className="M__9">9</div>

                  <div className="M__10">10</div>
                </div>

                <div className="M_manage-patients">
                  <svg
                    className="M_group-726"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="white" />
                    <path
                      d="M4 8L6.87792 10.8779L11.6213 6.13458"
                      stroke="#203F78"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="M_reresv-patients">
                  <svg
                    className="M_group-725"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="white" />
                    <path
                      d="M4 8L6.87792 10.8779L11.6213 6.13458"
                      stroke="#2DBDEF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="M_etc-text-box-2">
                  <div className="M_frame-1168">
                    <svg
                      className="M_polygon-1"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.634 1.5C13.0189 0.833332 13.9811 0.833333 14.366 1.5L24.3253 18.75C24.7102 19.4167 24.2291 20.25 23.4593 20.25H3.54071C2.77091 20.25 2.28978 19.4167 2.67468 18.75L12.634 1.5Z"
                        fill="#596177"
                      />
                    </svg>

                    <div className="M_frame-1167">
                      <div className="M__40">
                        <span>
                          <span className="M__40-span">40</span>
                          <span className="M__40-span2">%</span>
                        </span>
                      </div>

                      <div className="M_4">예약 환자 수</div>
                    </div>
                  </div>
                </div>

                <div className="M_etc-text-box-1">
                  <div className="M_frame-1168">
                    <svg
                      className="M_polygon-12"
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.134 1.5C13.5189 0.833332 14.4811 0.833333 14.866 1.5L24.8253 18.75C25.2102 19.4167 24.7291 20.25 23.9593 20.25H4.04071C3.27091 20.25 2.78978 19.4167 3.17468 18.75L13.134 1.5Z"
                        fill="#596177"
                      />
                    </svg>

                    <div className="M_frame-1167">
                      <div className="M__40">
                        <span>
                          <span className="M__40-span3">63</span>
                          <span className="M__40-span4">%</span>
                        </span>
                      </div>

                      <div className="M_4">관리대상 환자</div>
                    </div>
                  </div>
                </div>

                <div className="M_frame-1171">
                  <div className="M_5">전체 환자 수</div>

                  <div className="M__578-657">
                    <span>
                      <span className="M__578-657-span">578,657</span>
                      <span className="M__578-657-span2">명</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="M_frame-1173">
            <div className="M_frame-1145">
              <div className="M_group-741">
                <div className="M_rectangle-533"></div>

                <svg
                  className="M_icon"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 22L14 16.5L19 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="M_performance-manage-detail-graph">
          <div className="M_frame-1158">
            <div className="M_frame-750">
              <div className="M_2">질병위험도별 환자 수</div>
            </div>
          </div>

          <div className="M_frame-2936">
            <div className="M_module-risk-status-patient-graph">
              <div className="M_risk-status-patients-graph">
                <div className="M_graph-background">
                  <div className="M_graph-background-1">
                    <div className="M_graph-1">
                      <div className="M_group-13">
                        <div className="M__700">700</div>
                      </div>

                      <div className="M_group-19">
                        <div className="M_rectangle-19"></div>

                        <div className="M__600">600</div>
                      </div>

                      <div className="M_group-20">
                        <div className="M_rectangle-192"></div>

                        <div className="M__500">500</div>
                      </div>

                      <div className="M_group-14">
                        <div className="M_rectangle-193"></div>

                        <div className="M__400">400</div>
                      </div>

                      <div className="M_group-17">
                        <div className="M_rectangle-194"></div>

                        <div className="M__300">300</div>
                      </div>

                      <div className="M_group-15">
                        <div className="M_rectangle-195"></div>

                        <div className="M__200">200</div>
                      </div>

                      <div className="M_group-18">
                        <div className="M_rectangle-196"></div>

                        <div className="M__100">100</div>
                      </div>

                      <div className="M_rectangle-700"></div>
                    </div>
                  </div>

                  <div className="M_lower-contents">
                    <div className="M_frame-1523">
                      <div className="M__02">0</div>
                    </div>

                    <div className="M_frame-1521">
                      <div className="M__12">1</div>

                      <div className="M__22">2</div>

                      <div className="M__32">3</div>
                    </div>
                  </div>
                </div>

                <div className="M_stick-graph">
                  <div className="M_frame-933">
                    <div className="M_frame-18">
                      <div className="M__642">642</div>
                      <div className="M_rectangle-20"></div>
                    </div>
                    <div className="M_frame-17">
                      <div className="M__650">650</div>
                      <div className="M_rectangle-21"></div>
                    </div>
                    <div className="M_frame-19">
                      <div className="M__368">368</div>
                      <div className="M_rectangle-212"></div>
                    </div>
                    <div className="M_frame-20">
                      <div className="M__630">630</div>
                      <div className="M_rectangle-202"></div>
                    </div>
                  </div>

                  <div className="M_frame-934">
                    <div className="M_frame-18">
                      <div className="M__67">67</div>

                      <div className="M_rectangle-203"></div>
                    </div>

                    <div className="M_frame-17">
                      <div className="M__60">60</div>

                      <div className="M_rectangle-213"></div>
                    </div>

                    <div className="M_frame-19">
                      <div className="M__266">266</div>

                      <div className="M_rectangle-214"></div>
                    </div>

                    <div className="M_frame-20">
                      <div className="M__68">68</div>

                      <div className="M_rectangle-204"></div>
                    </div>
                  </div>

                  <div className="M_frame-937">
                    <div className="M_frame-18">
                      <div className="M__42">42</div>

                      <div className="M_rectangle-205"></div>
                    </div>

                    <div className="M_frame-17">
                      <div className="M__43">43</div>

                      <div className="M_rectangle-215"></div>
                    </div>

                    <div className="M_frame-19">
                      <div className="M__322">32</div>

                      <div className="M_rectangle-216"></div>
                    </div>

                    <div className="M_frame-20">
                      <div className="M__35">35</div>

                      <div className="M_rectangle-206"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="M_list">
                <div className="M_frame-1414">
                  <div className="M_ellipse-38"></div>

                  <div className="M_6">치아우식</div>
                </div>

                <div className="M_frame-1416">
                  <div className="M_ellipse-382"></div>

                  <div className="M_6">치주질환</div>
                </div>

                <div className="M_frame-1415">
                  <div className="M_ellipse-383"></div>

                  <div className="M_6">치아파절</div>
                </div>

                <div className="M_frame-1417">
                  <div className="M_ellipse-384"></div>

                  <div className="M_6">치경부마모</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="M_reservation-rate-circle">
          <div className="M_frame-1157">
            <div className="M_frame-7052">
              <div className="M_frame-750">
                <div className="M_2">관리중요도별 환자 비율</div>

                <svg
                  className="M_vector-26"
                  width="6"
                  height="14"
                  viewBox="0 0 6 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.86103e-07 0.500001L6 7L1.4226e-06 13.5"
                    stroke="#333333"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="M_frame-1133">
            <div className="M_img-graph">
              <div className="M_group">
                <svg
                  className="M_7"
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150 300C232.843 300 300 232.843 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150C0 232.843 67.1573 300 150 300Z"
                    stroke="url(#paint0_linear_2097_65361)"
                    strokeMiterlimit="10"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2097_65361"
                      x1="-0.535714"
                      y1="150"
                      x2="300.536"
                      y2="150"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.28" stopColor="#D6D9DE" />
                      <stop offset="0.54" stopColor="#D8DBDF" />
                      <stop offset="1" stopColor="#F1F3F6" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  className="M__23"
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M150 6.94224C188.207 6.94224 224.132 21.8244 251.153 48.8458C278.175 75.8672 293.057 111.792 293.057 149.999C293.057 188.207 278.175 224.132 251.153 251.153C224.132 278.174 188.207 293.056 150 293.056C111.793 293.056 75.8677 278.174 48.8463 251.153C21.8249 224.132 6.94273 188.207 6.94273 149.999C6.94273 111.792 21.8249 75.8672 48.8463 48.8458C75.8677 21.8244 111.793 6.94224 150 6.94224ZM150 0.513672C67.4463 0.513672 0.51416 67.4458 0.51416 149.999C0.51416 232.553 67.4356 299.485 150 299.485C232.564 299.485 299.486 232.564 299.486 149.999C299.486 67.4351 232.553 0.513672 150 0.513672V0.513672Z"
                    fill="#F1F3F6"
                  />
                  <path
                    d="M150 6.94224C188.207 6.94224 224.132 21.8244 251.153 48.8458C278.175 75.8672 293.057 111.792 293.057 149.999C293.057 188.207 278.175 224.132 251.153 251.153C224.132 278.174 188.207 293.056 150 293.056C111.793 293.056 75.8677 278.174 48.8463 251.153C21.8249 224.132 6.94273 188.207 6.94273 149.999C6.94273 111.792 21.8249 75.8672 48.8463 48.8458C75.8677 21.8244 111.793 6.94224 150 6.94224ZM150 0.513672C67.4463 0.513672 0.51416 67.4458 0.51416 149.999C0.51416 232.553 67.4356 299.485 150 299.485C232.564 299.485 299.486 232.564 299.486 149.999C299.486 67.4351 232.553 0.513672 150 0.513672V0.513672Z"
                    fill="url(#paint0_linear_2097_65362)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2097_65362"
                      x1="285"
                      y1="208"
                      x2="69.4999"
                      y2="44.4995"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopOpacity="0.19" />
                      <stop offset="1" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  className="M__33"
                  width="289"
                  height="289"
                  viewBox="0 0 289 289"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M144.176 288.914C223.764 288.914 288.283 224.395 288.283 144.806C288.283 65.2182 223.764 0.699219 144.176 0.699219C64.5873 0.699219 0.0683594 65.2182 0.0683594 144.806C0.0683594 224.395 64.5873 288.914 144.176 288.914Z"
                    stroke="url(#paint0_linear_2097_65364)"
                    strokeMiterlimit="10"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2097_65364"
                      x1="-0.466599"
                      y1="144.806"
                      x2="288.828"
                      y2="144.806"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.35" stopColor="#F1F3F6" />
                      <stop offset="0.6" stopColor="#F1F3F6" />
                      <stop offset="1" stopColor="#D6D9DE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <svg
                className="M_group-740"
                width="241"
                height="241"
                viewBox="0 0 241 241"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M224.7 180.62C214.13 198.9 198.9 214.13 180.62 224.7C162.91 234.95 142.34 240.82 120.41 240.82C98.4802 240.82 77.9102 234.96 60.2002 224.7L120.41 120.41L224.7 180.62V180.62Z"
                  fill="#82D7D7"
                />
                <path
                  d="M120.41 120.41L60.2 224.7C41.92 214.13 26.69 198.9 16.12 180.62C5.87 162.91 0 142.34 0 120.41H120.41V120.41Z"
                  fill="#446392"
                />
                <path
                  d="M120.41 0V120.41H0C0 98.48 5.86 77.91 16.12 60.2C26.69 41.92 41.92 26.69 60.2 16.12C77.91 5.87 98.48 0 120.41 0V0Z"
                  fill="#FF7A00"
                />
                <path
                  d="M240.82 120.41C240.82 142.34 234.96 162.91 224.7 180.62L120.41 120.41V0C142.34 0 162.91 5.86 180.62 16.12C198.9 26.69 214.13 41.92 224.7 60.2C234.95 77.91 240.82 98.48 240.82 120.41Z"
                  fill="#FF5F60"
                />
              </svg>

              <svg
                className="M_vector8"
                width="121"
                height="181"
                viewBox="0 0 121 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120.91 120.5C120.91 142.43 115.05 163 104.79 180.71L0.5 120.5V0.0898438C22.43 0.0898438 43 5.94984 60.71 16.2098C78.99 26.7798 94.22 42.0098 104.79 60.2898C115.04 77.9998 120.91 98.5698 120.91 120.5Z"
                  fill="#FF5F60"
                />
              </svg>

              <svg
                className="M_vector9"
                width="131"
                height="197"
                viewBox="0 0 131 197"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_2097_65371)">
                  <path
                    d="M130.72 131.6C130.72 155.39 124.36 177.7 113.24 196.91L0.120117 131.6V0.990234C23.9101 0.990234 46.2201 7.35023 65.4301 18.4702C85.2501 29.9402 101.77 46.4602 113.24 66.2802C124.36 85.4902 130.72 107.8 130.72 131.59V131.6Z"
                    fill="#FF5F60"
                  />
                  <path
                    d="M130.72 131.6C130.72 155.39 124.36 177.7 113.24 196.91L0.120117 131.6V0.990234C23.9101 0.990234 46.2201 7.35023 65.4301 18.4702C85.2501 29.9402 101.77 46.4602 113.24 66.2802C124.36 85.4902 130.72 107.8 130.72 131.59V131.6Z"
                    fill="url(#paint0_linear_2097_65371)"
                    fillOpacity="0.25"
                    style={{ mixBlendMode: "overlay" }}
                  />
                  <path
                    d="M130.72 131.6C130.72 155.39 124.36 177.7 113.24 196.91L0.120117 131.6V0.990234C23.9101 0.990234 46.2201 7.35023 65.4301 18.4702C85.2501 29.9402 101.77 46.4602 113.24 66.2802C124.36 85.4902 130.72 107.8 130.72 131.59V131.6Z"
                    fill="url(#paint1_linear_2097_65371)"
                    fillOpacity="0.1"
                    style={{ mixBlendMode: "overlay" }}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_2097_65371"
                    x="-18.8799"
                    y="-9.00977"
                    width="158.6"
                    height="223.92"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-5" dy="4" />
                    <feGaussianBlur stdDeviation="7" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2097_65371"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2097_65371"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2097_65371"
                    x1="14.5"
                    y1="-15.5"
                    x2="88"
                    y2="115"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.015577" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2097_65371"
                    x1="-1.5"
                    y1="-3.5"
                    x2="35.5"
                    y2="54.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFFBFB" />
                    <stop offset="1" stopColor="#FFFBFB" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="M_ellipse-32"></div>

              <div className="M_frame-1130">
                <div className="M_8">보통</div>

                <div className="M__42-4">
                  <span>
                    <span className="M__42-4-span">42.4</span>
                    <span className="M__42-4-span2">%</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="M_frame-1131">
              <div className="M_frame-21">
                <div className="M_frame-927">
                  <div className="M_ellipse-3"></div>

                  <div className="M_9">보통</div>
                </div>

                <div className="M__41-9-361">41.9% / 361명</div>
              </div>

              <div className="M_frame-25">
                <div className="M_frame-927">
                  <div className="M_ellipse-33"></div>

                  <div className="M_10">중요</div>
                </div>

                <div className="M__25-8-222">25.8% / 222명</div>
              </div>

              <div className="M_frame-26">
                <div className="M_frame-927">
                  <div className="M_ellipse-34"></div>

                  <div className="M_10">매우 중요</div>
                </div>

                <div className="M__10-7-92">10.7% / 92명</div>
              </div>

              <div className="M_frame-27">
                <div className="M_frame-927">
                  <div className="M_ellipse-35"></div>

                  <div className="M_10">미정</div>
                </div>

                <div className="M__21-6-189">21.6% / 189명</div>
              </div>
            </div>
          </div>
        </div>

        <div className="M_recent-check-in-patient">
          <div className="M_frame-1158">
            <div className="M_frame-7052">
              <div className="M_frame-750">
                <div className="M_2">최근 등록(진료) 환자</div>

                <svg
                  className="M_vector-27"
                  width="6"
                  height="14"
                  viewBox="0 0 6 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.86103e-07 0.500001L6 7L1.4226e-06 13.5"
                    stroke="#333333"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="M_frame-11712">
            <div className="M_module-list">
              <div className="M_frame-7502">
                <div className="M_frame-713">
                  <div className="M_frame-7503">
                    <div className="M_no">NO</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_11">환자 정보</div>
                </div>
              </div>

              <div className="M_12">연락처</div>

              <div className="M_13">등록일</div>

              <div className="M_13">최근 검사일</div>

              <div className="M_14">다음 예약</div>

              <div className="M_15">종합 위험도</div>

              <div className="M_15">관리도</div>

              <div className="M_16">추정 향후치료비</div>

              <div className="M_17">담당의</div>
            </div>

            <div className="M_module-list2">
              <div className="M_frame-7502">
                <div className="M_frame-7132">
                  <div className="M_frame-7505">
                    <div className="M__84236">84236</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_18">오지명(남)</div>

                  <div className="M__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="M__010-1234-5678">010-1234-5678</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-10-04">2022-10-04</div>

              <div className="M_19">-</div>

              <div className="M_19">-</div>

              <div className="M__4-500-000">4,500,000원</div>

              <div className="M_20">김춘삼</div>
            </div>

            <div className="M_rectangle-487"></div>

            <div className="M_module-list2">
              <div className="M_frame-7502">
                <div className="M_frame-7132">
                  <div className="M_frame-7505">
                    <div className="M__84236">84236</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_18">오지명(남)</div>

                  <div className="M__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="M__010-1234-5678">010-1234-5678</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-10-04">2022-10-04</div>

              <div className="M_19">-</div>

              <div className="M_19">-</div>

              <div className="M__4-500-000">4,500,000원</div>

              <div className="M_20">김춘삼</div>
            </div>

            <div className="M_rectangle-488"></div>

            <div className="M_module-list2">
              <div className="M_frame-7502">
                <div className="M_frame-7132">
                  <div className="M_frame-7505">
                    <div className="M__84236">84236</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_18">오지명(남)</div>

                  <div className="M__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="M__010-1234-5678">010-1234-5678</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-10-04">2022-10-04</div>

              <div className="M_19">-</div>

              <div className="M_19">-</div>

              <div className="M__4-500-000">4,500,000원</div>

              <div className="M_20">김춘삼</div>
            </div>

            <div className="M_rectangle-490"></div>

            <div className="M_module-list2">
              <div className="M_frame-7502">
                <div className="M_frame-7132">
                  <div className="M_frame-7505">
                    <div className="M__84236">84236</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_18">오지명(남)</div>

                  <div className="M__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="M__010-1234-5678">010-1234-5678</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-10-04">2022-10-04</div>

              <div className="M_19">-</div>

              <div className="M_19">-</div>

              <div className="M__4-500-000">4,500,000원</div>

              <div className="M_20">김춘삼</div>
            </div>

            <div className="M_rectangle-491"></div>

            <div className="M_module-list2">
              <div className="M_frame-7502">
                <div className="M_frame-7132">
                  <div className="M_frame-7505">
                    <div className="M__84236">84236</div>
                  </div>
                </div>

                <div className="M_frame-7504">
                  <div className="M_18">오지명(남)</div>

                  <div className="M__1984-09-05">1984-09-05</div>
                </div>
              </div>

              <div className="M__010-1234-5678">010-1234-5678</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-08-04">2022-08-04</div>

              <div className="M__2022-10-04">2022-10-04</div>

              <div className="M_19">-</div>

              <div className="M_19">-</div>

              <div className="M__4-500-000">4,500,000원</div>

              <div className="M_20">김춘삼</div>
            </div>

            <div className="M_rectangle-492"></div>
          </div>
        </div>

        <div className="M_bottom">
          <div className="M_module-floating">
            <div className="M_btn-floating-plus">
              <div className="M_ellipse-11"></div>

              <div className="M_line-2"></div>

              <div className="M_line-3"></div>

              <div className="M_group-21">
                <div className="M_ellipse-112"></div>

                <svg
                  className="M_group-736"
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
export default Main01Default;
