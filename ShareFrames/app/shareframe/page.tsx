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
};

const totalPages = 5;
const initialState: State = { pageIndex: 0 , sfid: ""};

const reducer: FrameReducer<State> = (state, action) => {
  const buttonIndex = action.postBody?.untrustedData.buttonIndex;

  return {
    pageIndex: buttonIndex
      ? (state.pageIndex + (buttonIndex === 2 ? 1 : -1)) % totalPages
      : state.pageIndex,
      sfid: state.sfid
    };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  
  const url = currentURL("/shareframe");
  const previousFrame = getPreviousFrame<State>(searchParams);
  const [state] = useFramesReducer<State>(reducer, initialState, previousFrame);
  const imageUrl = `https://zizzamia.xyz/park-3.png`;

  let sfid  = searchParams?.sfid?.toString();

  console.log("*** sfid ***", sfid);
  if (sfid) {
    initialState.sfid = sfid.toString();
  }

  // then, when done, return next frame
  return (
    <div>
      Multi-page example <Link href={createDebugUrl(url)}>Debug</Link>
      <FrameContainer
        pathname="/shareframe"
        postUrl="/shareframe/frames"
        state={state}
        previousFrame={previousFrame}
      >
        {/* <FrameImage>
          <div tw="flex flex-col">
            <img width={573} height={300} src={imageUrl} alt="Image" />
            <div tw="flex">
              This is slide {state.pageIndex + 1} / {totalPages}
            </div>
          </div>
        </FrameImage> */}
        <FrameImage src={imageUrl} />
        <FrameButton>←</FrameButton>
        <FrameButton>→</FrameButton>
      </FrameContainer>
    </div>
  );
}
