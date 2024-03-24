import { getTokenUrl } from "frames.js";
import { zora } from "viem/chains";

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

export const NFTS: {
  src: string;
  tokenUrl: string;
}[] = [
  {
    src: "https://ipfs.decentralized-content.com/ipfs/bafybeifs7vasy5zbmnpixt7tb6efi35kcrmpoz53d3vg5pwjz52q7fl6pq/cook.png",
    tokenUrl: getTokenUrl({
      address: "0x99de131ff1223c4f47316c0bb50e42f356dafdaa",
      chain: zora,
      tokenId: "2",
    }),
  },
  {
    src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeiegrnialwu66u3nwzkn4gik4i2x2h4ip7y3w2dlymzlpxb5lrqbom&w=1920&q=75",
    tokenUrl: getTokenUrl({
      address: "0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df",
      chain: zora,
      tokenId: "1",
    }),
  },
  {
    src: "https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeidc6e5t3qmyckqh4fr2ewrov5asmeuv4djycopvo3ro366nd3bfpu&w=1920&q=75",
    tokenUrl: getTokenUrl({
      address: "0x8f5ed2503b71e8492badd21d5aaef75d65ac0042",
      chain: zora,
      tokenId: "3",
    }),
  },
];

export function fetchFrames(sfid: string): Promise<{
  data: FrameProps;
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: frameData[0],
      });
    }, 1000);
  });
}
