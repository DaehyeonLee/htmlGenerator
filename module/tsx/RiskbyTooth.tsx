import "../m_css/RiskbyTooth.css";

export interface IRiskbyToothProps {}

export const RiskbyTooth = ({ ...props }: IRiskbyToothProps): JSX.Element => {
  return (
    <div className="riskby-tooth">
      <div className="">치아 별 위험</div>

      <div className="R2">
        <div className="title">
          <div className="_17">치아 #17</div>

          <svg
            className="icn"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19.793L16.5 12.793L24 19.793"
              stroke="#2DBDEF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="R3">
          <div className="_2">
            <div className="R4">
              <div className="text">
                <div className="R5">치아</div>
              </div>

              <div className="text">
                <div className="R5">치아우식</div>
              </div>

              <div className="text">
                <div className="R5">치주질환</div>
              </div>

              <div className="text">
                <div className="R5">치아파절</div>
              </div>

              <div className="text">
                <div className="R5">치경부마모</div>
              </div>

              <div className="text">
                <div className="R6">치아위험도</div>
              </div>
            </div>

            <div className="rectangle-707"></div>

            <div className="R4">
              <div className="text2">
                <div className="_7-2">
                  상악오른쪽 7번
                  <br />
                  (제2대구치)
                </div>
              </div>

              <div className="_22">
                <div className="_1">1</div>
              </div>

              <div className="_23">
                <div className="_3">3</div>
              </div>

              <div className="_22">
                <div className="_1">1</div>
              </div>

              <div className="_22">
                <div className="_24">2</div>
              </div>

              <div className="_25">
                <div className="_32">3</div>
              </div>
            </div>

            <div className="rectangle-783"></div>
          </div>

          <div className="R7">
            <img className="rectangle-785" src="rectangle-785.png" />

            <img className="rectangle-784" src="rectangle-784.png" />
          </div>
        </div>

        <div className="line-19"></div>

        <div className="title2">
          <div className="_17">치아 #27</div>

          <svg
            className="icn2"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 13.793L15.5 20.793L8 13.793"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="line-21"></div>

        <div className="title2">
          <div className="_17">치아 #18</div>

          <svg
            className="icn3"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 13.793L15.5 20.793L8 13.793"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="line-20"></div>
      </div>
    </div>
  );
};
export default RiskbyTooth;
