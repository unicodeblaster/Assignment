import { useMemo } from "react";
import PropTypes from "prop-types";

const TextCell1 = ({
  className = "",
  buyGroceries,
  phstar,
  propGap,
  propAlignSelf,
  propWidth,
}) => {
  const textCellStyle = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propGap, propAlignSelf, propWidth]);

  return (
    <div
      className={`self-stretch box-border flex flex-row items-center justify-between pt-3.5 pb-4 pr-8 pl-0 max-w-full gap-[20px] text-left text-mini text-whitesmoke-100 font-outfit border-t-[1.5px] border-solid border-darkolivegreen ${className}`}
      style={textCellStyle}
    >
      <div className="w-[365.5px] flex flex-row flex-wrap items-center justify-start py-0 pr-[227px] pl-0 box-border max-w-[calc(100%_-_44px)] [row-gap:20px] mq1050:pr-5 mq1050:box-border">
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
        className="h-6 w-6 relative overflow-hidden shrink-0"
        alt=""
        src={phstar}
      />
    </div>
  );
};

TextCell1.propTypes = {
  className: PropTypes.string,
  buyGroceries: PropTypes.string,
  phstar: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TextCell1;
