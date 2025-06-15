import { Icon } from "@iconify/react/dist/iconify.js";
import AppContainer from "../../atoms/AppContainer/AppContainer";
import AppHeadline from "../../molecules/AppHeadline/AppHeadline";

interface AppProjectCardProps {
  className?: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AppProjectCard: React.FC<AppProjectCardProps> = (props) => {
  return (
    <AppContainer
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      className={`${props.className} bg-white  p-[15px] rounded-xl flex flex-col gap-[10px] text-black w-full  transition transform hover:scale-110 duration-300 ease-in-out `}
    >
      <AppContainer className="w-full h-[200px] relative">
        <AppContainer
          className="w-full h-full mb-[15px] cursor-pointer bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <Icon
          onClick={props.onClick}
          icon="fluent:open-16-filled"
          className="absolute top-2 right-2 text-white text-[35px] p-[4px] bg-black rounded-xl cursor-pointer"
        />
      </AppContainer>
      <AppHeadline
        className="items-start"
        title={props.title || "Project Title"}
        titleClassName="text-[24px] font-bold text-black line-clamp-1 "
        subtitle={
          props.subtitle ||
          "At eligendi voluptate qui unde. Asperiores unde et dolor reprehenderit delectus repellat asperiores. Consequatur et non vitae. Consequatur ut aspernatur veniam debitis. Quidem aut necessitatibus rerum dolor et architecto. Maxime ducimus et."
        }
        subtitleClassName="text-[14px] line-clamp-3 text-gray-600"
      />
    </AppContainer>
  );
};

export default AppProjectCard;
