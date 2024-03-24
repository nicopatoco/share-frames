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
import { currentURL } from "../utils";
import { createDebugUrl } from "../debug";

type State = {
  pageIndex: number;
  sfid: string;
  maxPages: number;
};

const initialState: State = { pageIndex: 0, sfid: "", maxPages: 0 };

const getPageIndex = (buttonIndex: any, pageIndex: any, maxPages: any) => {
  console.log("*** pageIndex 1 ***", pageIndex);
  let _pageIndex = 1;
  if (pageIndex == 0)  {
    if (buttonIndex == 1) {
      _pageIndex = pageIndex++;
    }
  }
  if (pageIndex > 0 && pageIndex < maxPages - 1)  {
    // console.log("*** pageIndex ***", pageIndex);
    // console.log("*** buttonIndex ***", buttonIndex);
    if (buttonIndex == 3) {
      _pageIndex = pageIndex - 1;
    }
    if (buttonIndex == 4) {
      _pageIndex = pageIndex + 1;
    }
  }
  if (pageIndex == maxPages - 1)  {
    // console.log("*** pageIndex ***", pageIndex);
    // console.log("*** buttonIndex ***", buttonIndex);
    if (buttonIndex == 3) {
      _pageIndex = pageIndex - 1;
    }
  }
  //console.log("*** _pageIndex 2 ***", _pageIndex);
  return _pageIndex;
  };

// pageIndex: buttonIndex
// ? (state.pageIndex + (buttonIndex === 2 ? ((state.pageIndex < state.maxPages) ? 1 : state.maxPages) : -1)) % state.maxPages
// : state.pageIndex

const reducer: FrameReducer<State> = (state, action) => {
  const buttonIndex = action.postBody?.untrustedData.buttonIndex;
  return {
    pageIndex: getPageIndex(buttonIndex, state.pageIndex, state.maxPages),
    sfid: state.sfid,
    maxPages: state.maxPages
  };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {

  const url = currentURL("/shareframe");
  const previousFrame = getPreviousFrame<State>(searchParams);
  const [state] = useFramesReducer<State>(reducer, initialState, previousFrame);

  let sfid = searchParams?.sfid?.toString();

  console.log("*** sfid ***", sfid);
  if (sfid) {
    initialState.sfid = sfid;
  }

  // calll the data

  let frameData = {
    sfid: "12345678",
    title: "This is a title",
    externalUrl: "https://www.google.com",
    frames: [
      {
        frameId: "1",
        frameData: {
          title: "This is a title page 1",
          description: "This is a description",
          imageUrl: "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
        },
      },
      {
        frameId: "2",
        frameData: {
          title: "This is a title Page 2",
          description: "This is a description",
          imageUrl: "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
        },
      },
      {
        frameId: "3",
        frameData: {
          title: "This is a title Page 3",
          description: "This is a description",
          imageUrl: "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
        },
      },
      {
        frameId: "4",
        frameData: {
          title: "This is a title Page 4",
          description: "This is a description",
          imageUrl: "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
        },
      },
      {
        frameId: "5",
        frameData: {
          title: "Get rewarded for Sharing!",
          description: "By ..",
          imageUrl: "https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg",
        },
      },
    ]
  };

  const maxPages = frameData.frames.length;
  initialState.maxPages = maxPages;
  //console.log("*** maxPages ***", maxPages);

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
            <div tw="flex flex-col">
              <div tw="flex text-6xl font-bold ">
                {/* This is slide {state.pageIndex + 1} - {sfid} / {maxPages} */}
                {frameData.frames[state.pageIndex].frameData.title}
              </div>
              <img width={300} height={300} src={frameData.frames[state.pageIndex].frameData.imageUrl} alt="Image" />
              <div tw="flex text-5xl font-bold ">
                {frameData.frames[state.pageIndex].frameData.description}
              </div>
            </div>
          </FrameImage>
          <FrameButton action="link" target={frameData.externalUrl}>Read Online</FrameButton>
          <FrameButton>Read Inline</FrameButton>
        </FrameContainer>
      </div>
    )
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
            <div tw="flex flex-col">
              <div tw="flex text-6xl font-bold ">
                {/* This is slide {state.pageIndex + 1} - {sfid} / {maxPages} */}
                {frameData.frames[state.pageIndex].frameData.title}
              </div>
              <img width={300} height={300} src={frameData.frames[state.pageIndex].frameData.imageUrl} alt="Image" />
              <div tw="flex text-5xl font-bold ">
                {frameData.frames[state.pageIndex].frameData.description}
              </div>
            </div>
          </FrameImage>
          <FrameButton action="link" target={frameData.externalUrl}>Read Online</FrameButton>
          <FrameButton>Subscribe</FrameButton>
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
            <div tw="flex flex-col">
              <div tw="flex text-6xl font-bold ">
                {/* This is slide {state.pageIndex + 1} - {sfid} / {maxPages} */}
                {frameData.frames[state.pageIndex].frameData.title}
              </div>
              <img width={300} height={300} src={frameData.frames[state.pageIndex].frameData.imageUrl} alt="Image" />
              <div tw="flex text-5xl font-bold ">
                {frameData.frames[state.pageIndex].frameData.description}
              </div>
            </div>
          </FrameImage>
          <FrameButton>Get Rewards by Sharing</FrameButton>
          <FrameButton>Leaderboard</FrameButton>
          <FrameButton>←</FrameButton>
        </FrameContainer>
      </div>
    );

  }
}
