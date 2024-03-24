interface FrameData {
  frameId: string;
  frameData: {
    title: string;
    description: string;
    sideImageUrl?: string;
  };
}

export interface FrameProps {
  sfid: string;
  title: string;
  externalUrl: string;
  frames: FrameData[];
}

// Define your mock data
const frameData = [
  {
    sfid: "1234",
    title: "This is a title",
    externalUrl: "https://www.google.com",
    frames: [
      {
        frameId: "1",
        frameData: {
          title: "This is a title page 1",
          description: "This is a description",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "2",
        frameData: {
          title: "This is a title Page 2",
          description: "This is a description",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "3",
        frameData: {
          title: "This is a title Page 3",
          description: "This is a description",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "4",
        frameData: {
          title: "This is a title Page 4",
          description: "This is a description",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "5",
        frameData: {
          title: "Get rewarded for Sharing!",
          description:
            "By participating in the re-share program you will get rewarded every time someone subscribes \n \n We look forward to working with you!",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
    ],
  },
];

export function fetchFrames(sfid: string): Promise<{
  data: FrameProps;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: frameData.find((f) => f.sfid === sfid),
      });
    }, 1000);
  });
}
