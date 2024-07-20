import { useMemo } from "react";
import PropTypes from "prop-types";

const TaskFooter = ({ className = "", propOverflowX }) => {
  const taskFooterStyle = useMemo(() => {
    return {
      overflowX: propOverflowX,
    };
  }, [propOverflowX]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between pt-5 px-[13px] pb-[21.3px] gap-[20px] text-left text-mini text-darkgray font-outfit border-t-[1px] border-solid border-seagreen-500 mq1050:flex-wrap ${className}`}
      style={taskFooterStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[6.1px] px-0 pb-0">
        <div className="overflow-hidden flex flex-row items-center justify-start w-3.5 h-3.5">
          <img
            className="h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="w-[99px] flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0 box-border">
        <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
          Created Today
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start">
        <img
          className="h-[26.3px] w-[23.3px] relative"
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
    </div>
  );
};

TaskFooter.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propOverflowX: PropTypes.any,
};

export default TaskFooter;
