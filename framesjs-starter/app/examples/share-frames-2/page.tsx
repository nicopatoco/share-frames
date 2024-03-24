import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameInput,
  FrameReducer,
  NextServerPageProps,
  getPreviousFrame,
  useFramesReducer,
  getFrameMessage,
} from "frames.js/next/server";
import Link from "next/link";
import { getTokenUrl } from "frames.js";
import { createDebugUrl } from "../../debug";
import { currentURL } from "../../utils";

enum Views {
  firstView,
  middleView,
  subscribeView,
  rewardView,
  Leaderboard,
}

type State = {
  active: Views;
  total_button_presses: number;
};

const initialState = { active: 0, total_button_presses: 0 };

const reducer: FrameReducer<State> = (state, action) => {
  return {
    total_button_presses: state.total_button_presses + 1,
    active: action.postBody?.untrustedData.buttonIndex
      ? String(action.postBody?.untrustedData.buttonIndex)
      : "1",
  };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL("/examples/share-frames-2");
  const previousFrame = getPreviousFrame<State>(searchParams);

  const title = searchParams.title || "Here goes the title";
  const imageText =
    searchParams.imageText ||
    "In most cases, decentralization is a moot point used in place of justifying.."; // Receive text as a parameter

  // Convert Image to svg
  const backgroundImageUrl =
    "https://raw.githubusercontent.com/nicopatoco/share-frames/master/framesjs-starter/public/assets/back.png";
  // const sideImage = `https://raw.githubusercontent.com/nicopatoco/share-frames/master/framesjs-starter/public/assets/1W-PLE8YsdTY7-UcFvkG3aQ.png`;

  const sideImage =
    "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg";

  const [state, dispatch] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

  let buttons;
  switch (state.active) {
    case Views.firstView:
      buttons = [
        // eslint-disable-next-line react/jsx-key
        <FrameButton
          action="link"
          target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
        >
          Read Online
        </FrameButton>,

        // action="post" target="/examples/frame-shares-2-middle" to navigate
        // eslint-disable-next-line react/jsx-key
        <FrameButton>Read Inline</FrameButton>,
      ];
      break;
    // case Views.middleView:
    //   buttons = [
    //     // eslint-disable-next-line react/jsx-key
    //     <FrameButton
    //       action="link"
    //       target="https://danettewallace.medium.com/blockchain-is-more-than-a-market-its-a-movement-cdb9fce80851"
    //     >
    //       Read Online
    //     </FrameButton>,
    //     // eslint-disable-next-line react/jsx-key
    //     <FrameButton action="post" target={{ query: { state: 1 } }}>
    //       Subscribe
    //     </FrameButton>,
    //   ];
    //   break;
  }

  // const frameMessage = await getFrameMessage(previousFrame.postBody, {
  //   hubHttpUrl: "https://hub.freefarcasterhub.com:3281",
  //   fetchHubContext: true,
  // });

  // if (frameMessage && !frameMessage?.isValid) {
  //   throw new Error("Invalid frame payload");
  // }

  // // Here: do a server side side effect either sync or async (using await), such as minting an NFT if you want.
  // // example: load the users credentials & check they have an NFT

  // console.log("info: state is:", state);

  // if (frameMessage) {
  //   const {
  //     isValid,
  //     buttonIndex,
  //     inputText,
  //     castId,
  //     requesterFid,
  //     casterFollowsRequester,
  //     requesterFollowsCaster,
  //     likedCast,
  //     recastedCast,
  //     requesterVerifiedAddresses,
  //     requesterUserData,
  //   } = frameMessage;

  //   console.log("info: frameMessage is:", frameMessage);
  // }

  // then, when done, return next frame
  return (
    <div>
      <FrameContainer
        postUrl="/frames"
        state={state}
        previousFrame={previousFrame}
      >
        <FrameImage>
          <>
            <div tw="flex w-6/12 justify-center items-center text-left m-8">
              <div tw="flex flex-col">
                <span tw="text-6xl font-bold pb-8">{title}</span>
                <span>{imageText}</span>
              </div>
            </div>
            <img tw="flex w-4/12 justify-center items-center" src={sideImage} />
          </>
        </FrameImage>
        {buttons}
      </FrameContainer>
    </div>
  );
}
