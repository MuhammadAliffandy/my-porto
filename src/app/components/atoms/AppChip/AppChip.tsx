interface AppChipProps {
  className?: string;
  text?: string;
  href?: string;
}

const AppChip: React.FC<AppChipProps> = (props) => {
  return (
    <p
      className={`bg-white text-[12px] px-[30px] py-[10px] hover:bg-black hover:text-white rounded-full text-black font-bold font-unbounded cursor-pointer ${props.className}`}
    >
      <a href={props.href}>{props.text}</a>
    </p>
  );
};

export default AppChip;
