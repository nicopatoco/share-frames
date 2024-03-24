/* eslint-disable react/jsx-key */
import { Button, createFrames } from "frames.js/next";
import { FrameInput } from "frames.js/next/server";

const frames = createFrames({
  basePath: "/examples/share-frames/frames",
});

enum Views {
  firstView,
  middleView,
  subscribeView,
  rewardView,
  Leaderboard,
}

const handleRequest = frames(async (ctx) => {
  const totalPages = Number(ctx.searchParams.totalPages) || 5;
  const pageIndex = Number(ctx.searchParams.pageIndex || 0);

  const title = ctx.searchParams.title || "Here goes the title";
  const imageText =
    ctx.searchParams.imageText ||
    "In most cases, decentralization is a moot point used in place of justifying.."; // Receive text as a parameter

  // Convert Image to svg
  const backgroundImageUrl =
    "https://raw.githubusercontent.com/nicopatoco/share-frames/master/framesjs-starter/public/assets/back.png";
  // const sideImage = `https://raw.githubusercontent.com/nicopatoco/share-frames/master/framesjs-starter/public/assets/1W-PLE8YsdTY7-UcFvkG3aQ.png`;

  const sideImage =
    "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg";

  // Conditionally generate buttons based on pageIndex
  let buttons;

  switch (pageIndex) {
    case Views.firstView:
      buttons = [
        <Button
          action="link"
          target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
        >
          Read Online
        </Button>,
        <Button action="post" target={{ query: { pageIndex: 1 } }}>
          Read Inline
        </Button>,
      ];
      break;
    case Views.middleView:
      buttons = [
        <Button
          action="link"
          target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
        >
          Read Online
        </Button>,
        <Button
          action="post"
          target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
        >
          Subscribe
        </Button>,
        <Button
          action="post"
          target={{
            query: { pageIndex: 2 },
          }}
        >
          ←
        </Button>,
        <Button
          action="post"
          target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
        >
          →
        </Button>,
      ];
      break;
    case Views.subscribeView:
      buttons = [
        // Input here
        <Button
          action="post"
          target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
        >
          Confirm Subscribe
        </Button>,
      ];
      break;
    case Views.rewardView:
      buttons = [];
      break;
    case Views.Leaderboard:
      buttons = [];
      break;
  }

  // if (pageIndex === 0) {
  //   // Configuration for pageIndex 0
  //   buttons = [
  //     <Button
  //       action="link"
  //       target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
  //     >
  //       Read Online
  //     </Button>,
  //     <Button
  //       action="post"
  //       target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
  //     >
  //       Read Inline
  //     </Button>,
  //   ];
  // } else if (pageIndex < totalPages - 1) {
  //   // Configuration for pageIndex between 0 and Max
  // buttons = [
  //   <Button
  //     action="link"
  //     target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
  //   >
  //     Read Online
  //   </Button>,
  //   <Button
  //     action="post"
  //     target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
  //   >
  //     subscribe
  //   </Button>,
  //   <Button
  //     action="post"
  //     target={{
  //       query: { pageIndex: (pageIndex - 1 + totalPages) % totalPages },
  //     }}
  //   >
  //     ←
  //   </Button>,
  //   <Button
  //     action="post"
  //     target={{ query: { pageIndex: (pageIndex + 1) % totalPages } }}
  //   >
  //     →
  //   </Button>,
  // ];
  // } else {
  //   // Last view of frame
  //   buttons = [
  //     <FrameButton
  //       action="mint"
  //       target={getTokenUrl({
  //         address: "0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df",
  //         tokenId: "123",
  //         chainId: 7777777,
  //       })}
  //     >
  //       Get Rewards by Sharing
  //     </FrameButton>,
  //     <Button
  //       action="post"
  //       target={{
  //         query: { pageIndex: (pageIndex - 1 + totalPages) % totalPages },
  //       }}
  //     >
  //       Leaderboard
  //     </Button>,
  //     <Button
  //       action="post"
  //       target={{
  //         query: { pageIndex: (pageIndex - 1 + totalPages) % totalPages },
  //       }}
  //     >
  //       ←
  //     </Button>,
  //   ];
  // }

  return {
    image: (
      <div
        tw="w-100% h-100% flex flex-row justify-center items-center gap-2 my-4 bg-cover bg-white"
        style={{
          // backgroundImage: `url(${backgroundImageUrl})`,
          color: "black",
        }}
      >
        <div tw="flex w-6/12 justify-center items-center text-left m-8">
          <div tw="flex flex-col">
            <span tw="text-6xl font-bold pb-8">{title}</span>
            <span>{imageText}</span>
          </div>
        </div>
        {/* <div tw="flex w-6/12 justify-center items-center">Image HERE</div>
         */}
        <img tw="flex w-4/12 justify-center items-center" src={sideImage} />
      </div>
    ),
    buttons: buttons as any,
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
