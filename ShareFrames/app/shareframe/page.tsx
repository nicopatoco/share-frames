import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameReducer,
  NextServerPageProps,
  getPreviousFrame,
  useFramesReducer,
} from "frames.js/next/server";
import Link from "next/link";
import { createDebugUrl } from "../debug";
import { currentURL } from "../utils";
import { NFTS, fetchFrames } from "./mockApi/mockShareFrame";

type State = {
  pageIndex: number;
  sfid: string;
  maxPages: number;
};

const initialState: State = {
  pageIndex: 0,
  sfid: "",
  maxPages: 0,
};

const getPageIndex = (buttonIndex: any, pageIndex: any, maxPages: any) => {
  let _pageIndex = 1;
  if (pageIndex == 0) {
    if (buttonIndex == 1) {
      _pageIndex = pageIndex++;
    }
  }
  if (pageIndex > 0 && pageIndex < maxPages - 1) {
    if (buttonIndex == 3) {
      _pageIndex = pageIndex - 1;
    }
    if (buttonIndex == 4) {
      _pageIndex = pageIndex + 1;
    }
  }
  if (pageIndex == maxPages - 1) {
    if (buttonIndex == 3) {
      _pageIndex = pageIndex - 1;
    }
  }
  return _pageIndex;
};

const reducer: FrameReducer<State> = (state, action) => {
  const buttonIndex = action.postBody?.untrustedData.buttonIndex;
  return {
    pageIndex: getPageIndex(buttonIndex, state.pageIndex, state.maxPages),
    sfid: state.sfid,
    maxPages: state.maxPages,
  };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL("/shareframe");
  const previousFrame = getPreviousFrame<State>(searchParams);
  const [state] = useFramesReducer<State>(reducer, initialState, previousFrame);

  let sfid = searchParams?.sfid?.toString();
  if (sfid) {
    initialState.sfid = sfid;
  }

  const frameData = (await fetchFrames("1234")).data; // TODO need to fix the sfid param
  const maxPages = frameData.frames.length;
  initialState.maxPages = maxPages;

  // then, when done, return next frame
  if (state.pageIndex == 0) {
    return (
      <div>
        Multi-page example <Link href={createDebugUrl(url)}>Debug</Link>
        <FrameContainer
          pathname="/shareframe"
          postUrl="/shareframe/frames"
          state={state}
          previousFrame={previousFrame}
        >
          <FrameImage>
            <div tw="flex w-full h-full text-black justify-center items-center bg-gray-200">
              <div tw="flex w-6/12 justify-center items-center text-left m-8">
                <div tw="flex flex-col">
                  <span tw="text-6xl font-bold pb-8">
                    {frameData.frames[state.pageIndex].frameData.title}
                  </span>
                  <span style={{ whiteSpace: "pre-line" }}>
                    {frameData.frames[state.pageIndex].frameData.description}
                  </span>
                </div>
              </div>
              <img
                tw="flex w-4/12 justify-center items-center border border-200"
                src={frameData.frames[state.pageIndex].frameData.sideImageUrl}
                alt="Image"
              />
            </div>
          </FrameImage>
          <FrameButton action="link" target={frameData.externalUrl}>
            Read Online
          </FrameButton>
          <FrameButton>Read Inline</FrameButton>
        </FrameContainer>
      </div>
    );
  } else if (state.pageIndex > 0 && state.pageIndex < maxPages - 1) {
    return (
      <div>
        Multi-page example <Link href={createDebugUrl(url)}>Debug</Link>
        <FrameContainer
          pathname="/shareframe"
          postUrl="/shareframe/frames"
          state={state}
          previousFrame={previousFrame}
        >
          <FrameImage>
            <div
              tw="flex w-full h-full text-black justify-center items-center bg-gray-200"
              // If we want to use a bg image but it is too large
              // style={{
              //   backgroundImage: `url(${
              //     frameData.frames[state.pageIndex].frameData.backgroundImgaUrl
              //   })`,
              // }}
            >
              <div tw="flex w-10/12 justify-center items-center text-left m-8">
                <div tw="flex flex-col">
                  <span tw="text-6xl font-bold pb-8">
                    {frameData.frames[state.pageIndex].frameData.title}
                  </span>
                  <span style={{ whiteSpace: "pre-line" }}>
                    {frameData.frames[state.pageIndex].frameData.description}
                  </span>
                </div>
              </div>
            </div>
          </FrameImage>
          <FrameButton action="link" target={frameData.externalUrl}>
            Read Online
          </FrameButton>
          <FrameButton action="post" target={`/subscribe-frame?sfid=${"1234"}`}>
            Subscribe
          </FrameButton>
          <FrameButton>←</FrameButton>
          <FrameButton>→</FrameButton>
        </FrameContainer>
      </div>
    );
  } else {
    return (
      <div>
        Multi-page example <Link href={createDebugUrl(url)}>Debug</Link>
        <FrameContainer
          pathname="/shareframe"
          postUrl="/shareframe/frames"
          state={state}
          previousFrame={previousFrame}
        >
          <FrameImage>
            <div tw="flex w-full h-full text-black justify-center items-center bg-gray-200">
              <div tw="flex w-10/12 justify-center items-center text-left m-8">
                <div tw="flex flex-col">
                  <span tw="text-6xl font-bold pb-8">
                    {frameData.frames[state.pageIndex].frameData.title}
                  </span>
                  <span style={{ whiteSpace: "pre-line" }}>
                    {frameData.frames[state.pageIndex].frameData.description}
                  </span>
                </div>
              </div>
            </div>
          </FrameImage>
          {/* <FrameButton action="mint" target={NFTS[0]!.tokenUrl}>
            Get Rewards by Sharing
          </FrameButton> */}
          <FrameButton action="mint" target={`eip155:84532:0xb31e157f357e59c4D08a3e43CCC7d10859da829F`}>Get Rewards by Sharing</FrameButton>
          <FrameButton>Leaderboard</FrameButton>
          <FrameButton>←</FrameButton>
        </FrameContainer>
      </div>
    );
  }
}
