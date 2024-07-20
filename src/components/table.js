import TextCell from "./text-cell";
import PropTypes from "prop-types";

const Table = ({ className = "" }) => {
  return (
    <section
      className={`mt-[-102px] w-[1056px] bg-gray1-300 flex flex-col items-start justify-start pt-[43px] pb-6 pr-9 pl-0 box-border gap-[2px] max-w-[calc(100%_-_328px)] text-left text-mini text-darkseagreen font-outfit mq450:pt-7 mq450:pb-5 mq450:box-border mq450:max-w-full mq750:pt-5 mq750:box-border ${className}`}
    >
      <div className="w-[58px] h-[9px] flex flex-row items-start justify-start text-smi">
        <a className="mt-[-11px] [text-decoration:none] h-4 flex-1 relative leading-[16px] font-medium text-[inherit] inline-block">
          To Do
        </a>
        <img
          className="mt-[-15px] h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/caretdown1.svg"
        />
      </div>
      <div className="self-stretch bg-darkslategray flex flex-col items-start justify-start pt-14 pb-4 pr-[3px] pl-5 gap-[48px] text-m3-white border-t-[1.5px] border-solid border-darkolivegreen mq1050:gap-[24px]">
        <a className="[text-decoration:none] w-[74px] relative leading-[20px] text-[inherit] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
          Add A Task
        </a>
        <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-lightgray mq750:flex-wrap">
          <div className="w-[124px] flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/claritynotificationline1.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/birepeat1.svg"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                loading="lazy"
                alt=""
                src="/iconoircalendar1.svg"
              />
            </div>
          </div>
          <div className="rounded-lg bg-seagreen-300 flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap">
            <a className="[text-decoration:none] relative leading-[20px] font-medium text-[inherit] inline-block min-w-[72px]">
              ADD TASK
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[644px] flex flex-row flex-wrap items-start justify-start relative gap-[28px_26.5px] max-w-full text-whitesmoke-100 mq750:h-auto mq750:min-h-[644]">
        <TextCell buyGroceries="Buy groceries" phstar="/phstar1.svg" />
        <TextCell
          buyGroceries="Finish project report"
          phstar="/phstar-11.svg"
          propLeft="348px"
          propGap="-124px"
          propTop="0px"
        />
        <TextCell
          buyGroceries="Call the bank"
          phstar="/phstar1.svg"
          propLeft="696px"
          propGap="-100px"
          propTop="0px"
        />
        <TextCell
          buyGroceries="Schedule dentist appointment"
          phstar="/phstar.svg"
          propLeft="0px"
          propGap="-155.5px"
          propTop="175px"
        />
        <div className="w-80 !m-[0] absolute top-[175px] left-[348px] box-border flex flex-row items-center justify-between py-[47px] px-0 gap-[-116px] border-[1.5px] border-solid border-darkolivegreen">
          <div className="w-[380px] flex flex-row items-center justify-start py-0 pr-[213px] pl-0 box-border max-w-[120%] shrink-0 [row-gap:20px] mq750:flex-wrap">
            <div className="flex flex-col items-center justify-center p-1">
              <div className="w-10 h-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border">
                <div className="h-[18px] w-[18px] relative rounded-sm box-border border-[2px] border-solid border-gainsboro-100" />
              </div>
            </div>
            <div className="flex-1 relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[77px]">
              Plan weekend trip
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/phstar1.svg"
          />
        </div>
        <div className="w-full !m-[0] absolute top-[350px] left-[0px] flex flex-col items-start justify-start py-[25px] px-0 box-border max-w-full">
          <div className="w-[74px] relative leading-[20px] inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            Completed
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-0.5 pb-1 pr-8 pl-0 gap-[20px] border-t-[1.5px] border-solid border-darkolivegreen">
            <div className="w-[131px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start p-1">
                <div className="h-10 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative">
                  <div className="h-[18px] w-[18px] relative rounded-sm bg-seagreen-200" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
                    alt=""
                    src="/check-small.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="self-stretch relative [text-decoration:line-through] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Read a book
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/phstar.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-0.5 pb-1 pr-8 pl-0 gap-[20px] border-t-[1.5px] border-solid border-darkolivegreen">
            <div className="w-[154px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start p-1">
                <div className="h-10 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative">
                  <div className="h-[18px] w-[18px] relative rounded-sm bg-seagreen-200" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
                    alt=""
                    src="/check-small.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="self-stretch relative [text-decoration:line-through] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Clean the house
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/phstar.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-0.5 pb-1 pr-8 pl-0 gap-[20px] border-t-[1.5px] border-solid border-darkolivegreen">
            <div className="w-[191px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start p-1">
                <div className="h-10 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative">
                  <div className="h-[18px] w-[18px] relative rounded-sm bg-seagreen-200" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
                    alt=""
                    src="/check-small.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="self-stretch relative [text-decoration:line-through] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Prepare presentation
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/phstar.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between pt-0.5 pb-1 pr-8 pl-0 gap-[20px] border-t-[1.5px] border-solid border-darkolivegreen">
            <div className="w-[131px] flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start p-1">
                <div className="h-10 w-10 rounded-81xl flex flex-row items-center justify-center p-[11px] box-border relative">
                  <div className="h-[18px] w-[18px] relative rounded-sm bg-seagreen-200" />
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] z-[1]"
                    alt=""
                    src="/check-small.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="self-stretch relative [text-decoration:line-through] leading-[20px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Update blog
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/phstar.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Table.propTypes = {
  className: PropTypes.string,
};

export default Table;
