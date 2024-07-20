import { useMemo } from "react";
import PropTypes from "prop-types";

const TextCell = ({
  className = "",
  buyGroceries,
  phstar,
  propLeft,
  propGap,
  propTop,
}) => {
  const textCell1Style = useMemo(() => {
    return {
      left: propLeft,
      gap: propGap,
      top: propTop,
    };
  }, [propLeft, propGap, propTop]);

  return (
    <div
      className={`w-80 !m-[0] absolute top-[0px] left-[0px] box-border flex flex-row items-center justify-between py-[47px] px-0 gap-[-101.5px] text-left text-mini text-whitesmoke-100 font-outfit border-[1.5px] border-solid border-darkolivegreen ${className}`}
      style={textCell1Style}
    >
      <div className="w-[365.5px] flex flex-row items-center justify-start py-0 pr-[227px] pl-0 box-border max-w-[116%] shrink-0 [row-gap:20px] mq750:flex-wrap">
        <div className="flex flex-col items-center justify-center p-1">
          <div className="w-10 h-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border">
            <div className="h-[18px] w-[18px] relative rounded-sm box-border border-[2px] border-solid border-gainsboro-100" />
          </div>
        </div>
        <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[58px]">
          {buyGroceries}
        </div>
      </div>
      <img
        className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
        alt=""
        src={phstar}
      />
    </div>
  );
};

TextCell.propTypes = {
  className: PropTypes.string,
  buyGroceries: PropTypes.string,
  phstar: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propGap: PropTypes.any,
  propTop: PropTypes.any,
};

export default TextCell;
