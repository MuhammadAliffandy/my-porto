import AppContainer from "../../atoms/AppContainer/AppContainer";
import AppHeadtitle from "../../molecules/AppHeadtitle/AppHeadtitle";
import AppChip from "../../atoms/AppChip/AppChip";

const AppProjectHeadLine = () => {
  return (
    <AppContainer
      className="self-start w-full flex
  flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 
  items-end justify-between gap-[20px] "
    >
      <AppHeadtitle
        title="My"
        subtitle="Projects"
        className="self-start flex gap-[20px] items-stretch justify-start text-shadow-lg  animate__animated  animate__animated animate__fadeInLeft animate__delay-1s "
      />
      <AppContainer className="flex items-center gap-[10px] flex-wrap">
        <AppChip
          text="3D Phone UI"
          href="https://3d-phone.netlify.app/"
          className="animate__animated animate__fadeInRight animate__delay-1s"
        />
        <AppChip
          text="UI Animation Scroll"
          href="https://cartoon-ui.netlify.app/"
          className="animate__animated animate__fadeInRight animate__delay-2s"
        />
        <AppChip
          text="Hard Layout UI"
          href="https://anime-ui-apps.netlify.app/"
          className="animate__animated animate__fadeInRight animate__delay-3s"
        />
      </AppContainer>
    </AppContainer>
  );
};

export default AppProjectHeadLine;
