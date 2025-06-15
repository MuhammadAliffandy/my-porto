import AppCarousel from "../../atoms/AppCarousel/AppCarousel";
import AppContainer from "../../atoms/AppContainer/AppContainer";
import Image from "next/image";

interface AppImgprojectContainerProps {
  data: any;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}
const AppImgprojectContainer: React.FC<AppImgprojectContainerProps> = (
  props
) => {
  return (
    <AppContainer className=" w-full sm:w-full md:w-[50%] lg:w-[50%]  xl:w-[50%] h-full flex flex-col gap-[20px] items-center justify-center  ">
      <AppContainer
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        className="w-full h-max animate__animated animate__fadeInUp animate__delay-2s "
      >
        <AppCarousel
          settings={{
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: props.data.type == "web" ? 1 : 4,
            slidesToScroll: props.data.type == "web" ? 1 : 4,
          }}
        >
          {props.data.images.map((image: string, index: number) => {
            return (
              <AppContainer key={index} className=" w-full h-full">
                <Image
                  src={props.data.images[index]}
                  width={500}
                  height={200}
                  alt={`Project Image ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </AppContainer>
            );
          })}
        </AppCarousel>
      </AppContainer>
    </AppContainer>
  );
};

export default AppImgprojectContainer;
