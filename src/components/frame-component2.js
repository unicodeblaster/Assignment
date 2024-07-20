import Sidebar1 from "./sidebar1";
import Sidebar from "./sidebar";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray1-100 flex flex-col items-start justify-start pt-[72.9px] px-[9px] pb-[73px] relative gap-[9px] text-left text-mini text-whitesmoke-200 font-outfit mq450:pt-[31px] mq450:pb-[31px] mq450:box-border mq1050:pt-[47px] mq1050:pb-[47px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
        <div className="relative leading-[20px] font-medium inline-block min-w-[74px]">
          Hey, ABCD
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5">
        <Sidebar1
          calendar="/calendar.svg"
          labelAlignSelf="unset"
          labelFlex="1"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5">
        <Sidebar propAlignSelf="unset" propFlex="1" />
      </div>
      <div className="self-stretch bg-gray1-200 overflow-hidden flex flex-row items-start justify-start py-[7px] px-3 text-5xs text-m3-white font-inter">
        <div className="flex-1 flex flex-col items-start justify-start pt-[18.6px] px-0 pb-[22.4px] relative gap-[20px]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1.3px_6.65px_rgba(0,_0,_0,_0.1)] bg-gray1-200" />
          <div className="w-[58px] h-0 relative text-gray hidden z-[1]">
            Secondary text
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[22.7px] text-sm-3">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-5">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.3px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative font-medium inline-block min-w-[80px] z-[1]">
                    Today Tasks
                  </div>
                  <div className="h-4 w-4 relative z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gray-2" />
                    <div className="absolute h-[66.25%] w-[16.88%] top-[16.87%] right-[41.87%] bottom-[16.88%] left-[41.25%] z-[1]">
                      <div className="absolute h-[66.98%] w-full top-[33.96%] right-[0%] bottom-[-0.94%] left-[0%] rounded-[3.99px] bg-gray1-200" />
                      <div className="absolute h-[25.47%] w-full top-[0%] right-[0%] bottom-[74.53%] left-[0%] rounded-[3.99px] bg-gray1-200" />
                    </div>
                  </div>
                </div>
                <div className="relative text-2xl-3 font-medium inline-block min-w-[21px] z-[1] mq450:text-mid">
                  11
                </div>
              </div>
            </div>
            <img
              className="self-stretch h-[1.3px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/group-2017.svg"
            />
          </div>
          <div className="w-[151.6px] h-[151.6px] absolute !m-[0] bottom-[49.6px] left-[41.9px] rounded-[50%] bg-seagreen-100 z-[1]" />
          <div className="w-[213.5px] flex flex-row items-start justify-start py-0 px-5 box-border">
            <div className="h-[178.8px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27.2px] box-border gap-[15.9px]">
              <div className="self-stretch h-[151.6px] flex flex-row items-start justify-start py-0 pr-0 pl-[21px] box-border shrink-0">
                <div className="self-stretch flex-1 relative rounded-[50%] bg-lightgreen-100 [transform:_rotate(-180deg)] shrink-0 z-[2]" />
              </div>
              <div className="w-[109.1px] flex flex-row items-start justify-start gap-[5.3px] shrink-0">
                <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px] z-[1]">
                  <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <div className="w-1.5 h-1.5 relative rounded-[50%] bg-seagreen-100 shrink-0" />
                  </div>
                  <div className="flex-1 relative shrink-0">Pending</div>
                </div>
                <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px] z-[1]">
                  <div className="flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0">
                    <div className="w-1.5 h-1.5 relative rounded-[50%] bg-lightgreen-100" />
                  </div>
                  <div className="flex-1 relative">Done</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[118px] h-[118px] absolute !m-[0] top-[-59px] right-[76px] rounded-[2947.05px] object-cover mix-blend-normal"
        loading="lazy"
        alt=""
        src="/profile@2x.png"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
