import "../m_css/Bar.css";

export interface IBarProps {}

export const Bar = ({ ...props }: IBarProps): JSX.Element => {
  return (
    <div className="bar">
      <div className="frame-2958">
        <div className="frame-2951">
          <div className="">종합분석</div>
        </div>

        <div className="frame-2952">
          <div className="o2">종합결과</div>
        </div>

        <div className="frame-2953">
          <div className="o2">구강관리도</div>
        </div>

        <div className="frame-2954">
          <div className="o2">치아별 위험</div>
        </div>

        <div className="frame-2955">
          <div className="o2">예측 잔존치아 수</div>
        </div>

        <div className="frame-2956">
          <div className="o2">구강 건강 관리</div>
        </div>
      </div>

      <div className="frame-2960">
        <svg
          className="rectangle-910"
          width="884"
          height="2"
          viewBox="0 0 884 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 0.5H883.5V1.5H0.5V0.5Z"
            fill="#D9D9D9"
            stroke="#E3E3E3"
          />
        </svg>

        <div className="bar2">
          <div className="rectangle-911"></div>
        </div>
      </div>
    </div>
  );
};
export default Bar;
