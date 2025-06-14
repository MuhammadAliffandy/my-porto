"use client";
import AppBgTemple from "@/app/components/organisms/AppBgTemple/AppBgTemple";
import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";
import AppCarousel from "@/app/components/atoms/AppCarousel/AppCarousel";
import AppButtonBounce from "@/app/components/molecules/AppButtonBounce/AppButtonBounce";
import AppHeadtitle from "@/app/components/molecules/AppHeadtitle/AppHeadtitle";
import AppProjectCard from "@/app/components/organisms/AppProjectCard/AppProjectCard";
import AppIconMedsos from "@/app/components/organisms/AppIconMedsos/AppIconMedsos";
import { useState } from "react";
import { useRouter } from "next/navigation";
import portfolio from "../../../../../portfolio.json";
import { useDispatch } from "react-redux";
import { setProjectId } from "@/app/redux/slices/projectSlices";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import AppIconsList from "@/app/components/organisms/AppIconsList/AppIconsList";
import ProjectView from "@/app/components/templates/projectView";
import AppChip from "@/app/components/atoms/AppChip/AppChip";

const HomeView = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [openCarousel, setOpenCarousel] = useState<boolean>(false);
  const [openSide, setOpenSide] = useState<boolean>(false);
  const [showCircle, setShowCircle] = useState<boolean>(false);

  const handleProjectClick = (index: number) => {
    dispatch(setProjectId(index));
    setShowCircle(true);
  };

  return (
    <>
      <AppContainer className="flex w-full h-screen items-center justify-center relative overflow-hidden">
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

        {!openCarousel && (
          <AppHeadtitle
            title="My"
            subtitle="Portfolio"
            className="flex gap-[20px] items-stretch justify-start text-shadow-lg absolute top-20 left-10  animate__animated animate__bounceInLeft"
          />
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
                  overflow-y-scroll xl:w-[50vw] 
                  px-[20px] p-[40px] sm:py-[40px] md:py-0 lg:py-0 xl:py-0 "
                >
                  <motion.div
                    className="w-[80%] flex flex-col gap-[10px]"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h1 className="font-unbounded text-[32px]">
                      Hello, I am <strong>Fandy,</strong> <br />
                      Fullstack Engineer
                    </h1>
                    <p className="font-poppins text-[14px]">
                      I hold a degree in Information Technology from Jember
                      University and have over three years of experience in web
                      and mobile development. I have built responsive,
                      user-friendly applications using frameworks like Next.js,
                      React, and Flutter, integrated with backend APIs. My
                      experience includes freelance projects as well as working
                      in a company environment, where I contributed to scalable
                      and high-quality digital products with a strong focus on
                      user experience. I am eager to continue learning and
                      contribute to an innovative development team that values
                      collaboration and technology-driven solutions
                    </p>
                  </motion.div>

                  <motion.div
                    className="w-[80%] flex-col flex flex-wrap gap-[20px]"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 50, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AppIconsList />
                  </motion.div>
                </AppContainer>
              </motion.div>
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
                        onClick={() => handleProjectClick(index)}
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
      {/* <AppContainer className="w-full h-screen bg-black sm:flex md:flex xl:hidden lg:hidden flex items-center justify-center  ">
        <p className="font-poppins uppercase border-2 p-[20px] border-yellow-500">
          Only Desktop Mode
        </p>
      </AppContainer> */}
    </>
  );
};

export default HomeView;
