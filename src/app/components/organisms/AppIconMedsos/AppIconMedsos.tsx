import AppContainer from "../../atoms/AppContainer/AppContainer";
import { Icon } from "@iconify/react";
const AppIconMedsos = () => {
  return (
    <AppContainer className="flex items-center justify-center gap-[10px] absolute right-10 top-20">
      <a href="https://www.linkedin.com/in/muhammad-aliffandy-02868a221/">
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:linkedin"
        />
      </a>
      <a href="https://github.com/MuhammadAliffandy">
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:github"
        />
      </a>
      <a href="https://www.instagram.com/aliffandy/">
        <Icon
          className="text-[40px] p-[10px] bg-white rounded-full text-black cursor-pointer"
          icon="mdi:instagram"
        />
      </a>
    </AppContainer>
  );
};

export default AppIconMedsos;
