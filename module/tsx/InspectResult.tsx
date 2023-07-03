import "../m_css/InspectResult.css";

export interface IInspectResultProps {}

export const InspectResult = ({
  ...props
}: IInspectResultProps): JSX.Element => {
  return (
    <div className="inspect-result">
      <div className="frame-837">
        <div className="frame-1202">
          <div className="frame-1201">
            <div className="">검사결과</div>
          </div>

          <div className="frame-1175">
            <div className="module-list">
              <div className="frame-750">
                <div className="frame-7502">
                  <div className="I2">검사일시</div>
                </div>
              </div>

              <div className="I3">구강 위험도</div>

              <div className="I3">결손기능 치아 수</div>

              <div className="I4">관리도</div>

              <div className="I5">필수 관리 치아</div>

              <div className="I6">최대 치아 위험도</div>

              <div className="I7">질병 종합위험도</div>

              <div className="I4">치아 우식</div>

              <div className="I4">치아 파절</div>

              <div className="I4">치주 질환</div>

              <div className="frame-749">
                <div className="I8">치경부 마모</div>
              </div>
            </div>

            <div className="module-list2">
              <div className="frame-767">
                <div className="frame-7503">
                  <div className="_2021-12-01-15-30">2021-12-01 15:30</div>
                </div>

                <div className="_70">70%</div>
              </div>

              <div className="_8">8</div>

              <div className="_3">3</div>

              <div className="_32">3</div>

              <div className="_2">2</div>

              <div className="_6">6</div>

              <div className="_1">1</div>

              <div className="_1">1</div>

              <div className="I9">-</div>

              <div className="frame-749">
                <div className="I10">-</div>
              </div>
            </div>

            <div className="rectangle-498"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InspectResult;
