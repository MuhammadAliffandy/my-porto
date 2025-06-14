"use client";

import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import { useState, useEffect } from "react";
import AppButton from "@/app/components/atoms/AppButton/AppButton";
import portfolio from "../../../../portfolio.json";
import AppCarousel from "@/app/components/atoms/AppCarousel/AppCarousel";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ProjectViewProps {
  onclick?: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = (props) => {
  const { push } = useRouter();
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [circleReveal, setCircleReveal] = useState<boolean>(false);
  const projectId: number = useSelector((state: any) => state.project.value);

  return (
    <AppContainer className="relative w-full h-screen bg-black overflow-y-hidden overflow-x-hidden ">
      {circleReveal ? (
        <motion.div
          initial={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          animate={{ clipPath: "polygon(45% 0%, 100% 0%, 55% 100%, 0% 100%)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute w-full h-full bg-[url('/images/myth.jpg')] bg-cover bg-center"
        />
      ) : (
        <AppContainer className="w-full h-full bg-[url('/images/myth.jpg')] bg-cover bg-center absolute " />
      )}
      <AppContainer
        onClick={() => {
          if (openDesc) {
            setOpenDesc(false);
          }
        }}
        className="w-full h-screen flex
        flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 
        items-center 
        justify-start sm:justify-start md:justify-center lg:justify-center  xl:justify-center 
      bg-black/40 bg-cover bg-no-repeat absolute overflow-hidden py-[20px] overflow-y-auto"
      >
        <Icon
          icon={"mdi:arrow-back"}
          className="text-black bg-white rounded-full text-[30px] p-[4px] absolute z-30 top-3 left-3 cursor-pointer"
          onClick={props.onclick}
        />
        {/*  */}
        <AppContainer className=" w-full sm:w-full md:w-[50%] lg:w-[50%]  xl:w-[50%]  h-full flex items-center justify-center relative ">
          <AppContainer
            className="flex flex-col gap-[20px] px-[40px] 
          items-center sm:items-center md:items-start lg:items-start xl:items-start 
          text-center sm:text-center md:text-left lg:text-left xl:text-left
           "
          >
            <h1 className="font-unbounded font-bold text-[42px] animate__animated animate__fadeInUp ">
              {" "}
              {portfolio[projectId].title}
            </h1>
            <p className="  text-[18px] font-poppins w-[80%]  text-white text-shadow-black animate__animated animate__fadeInUp animate__delay-1s">
              {portfolio[projectId].description}
            </p>
            <AppButton
              text={openDesc ? "Close" : "Read More"}
              className="!w-[30%] rounded-full bg-white !text-black min-w-fit animate__animated animate__fadeInUp animate__delay-2s"
              onClick={() => setOpenDesc((openDesc) => !openDesc)}
              onMouseEnter={() => setCircleReveal(true)}
              onMouseLeave={() => setCircleReveal(false)}
            />
          </AppContainer>
        </AppContainer>
        {/*  */}
        <AppContainer className=" w-full sm:w-full md:w-[50%] lg:w-[50%]  xl:w-[50%] h-full flex flex-col gap-[20px] items-center justify-center  ">
          <AppContainer
            onMouseEnter={() => setCircleReveal(true)}
            onMouseLeave={() => setCircleReveal(false)}
            className="w-full h-max animate__animated animate__fadeInUp animate__delay-2s "
          >
            <AppCarousel
              settings={{
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: portfolio[projectId].type == "web" ? 1 : 4,
                slidesToScroll: portfolio[projectId].type == "web" ? 1 : 4,
              }}
            >
              {portfolio[projectId].images.map((image, index) => {
                return (
                  <AppContainer key={index} className=" w-full h-full">
                    <Image
                      src={portfolio[projectId].images[index]}
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

        {/*  */}
      </AppContainer>
      <AppContainer
        className={`bg-black/80 
          w-[80%] sm:w-[80%] md:w-[50%] lg:w-[40%]  xl:w-[30%] 
          h-full p-[20px] flex items-center justify-end absolute transition-all duration-500 ease-in-out  ${
            openDesc ? "right-0" : "right-[-100%]"
          }`}
      >
        <AppContainer className="flex flex-col gap-[20px]">
          <h1 className="font-unbounded text-[18px]">Feature Apps</h1>
          <ul className="text-[14px] font-poppins list-disc pl-5 ">
            {portfolio[projectId].feature.split("\n").map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </AppContainer>
      </AppContainer>
    </AppContainer>
  );
};

export default ProjectView;
