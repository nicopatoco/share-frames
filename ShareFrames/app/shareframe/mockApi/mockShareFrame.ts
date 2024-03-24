interface FrameData {
  frameId: string;
  frameData: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

export interface FrameProps {
  sfid: string;
  title: string;
  externalUrl: string;
  frames: FrameData[];
}

// Define your mock data
const frameData = {
  sfid: "12345678",
  title: "This is a title",
  externalUrl: "https://www.google.com",
  frames: [
    {
      frameId: "1",
      frameData: {
        title: "This is a title page 1",
        description: "This is a description",
        imageUrl:
          "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
      },
    },
    {
      frameId: "2",
      frameData: {
        title: "This is a title Page 2",
        description: "This is a description",
        imageUrl:
          "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
      },
    },
    {
      frameId: "3",
      frameData: {
        title: "This is a title Page 3",
        description: "This is a description",
        imageUrl:
          "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
      },
    },
    {
      frameId: "4",
      frameData: {
        title: "This is a title Page 4",
        description: "This is a description",
        imageUrl:
          "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
      },
    },
    {
      frameId: "5",
      frameData: {
        title: "Get rewarded for Sharing!",
        description: "By ..",
        imageUrl:
          "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
      },
    },
  ],
};

export function fetchFrames(): Promise<{
  data: FrameProps;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: frameData,
      });
    }, 1000);
  });
}
