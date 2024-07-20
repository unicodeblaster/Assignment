import { useMemo } from "react";
import PropTypes from "prop-types";

const Sidebar = ({ className = "", propAlignSelf, propFlex }) => {
  const sidebar1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start text-left text-mini text-whitesmoke-100 font-outfit ${className}`}
      style={sidebar1Style}
    >
      <div className="self-stretch bg-gray1-300 overflow-hidden flex flex-col items-start justify-start py-6 px-0">
        <div className="self-stretch rounded-lg bg-gray1-300 flex flex-row items-center justify-start py-2 pr-[134px] pl-4 gap-[16px] whitespace-nowrap">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/menu-2.svg"
          />
          <div className="relative leading-[20px] font-medium inline-block min-w-[50px]">
            Add list
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Sidebar;
