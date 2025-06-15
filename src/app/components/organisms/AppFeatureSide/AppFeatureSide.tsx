import AppContainer from "../../atoms/AppContainer/AppContainer";

interface AppFeatureSideProps {
  data?: any;
  openDesc?: boolean;
}

const AppFeatureSide: React.FC<AppFeatureSideProps> = (props) => {
  return (
    <AppContainer
      className={`bg-black/80 
          w-[80%] sm:w-[90%] md:w-[50%] lg:w-[40%]  xl:w-[30%] 
          h-full p-[20px] flex items-center justify-end absolute transition-all duration-500 ease-in-out  ${
            props.openDesc ? "right-0" : "right-[-100%]"
          }`}
    >
      <AppContainer className="flex flex-col gap-[20px] ">
        <h1 className="font-unbounded text-[18px]">Feature Apps</h1>
        <ul className="text-[14px] font-poppins list-disc pl-5 ">
          {props.data?.feature?.split("\n").map((line: string, idx: number) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </AppContainer>
    </AppContainer>
  );
};

export default AppFeatureSide;
