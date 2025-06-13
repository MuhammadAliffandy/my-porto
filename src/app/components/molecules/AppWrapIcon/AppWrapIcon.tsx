import AppContainer from "../../atoms/AppContainer/AppContainer";

interface AppWrapIconsProps {
  title: string;
  children: React.ReactNode;
}

const AppWrapIcons: React.FC<AppWrapIconsProps> = (props) => {
  return (
    <AppContainer className="flex flex-col gap-[10px]">
      <h1 className="font-unbounded text-[14px] font-bold">{props.title}</h1>
      <AppContainer className="flex flex-wrap w-full gap-[10px]">
        {props.children}
      </AppContainer>
    </AppContainer>
  );
};

export default AppWrapIcons;
