export {};

declare module "*.glb" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "three.meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  interface Window {
    botpressWebChat?: {
      init: (config: { botId: string; hostUrl: string }) => void;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
