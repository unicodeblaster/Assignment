import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-[25px] px-0 text-left text-mini text-whitesmoke-100 font-outfit ${className}`}
    >
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
                loading="lazy"
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
            loading="lazy"
            alt=""
            src="/phstar.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
