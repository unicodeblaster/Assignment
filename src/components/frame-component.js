import Sidebar1 from "./sidebar1";
import Sidebar from "./sidebar";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`h-[850px] w-[280px] bg-gray1-100 flex flex-col items-start justify-start pt-[72.9px] px-5 pb-[73px] box-border relative gap-[9px] text-left text-mini text-whitesmoke-100 font-outfit mq450:hidden mq450:pt-[47px] mq450:pb-[47px] mq450:box-border mq750:pt-[31px] mq750:pb-[31px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center">
        <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[74px]">
          Hey, ABCD
        </a>
      </div>
      <Sidebar1 calendar="/calendar1.svg" />
      <Sidebar />
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-px text-5xs text-m3-white font-inter">
        <div className="self-stretch flex-1 bg-gray1-300 overflow-hidden flex flex-row items-start justify-start py-[7px] px-0">
          <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[18.6px] px-0 pb-[22.4px] relative gap-[15.9px]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_1.3px_6.65px_rgba(0,_0,_0,_0.1)] bg-gray1-300" />
            <div className="w-[58px] h-0 relative text-gray hidden z-[1]">
              Secondary text
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[6.8px] pr-[23px] pl-5 text-sm-3">
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.3px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative font-medium inline-block min-w-[80px] z-[1]">
                    Today Tasks
                  </div>
                  <div className="h-4 w-4 relative z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gray-2" />
                    <div className="absolute h-[66.25%] w-[16.88%] top-[16.88%] right-[41.87%] bottom-[16.87%] left-[41.25%] z-[1]">
                      <div className="absolute h-[66.98%] w-full top-[33.96%] right-[0%] bottom-[-0.94%] left-[0%] rounded-[3.99px] bg-gray1-300" />
                      <div className="absolute h-[25.47%] w-full top-[0%] right-[0%] bottom-[74.53%] left-[0%] rounded-[3.99px] bg-gray1-300" />
                    </div>
                  </div>
                </div>
                <div className="relative text-2xl-3 font-medium inline-block min-w-[21px] z-[1] mq750:text-mid">
                  11
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[4.1px]">
              <img
                className="h-[1.3px] w-[236px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-2017.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-[42px] pl-[41px]">
              <div className="self-stretch flex-1 relative rounded-[50%] bg-seagreen-100 z-[1]" />
            </div>
            <div className="w-[149.7px] flex flex-row items-start justify-start py-0 px-5 box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[5.3px]">
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
            <div className="w-[151.6px] h-[151.6px] absolute !m-[0] bottom-[-102px] left-[193.5px] rounded-[50%] bg-lightgreen-100 [transform:_rotate(-180deg)] [transform-origin:0_0] z-[2]" />
          </div>
        </div>
      </div>
      <img
        className="w-[118px] h-[118px] absolute !m-[0] top-[-59px] right-[76px] rounded-[2947.05px] object-contain mix-blend-normal"
        loading="lazy"
        alt=""
        src="/profile@2x.png"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
