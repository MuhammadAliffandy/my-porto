import AppContainer from "../../atoms/AppContainer/AppContainer";
import { Icon } from "@iconify/react";

interface AppButtonBounceProps {
  onClick?: () => void;
}

const AppButtonBounce: React.FC<AppButtonBounceProps> = (props) => {
  return (
    <AppContainer
      onClick={props.onClick}
      className="w-max h-max flex flex-col justify-center items-center gap-[2px] bottom-2 absolute animate-bounce cursor-pointer"
    >
      <AppContainer className="w-[150px] h-[4px] bg-white  shadow-xl " />
      <Icon icon="mdi:chevron-down" className="text-white text-[30px] " />
    </AppContainer>
  );
};

export default AppButtonBounce;
