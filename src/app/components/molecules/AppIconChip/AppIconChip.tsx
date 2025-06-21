import AppContainer from "../../atoms/AppContainer/AppContainer";
import Image from "next/image";
interface AppIconChipProps {
  text: string;
  src: string;
}

const AppIconChip: React.FC<AppIconChipProps> = (props) => {
  return (
    <AppContainer className="flex items-center gap-[10px] min-w-fit mx-4">
      <Image src={props.src} width={25} height={25} alt="icon" />
      <p className="text-white font-unbounded min-w-fit text-[18px]">
        {props.text}
      </p>
    </AppContainer>
  );
};

export default AppIconChip;
