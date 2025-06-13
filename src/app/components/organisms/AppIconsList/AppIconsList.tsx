import AppWrapIcons from "../../molecules/AppWrapIcon/AppWrapIcon";
import Image from "next/image";

const AppIconsList = () => {
  return (
    <>
      {" "}
      <AppWrapIcons title="Languanges">
        <Image src="/icons/4.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/8.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/11.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/typeScript.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/26.svg" width={45} height={45} alt="icon" />
        <Image
          src="/icons/dart-original.svg"
          width={45}
          height={45}
          alt="icon"
        />
      </AppWrapIcons>
      <AppWrapIcons title="Frameworks">
        <Image src="/icons/35.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/18.svg" width={45} height={45} alt="icon" />
        <Image
          src="/icons/flutter-original.svg"
          width={45}
          height={45}
          alt="icon"
        />

        <Image
          src="/icons/nextjs-original.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image
          src="/icons/15.svg"
          width={45}
          height={45}
          alt="icon"
          className="bg-white p-[5px] rounded-lg shadow-md"
        />
        <Image src="/icons/29.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/39.svg" width={45} height={45} alt="icon" />

        <Image
          src="/icons/express-original-wordmark.svg"
          width={45}
          height={45}
          alt="icon"
          className="bg-white p-[5px] rounded-lg shadow-md"
        />
        <Image src="/icons/sass.svg" width={45} height={45} alt="icon" />
        <Image
          src="/icons/materialui-original.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image
          src="/icons/tailwindcss-plain.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image
          src="/icons/django-plain-wordmark.svg"
          width={45}
          height={45}
          alt="icon"
          className="bg-white p-[5px] rounded-lg shadow-md"
        />
        <Image
          src="/icons/flask-original.svg"
          width={45}
          height={45}
          alt="icon"
          className="bg-white p-[5px] rounded-lg "
        />
        <Image
          src="/icons/firebase-plain-wordmark.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image src="/icons/jest-plain.svg" width={45} height={45} alt="icon" />
        <Image
          src="/icons/jupyter-original-wordmark.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image
          src="/icons/postgresql-plain.svg"
          width={45}
          height={45}
          alt="icon"
        />
      </AppWrapIcons>
      <AppWrapIcons title="Software Tools">
        <Image
          src="/icons/vscode-original.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image
          src="/icons/androidstudio-original.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image src="/icons/Group-1.svg" width={30} height={30} alt="icon" />
        <Image src="/icons/Group-2.svg" width={45} height={45} alt="icon" />
        <Image src="/icons/windows.svg" width={45} height={45} alt="icon" />
        <Image
          src="/icons/docker-plain.svg"
          width={45}
          height={45}
          alt="icon"
        />
        <Image src="/icons/32.svg" width={45} height={45} alt="icon" />
      </AppWrapIcons>
    </>
  );
};

export default AppIconsList;
