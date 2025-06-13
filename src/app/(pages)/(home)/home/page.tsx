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

const HomeView = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [openCarousel, setOpenCarousel] = useState<boolean>(false);
  const [openSide, setOpenSide] = useState<boolean>(false);

  const handleProjectClick = (index: number) => {
    push("/project");
    dispatch(setProjectId(index));
  };

  return (
    <AppContainer className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      <AppBgTemple />
      {!openCarousel && <AppHeadtitle title="My" subtitle="Portfolio" />}
      <AppIconMedsos />
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

              <div className="bg-black/50 h-full flex flex-col gap-[20px] items-center justify-center w-[50vw] px-[20px]">
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
                    experience includes freelance projects as well as working in
                    a company environment, where I contributed to scalable and
                    high-quality digital products with a strong focus on user
                    experience. I am eager to continue learning and contribute
                    to an innovative development team that values collaboration
                    and technology-driven solutions
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AppContainer>

      {/*  */}
      {openCarousel && (
        <AppContainer className="bg-black/50 w-full h-full flex flex-col p-[20px] gap-[20px] items-center justify-center absolute ">
          <AppHeadtitle
            title="My"
            subtitle="Projects"
            className="self-start flex gap-[20px] items-stretch justify-start text-shadow-lg"
          />

          <AppContainer className="w-full">
            <AppCarousel>
              {portfolio.map((data, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Mulai dengan opacity 0 dan posisi sedikit ke bawah
                    animate={{ opacity: 1, y: 0 }} // Animasi ke opacity 1 dan posisi normal
                    transition={{
                      duration: 0.5, // Durasi animasi
                      delay: index * 0.2, // Delay berdasarkan indeks
                      ease: "easeOut", // Easing animasi
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
  );
};

export default HomeView;
