import AppContainer from "../../atoms/AppContainer/AppContainer";
import { Icon } from "@iconify/react";
const AppIconMedsos = () => {
  return (
    <AppContainer
      className="flex items-center justify-center gap-[10px] absolute 
      left-10 sm:left-auto md:left-auto lg:left-auto xl:left-auto 
      right-auto sm:right-10 md:right-10 lg:right-10 xl:right-10 
      top-50 sm:top-20 md:top-20 lg:top-20 xl:top-20"
    >
      <a
        href="https://www.linkedin.com/in/muhammad-aliffandy-02868a221/"
        className="animate__animated animate__bounceIn"
      >
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:linkedin"
        />
      </a>
      <a
        href="https://github.com/MuhammadAliffandy"
        className="animate__animated animate__bounceIn animate__delay-1s"
      >
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:github"
        />
      </a>
      <a
        href="https://www.instagram.com/aliffandy/"
        className="animate__animated animate__bounceIn animate__delay-2s"
      >
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:instagram"
        />
      </a>
    </AppContainer>
  );
};

export default AppIconMedsos;
