"use client";
import AppBgTemple from "@/app/components/organisms/AppBgTemple/AppBgTemple";
import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import AppCarousel from "@/app/components/atoms/AppCarousel/AppCarousel";
import AppButtonBounce from "@/app/components/molecules/AppButtonBounce/AppButtonBounce";
import AppHeadtitle from "@/app/components/molecules/AppHeadtitle/AppHeadtitle";
import AppProjectCard from "@/app/components/organisms/AppProjectCard/AppProjectCard";
import AppIconMedsos from "@/app/components/organisms/AppIconMedsos/AppIconMedsos";
import { useState } from "react";
import portfolio from "../../../../../portfolio.json";
import { useDispatch } from "react-redux";
import { setProjectId } from "@/app/redux/slices/projectSlices";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";

import ProjectView from "@/app/components/templates/projectView";

import AppProjectHeadLine from "@/app/components/organisms/AppProjectHeadLine/AppProjectHeadLine";
import AppIntroductionSide from "@/app/components/organisms/AppIntroductionSide/AppIntroductionSide";
import AppLanyard from "@/app/components/organisms/AppLanyard/AppLanyard";

const HomeView = () => {
  const dispatch = useDispatch();
  const [openCarousel, setOpenCarousel] = useState<boolean>(false);
  const [openSide, setOpenSide] = useState<boolean>(false);
  const [showCircle, setShowCircle] = useState<boolean>(false);
  const [projecthover, setProjectHover] = useState<number>(-1);

  const handleProjectClick = (index: number) => {
    dispatch(setProjectId(index));
    setShowCircle(true);
  };

  return (
    <>
      <AppContainer className="flex w-full h-full max-h-screen items-center justify-center relative overflow-hidden">
        <AppBgTemple />
        {showCircle && (
          <motion.div
            initial={{
              clipPath: "circle(0% at 50% 50%)",
            }}
            animate={{
              clipPath: "circle(150% at 50% 50%)",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute z-50 w-full h-screen overflow-hidden"
          >
            <ProjectView onclick={() => setShowCircle(false)} />
          </motion.div>
        )}

        {!openCarousel && !openSide ? (
          <AppHeadtitle
            title="My"
            subtitle="Portfolio"
            className="flex gap-[20px] items-stretch justify-start text-shadow-lg absolute top-20 left-10  animate__animated animate__bounceInLeft"
          />
        ) : (
          <></>
        )}
        {!openCarousel && <AppIconMedsos />}
        {/*  */}

        {!openSide && (
          <Icon
            icon="mdi:chevron-left"
            className="text-[50px] p-[10px] bg-white rounded-l-2xl  text-black cursor-pointer absolute right-0 "
            onClick={() => {
              setOpenSide(!openSide);
              setOpenCarousel(false);
            }}
          />
        )}
        <AppContainer
          className={`absolute flex justify-end items-center   ${
            openSide ? "w-full h-full " : "w-full"
          }`}
        >
          <AnimatePresence>
            {openSide && (
              <>
                <AppContainer className="w-full h-full">
                  <AppLanyard />
                </AppContainer>
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    duration: 0.5,
                  }}
                  className="absolute right-0 top-0 z-20 h-full flex items-center"
                >
                  <Icon
                    icon="mdi:chevron-left"
                    className={`text-[50px] p-[10px] bg-white rounded-l-2xl text-black cursor-pointer z-30 `}
                    onClick={() => {
                      setOpenSide(false);
                      setOpenCarousel(false);
                    }}
                  />

                  <AppContainer
                    className="bg-black/80 h-full flex flex-col gap-[20px] items-center justify-start 
                  sm:justify-start md:justify-center lg:justify-center xl:justify-center w-[80vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw]  
                  overflow-y-auto xl:w-[50vw] 
                  px-[20px] p-[40px] sm:py-[40px] md:py-0 lg:py-0 xl:py-0 "
                  >
                    <AppIntroductionSide />
                  </AppContainer>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </AppContainer>

        {/*  */}
        {openCarousel && (
          <AppContainer
            className="bg-black/50 w-full h-full flex flex-col 
          p-[20px] 
          gap-[20px] items-center 
          justify-start  sm:justify-start  md:justify-center lg:justify-center xl:justify-center
          overflow-y-auto overflow-x-hidden absolute "
          >
            <AppProjectHeadLine />

            <AppContainer className="w-full">
              <AppCarousel>
                {portfolio.map((data, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.3,
                        ease: "easeIn",
                      }}
                    >
                      <AppProjectCard
                        title={data.title}
                        subtitle={data.description}
                        imageUrl={data.thumbnail}
                        onMouseEnter={() => setProjectHover(index)}
                        onMouseLeave={() => setProjectHover(-1)}
                        onClick={() => handleProjectClick(index)}
                        className={
                          index !== projecthover && projecthover != -1
                            ? "opacity-40 "
                            : "opacity-100 "
                        }
                      />
                    </motion.div>
                  );
                })}
              </AppCarousel>
            </AppContainer>
          </AppContainer>
        )}
        {/*  */}
        {!openSide && (
          <AppButtonBounce onClick={() => setOpenCarousel(!openCarousel)} />
        )}
      </AppContainer>
    </>
  );
};

export default HomeView;
