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
import { createDebugUrl } from "../debug";
import { currentURL } from "../utils";

type State = {
  active: string;
  total_button_presses: number;
  sfid: string;
};

const initialState = { active: "1", total_button_presses: 0, sfid: "" };

const reducer: FrameReducer<State> = (state, action) => {
  return {
    total_button_presses: state.total_button_presses + 1,
    active: action.postBody?.untrustedData.buttonIndex
      ? String(action.postBody?.untrustedData.buttonIndex)
      : "1",
    sfid: state.sfid,
  };
};

// This is a react server component only
export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL("/subscribe-frame");
  const previousFrame = getPreviousFrame<State>(searchParams);

  const sfid = searchParams?.sfid;
  if (sfid) {
    initialState.sfid = sfid.toString();
  }

  const [state, dispatch] = useFramesReducer<State>(
    reducer,
    initialState,
    previousFrame
  );

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
          <div tw="flex w-full h-full text-black justify-center items-center bg-gray-200">
            <div tw="flex w-10/12 text-6xl text-center">
              Subscribe to an amazing content!!
            </div>
          </div>
        </FrameImage>
        <FrameInput text="email" />
        <FrameButton action="post" target={`/shareframe?sfid=${state.sfid}`}>
          Confirm Subscription
        </FrameButton>
      </FrameContainer>
    </div>
  );
}
