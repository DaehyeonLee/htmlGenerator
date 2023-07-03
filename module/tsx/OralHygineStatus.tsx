import "../m_css/OralHygineStatus.css";

export interface IOralHygineStatusProps {}

export const OralHygineStatus = ({
  ...props
}: IOralHygineStatusProps): JSX.Element => {
  return (
    <div className="oral-hygine-status">
      <div className="frame-2275">
        <div className="frame-2106">
          <div className="group-881">
            <div className="">구강관리도</div>

            <div className="line-19"></div>
          </div>

          <div className="frame-2126">
            <div className="O2">관리필요</div>

            <div className="O3">안전</div>

            <div className="O4">위험</div>
          </div>

          <div className="frame-2098">
            <div className="rectangle-735"></div>

            <div className="rectangle-798"></div>

            <div className="ellipse-93"></div>
          </div>

          <div className="frame-2084">
            <svg
              className="polygon-1"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.36603 12.293C6.98112 12.9596 6.01887 12.9596 5.63397 12.293L1.73686 5.54297C1.35196 4.8763 1.83309 4.04297 2.60289 4.04297L10.3971 4.04297C11.1669 4.04297 11.648 4.8763 11.2631 5.54297L7.36603 12.293Z"
                fill="#596177"
              />
            </svg>

            <div className="frame-1709"></div>
          </div>
        </div>

        <div className="group-965">
          <div className="group-956">
            <img className="rectangle-762" src="rectangle-762.png" />

            <img className="rectangle-759" src="rectangle-759.png" />

            <img className="rectangle-771" src="rectangle-771.png" />

            <img className="rectangle-772" src="rectangle-772.png" />

            <img className="rectangle-769" src="rectangle-769.png" />

            <img className="rectangle-770" src="rectangle-770.png" />
          </div>
        </div>
      </div>

      <div className="frame-2105">
        <div className="O5">
          <div className="rectangle-858"></div>

          <div className="frame-2085">
            <div className="ellipse-100"></div>

            <div className="ellipse-97"></div>

            <div className="ellipse-99"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OralHygineStatus;
