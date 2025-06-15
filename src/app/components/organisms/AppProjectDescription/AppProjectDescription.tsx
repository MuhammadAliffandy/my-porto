import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import AppButton from "../../atoms/AppButton/AppButton";

interface AppProejctDescriptionProps {
  title: string;
  subtitle: string;
  openDesc: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const AppProjectDescription: React.FC<AppProejctDescriptionProps> = (props) => {
  return (
    <AppContainer className=" w-full sm:w-full md:w-[50%] lg:w-[50%]  xl:w-[50%]  h-full flex items-center justify-center relative ">
      <AppContainer
        className="flex flex-col gap-[20px] px-[40px] 
        items-center sm:items-center md:items-start lg:items-start xl:items-start 
        text-center sm:text-center md:text-left lg:text-left xl:text-left
         "
      >
        <h1 className="font-unbounded font-bold text-[42px] animate__animated animate__fadeInUp ">
          {" "}
          {props.title}
        </h1>
        <p className="  text-[18px] font-poppins w-[80%]  text-white text-shadow-black animate__animated animate__fadeInUp animate__delay-1s">
          {props.subtitle}
        </p>
        <AppButton
          text={props.openDesc ? "Close" : "Read More"}
          className="!w-[30%] rounded-full bg-white !text-black min-w-fit animate__animated animate__fadeInUp animate__delay-2s"
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
      </AppContainer>
    </AppContainer>
  );
};

export default AppProjectDescription;
