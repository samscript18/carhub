const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[50px] h-[50px] border-4 border-primary-blue rounded-[50%] animate-spin"></div>
      <h1 className="text-[20px] leading-[24px] font-bold mt-6">
        Please Wait ...
      </h1>
    </div>
  );
};
export default Loading;
