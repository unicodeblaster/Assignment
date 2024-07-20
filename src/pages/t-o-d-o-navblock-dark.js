import FrameComponent from "../components/frame-component";
import Table from "../components/table";

const TODONavblockDark = () => {
  return (
    <div className="w-full relative bg-gray1-200 overflow-hidden flex flex-col items-start justify-start pt-0 px-12 pb-[122px] box-border min-h-[900px] leading-[normal] tracking-[normal] mq450:pl-6 mq450:pr-6 mq450:box-border">
      <header className="self-stretch h-14 bg-gray1-300 flex flex-row items-center justify-between pt-3 px-0 pb-0 box-border sticky top-[0] z-[99] gap-[20px] max-w-full text-left text-5xl text-seagreen-100 font-sen">
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/menu1.svg"
          />
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/logomark@2x.png"
            />
            <h2 className="m-0 h-4 relative text-inherit tracking-[-0.04em] leading-[100%] font-bold font-inherit inline-block min-w-[54px]">
              DoIt
            </h2>
          </div>
        </div>
        <div className="w-[446.3px] flex flex-row items-center justify-end py-0 pr-0 pl-[326px] box-border gap-[24px] max-w-full mq750:pl-5 mq750:box-border">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/search1.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/appgrid2.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/phsun1.svg"
          />
        </div>
        <img
          className="h-0 w-[calc(100%_+_192px)] absolute !m-[0] right-[-96px] bottom-[0px] left-[-96px] max-w-full overflow-hidden"
          alt=""
          src="/divider.svg"
        />
      </header>
      <main className="w-[1534px] h-[853px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[3px] px-0 pb-0 box-border gap-[48px] max-w-full mq750:h-auto mq1050:gap-[24px]">
        <FrameComponent />
        <Table />
      </main>
    </div>
  );
};

export default TODONavblockDark;
