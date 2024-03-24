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
    externalUrl: "https://medium.com/@danettewallace/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851",
    frames: [
      {
        frameId: "1",
        frameData: {
          title: "Blockchain Is More Than A Market. It’s A Movement",
          description: "Many people think that market cap is an indication of a platform’s success, but people who think that are sorely mistaken.",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "2",
        frameData: {
          title: "",
          description: "A coin may do well in the stock market but that is no indication of how well the platform is doing. Market graphs only show how much people are willing to pay. Many times, the people who are investing are doing so based on a future projection, an idea, a vision. They’re not usually investing in proven, working ecosystems. Crypto market graphs do not show how much a platform is accomplishing in the real world.",
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "3",
        frameData: {
          title: "Decentralized Networks Are Growing",
          description: 'For example, Ethereum is not number one in market cap but Ethereum is clearly a front runner in activity. As Lubin says, “Market cap doesn’t reflect activity. Decentralized networks are growing.”',
          sideImageUrl:
            "https://raw.githubusercontent.com/nicopatoco/share-frames/master/ShareFrames/public/side-image.svg",
        },
      },
      {
        frameId: "4",
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
