import { useMemo } from "react";
import PropTypes from "prop-types";

const Sidebar1 = ({ className = "", calendar, labelAlignSelf, labelFlex }) => {
  const sidebarStyle = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      flex: labelFlex,
    };
  }, [labelAlignSelf, labelFlex]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-mini text-whitesmoke-100 font-outfit ${className}`}
      style={sidebarStyle}
    >
      <div className="self-stretch bg-gray1-300 overflow-hidden flex flex-col items-start justify-start py-6 px-0">
        <div className="self-stretch rounded-lg bg-gray1-300 flex flex-row items-center justify-start py-2 pr-[127px] pl-4 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/menu-1.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[57px]">
            All Tasks
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-seagreen-400 flex flex-row items-center justify-start py-2 pr-[142px] pl-4 gap-[16px] text-seagreen-200">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src={calendar}
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[42px]">
            Today
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-gray1-300 flex flex-row items-center justify-start py-2 pr-[115px] pl-4 gap-[16px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/clock.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[69px]">
            Important
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-gray1-300 flex flex-row items-center justify-start py-2 pr-[129px] pl-4 gap-[16px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/clock-1.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[55px]">
            Planned
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-gray1-300 flex flex-row items-center justify-start py-2 pr-[82px] pl-4 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/clock-2.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[102px]">{`Assigned to me `}</div>
        </div>
      </div>
    </div>
  );
};

Sidebar1.propTypes = {
  className: PropTypes.string,
  calendar: PropTypes.string,

  /** Style props */
  labelAlignSelf: PropTypes.any,
  labelFlex: PropTypes.any,
};

export default Sidebar1;
