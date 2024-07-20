import TextCell1 from "./text-cell1";
import TaskFooter from "./task-footer";
import PropTypes from "prop-types";

const MainContent1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[452px] bg-gray1-100 flex flex-col items-end justify-start pt-14 px-0 pb-[33px] box-border max-w-[calc(100%_-_943px)] shrink-0 z-[1] text-left text-mini text-gainsboro-200 font-outfit lg:hidden lg:max-w-full mq450:pt-[23px] mq450:pb-5 mq450:box-border mq1050:pt-9 mq1050:pb-[21px] mq1050:box-border ${className}`}
    >
      <div className="w-[404px] hidden max-w-full" />
      <TextCell1
        buyGroceries="Buy groceries"
        phstar="/phstar-9.svg"
        propGap="-17.5px"
        propAlignSelf="unset"
        propWidth="404px"
      />
      <div className="w-[404px] box-border flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] max-w-full border-t-[1.5px] border-solid border-darkolivegreen">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/materialsymbolslightadd.svg"
        />
        <div className="w-[61px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
            Add Step
          </div>
        </div>
      </div>
      <div className="w-[404px] h-[670px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-1 pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/claritynotificationline-1.svg"
          />
          <div className="w-[90px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Set Reminder
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
            alt=""
            src="/iconoircalendar-1.svg"
          />
          <div className="w-[94px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Add Due Date
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-3.5 px-[5px] pb-4 gap-[24px] border-t-[1.5px] border-solid border-darkolivegreen">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/birepeat-1.svg"
          />
          <div className="w-[49px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
              Repeat
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-4 px-[42px] pb-[18px] text-gray11-200 border-t-[1.5px] border-solid border-darkolivegreen">
          <div className="w-[70px] relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            Add Notes
          </div>
          <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
        </div>
      </div>
      <TaskFooter propOverflowX="auto" />
    </div>
  );
};

MainContent1.propTypes = {
  className: PropTypes.string,
};

export default MainContent1;
