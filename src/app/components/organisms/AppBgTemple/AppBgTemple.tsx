"use client";
import React, { useState } from "react";
import Image from "next/image";
import AppContainer from "@/app/components/atoms/AppContainer/AppContainer";

const AppBgTemple = () => {
  interface Position {
    x: number;
    y: number;
  }

  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [rightUp, setRightUp] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    setPosition({ x, y });

    if (x > 1000 && y < 400) {
      setRightUp(true);
    } else {
      setRightUp(false);
    }
  };

  return (
    <AppContainer
      onMouseMove={handleMouseMove}
      className="h-screen w-full flex flex-col items-center justify-center bg-[url('/images/japan-04.svg')] bg-cover relative"
    >
      <AppContainer
        style={{
          bottom: `${-60 - position.y / 30}px`,
          right: `${-50 - position.x / 20}px`,
          left: `${50 - position.x / 20}px`,
          transition: "all  ease-out", // Smooth transition
        }}
        className="h-full w-full bg-[url('/images/japan-02.svg')] absolute"
      />
      <AppContainer
        style={{
          bottom: `0px`,
          transition: "all  ease-out", // Smooth transition
        }}
        className="h-full w-full bg-[url('/images/japan-01.svg')] bg-cover absolute"
      />
      <Image
        alt="samurai"
        width={1980}
        height={1080}
        src={"/images/japan-03.svg"}
        style={{
          bottom: `${-200 + position.y / 20}px`,
          right: `${-50 - position.x / 20}px`,
          transition: "all  ease-out", // Smooth transition
        }}
        className="absolute w-[80%]"
      />
    </AppContainer>
  );
};

export default AppBgTemple;
