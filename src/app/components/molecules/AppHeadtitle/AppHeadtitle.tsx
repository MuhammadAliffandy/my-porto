import AppContainer from "../../atoms/AppContainer/AppContainer";

interface AppHeadtitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const AppHeadtitle: React.FC<AppHeadtitleProps> = (props) => {
  return (
    <AppContainer
      className={
        props.className ||
        `flex gap-[20px] items-stretch justify-start text-shadow-lg absolute top-20 left-10 `
      }
    >
      <AppContainer className="w-[4px] h-auto bg-white" />

      <h1 className="text-white font-bold text-[50px] leading-none  !font-playfair ">
        {props.title}
        <br></br>
        {props.subtitle}
      </h1>
    </AppContainer>
  );
};

export default AppHeadtitle;
