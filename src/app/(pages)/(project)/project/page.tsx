"use client";
import AppBgTemple from "@/app/components/organisms/AppBgTemple/AppBgTemple";
import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import { useState, useEffect } from "react";
import AppButton from "@/app/components/atoms/AppButton/AppButton";
import portfolio from "../../../../../portfolio.json";
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
  const projectId: number = useSelector((state: any) => state.project.value);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    setPosition({ x, y });
  };

  return (
    <AppContainer
      onMouseMove={handleMouseMove}
      className="w-full h-screen flex items-center justify-center  bg-[url('/images/jpn-night.svg')] bg-cover bg-no-repeat relative overflow-hidden"
    >
      <Icon
        icon={"mdi:arrow-back"}
        className="text-black bg-white rounded-full text-[30px] p-[4px] absolute z-30 top-3 left-3 cursor-pointer"
        onClick={props.onclick}
      />
      {/*  */}
      <AppContainer className="w-[50%] h-full flex items-center justify-center relative">
        <AppContainer className="flex flex-col gap-[20px] px-[40px]">
          <h1 className="font-unbounded font-bold text-[42px]">
            {" "}
            {portfolio[projectId].title}
          </h1>
          <p className="  text-[18px] font-poppins w-[80%]  text-left text-white text-shadow-black">
            {portfolio[projectId].description}
          </p>
          <AppButton
            text="Read More"
            className="!w-[30%] rounded-full"
            onClick={() => setOpenDesc((openDesc) => !openDesc)}
          />
        </AppContainer>
      </AppContainer>
      {/*  */}
      <AppContainer className=" w-[50%] h-full flex flex-col gap-[20px] items-center justify-center  ">
        <AppContainer className="w-full h-max  ">
          <AppCarousel
            settings={{
              autoplay: true,
              autoplaySpeed: 3000,
              arrows: false,
              infinite: true,
              speed: 500,
              slidesToShow: portfolio[projectId].type == "web" ? 1 : 4,
              slidesToScroll: portfolio[projectId].type == "web" ? 1 : 4,
              centerMode: true,
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
      <AppContainer
        className={`bg-black/80 w-[30%] h-full p-[20px] flex items-center justify-end absolute transition-all duration-500 ease-in-out  ${
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
