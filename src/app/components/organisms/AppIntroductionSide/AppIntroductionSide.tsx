import { motion } from "framer-motion";
import AppIconsList from "@/app/components/organisms/AppIconsList/AppIconsList";

const AppIntroductionSide = () => {
  return (
    <>
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
          I hold a degree in Information Technology from Jember University and
          have over three years of experience in web and mobile development. I
          have built responsive, user-friendly applications using frameworks
          like Next.js, React, and Flutter, integrated with backend APIs. My
          experience includes freelance projects as well as working in a company
          environment, where I contributed to scalable and high-quality digital
          products with a strong focus on user experience. I am eager to
          continue learning and contribute to an innovative development team
          that values collaboration and technology-driven solutions
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
    </>
  );
};

export default AppIntroductionSide;
