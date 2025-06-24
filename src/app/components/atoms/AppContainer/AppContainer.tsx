"use client";

interface AppContainerProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
  animation?: string;
}

const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <div
      id={props.id}
      data-aos={props.animation}
      style={props.style}
      onClick={props.onClick}
      onMouseMove={props.onMouseMove}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onBlur={props.onBlur}
      className={props.className ?? `flex flex-col`}
    >
      {props.children}
    </div>
  );
};

export default AppContainer;
