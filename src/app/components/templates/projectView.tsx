"use client";

import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import { useState, useEffect } from "react";
import portfolio from "../../../../portfolio.json";
import iconPortofolio from "../../../../icons.json";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import AppFeatureSide from "@/app/components/organisms/AppFeatureSide/AppFeatureSide";
import AppProjectDescription from "../organisms/AppProjectDescription/AppProjectDescription";
import AppImgprojectContainer from "../organisms/AppImgProjectContainer/AppImgProjectContainer";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AppIconChip from "../molecules/AppIconChip/AppIconChip";

interface ProjectViewProps {
  onclick?: () => void;
}

const ProjectView: React.FC<ProjectViewProps> = (props) => {
  const [openDesc, setOpenDesc] = useState<boolean>(false);
  const [circleReveal, setCircleReveal] = useState<boolean>(false);
  const projectId: number = useSelector((state: any) => state.project.value);
  const [iconData, setIconData] = useState<object[]>([]);

  const handleGetIcons = () => {
    const icons: any[] = iconPortofolio.filter(
      (data) => portfolio[projectId].icons.indexOf(data.id) !== -1
    );

    setIconData(icons);
  };

  useEffect(() => {
    handleGetIcons();
  }, [projectId]);

  return (
    <AppContainer className="relative w-full h-full max-h-screen bg-black overflow-y-hidden overflow-x-hidden ">
      <Icon
        icon={"mdi:arrow-back"}
        className="text-black bg-white rounded-full text-[30px] p-[4px] absolute z-90 top-3 left-3 cursor-pointer"
        onClick={props.onclick}
      />

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
      bg-black/40 bg-cover bg-no-repeat absolute overflow-hidden py-[20px] overflow-y-auto xl:overflow-y-hidden "
      >
        {/*  */}
        <AppProjectDescription
          openDesc={openDesc}
          title={portfolio[projectId].title}
          subtitle={portfolio[projectId].description}
          onClick={() => setOpenDesc((openDesc) => !openDesc)}
          onMouseEnter={() => setCircleReveal(true)}
          onMouseLeave={() => setCircleReveal(false)}
        />
        {/*  */}
        <AppImgprojectContainer
          data={portfolio[projectId]}
          onMouseEnter={() => setCircleReveal(true)}
          onMouseLeave={() => setCircleReveal(false)}
        />

        {/*  */}
      </AppContainer>
      <AppFeatureSide data={portfolio[projectId]} openDesc={openDesc} />
      <AppContainer className="flex items-center gap-[40px] w-full max-h-[60px] h-[100px] bg-black absolute bottom-0 ">
        <Marquee>
          {iconData.map((data: any) => {
            return (
              <AppIconChip key={data.id} text={data.name} src={data.src} />
            );
          })}
        </Marquee>
      </AppContainer>
    </AppContainer>
  );
};

export default ProjectView;
