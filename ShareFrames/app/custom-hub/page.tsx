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
import { createDebugUrl } from "../debug";
import { currentURL } from "../utils";

type State = {
  active: string;
  total_button_presses: number;
  sfid: string;
};

const initialState = { active: "1", total_button_presses: 0 , sfid: ""};

const reducer: FrameReducer<State> = (state, action) => {
  return {
    total_button_presses: state.total_button_presses + 1,
    active: action.postBody?.untrustedData.buttonIndex
      ? String(action.postBody?.untrustedData.buttonIndex)
      : "1",
    sfid: state.sfid
  };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL("/custom-hub");
  const previousFrame = getPreviousFrame<State>(searchParams);

  let sfid  = searchParams?.sfid;
  console.log("*** sfid ***", sfid);

  const frameMessage = await getFrameMessage(previousFrame.postBody, {
    hubHttpUrl: "https://hub.freefarcasterhub.com:3281",
    fetchHubContext: true,
  });

  if (frameMessage && !frameMessage?.isValid) {
    throw new Error("Invalid frame payload");
  }

  if (sfid) {
    initialState.sfid = sfid.toString();
  }

  const [state, dispatch] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

  

  console.log("**** info: state is:", state);

  if (frameMessage) {
    const {
      isValid,
      buttonIndex,
      inputText,
      castId,
      requesterFid,
      casterFollowsRequester,
      requesterFollowsCaster,
      likedCast,
      recastedCast,
      requesterVerifiedAddresses,
      requesterUserData,
    } = frameMessage;

    console.log("info: frameMessage is:", frameMessage);
  }

  // then, when done, return next frame
  return (
    <div className="p-4">
      frames.js starter kit.{" "}
      <Link href={createDebugUrl(url)} className="underline">
        Debug
      </Link>
      <FrameContainer
        postUrl="/frames"
        state={state}
        previousFrame={previousFrame}
      >
        {/* <FrameImage src="https://framesjs.org/og.png" /> */}
        <FrameImage>
          <div tw="w-full h-full bg-slate-700 text-white justify-center items-center">
            {frameMessage?.inputText ? frameMessage.inputText : "Hello world" + sfid}
          </div>
        </FrameImage>
        <FrameInput text="put some text here" />
        <FrameButton>
          {state?.active === "1" ? "Active" : "Inactive"}
        </FrameButton>
        <FrameButton>
          {state?.active === "2" ? "Active" : "Inactive"}
        </FrameButton>
        <FrameButton
          action="mint"
          target={getTokenUrl({
            address: "0x060f3edd18c47f59bd23d063bbeb9aa4a8fec6df",
            tokenId: "123",
            chainId: 7777777,
          })}
        >
          Mint
        </FrameButton>
        <FrameButton action="link" target={`https://www.google.com`}>
          External
        </FrameButton>
      </FrameContainer>
    </div>
  );
}
