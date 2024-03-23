"use client";

import {getFrameMetadata} from '@coinbase/onchainkit';
import type {Metadata} from 'next';
import {FrameImageUrls, FRAME_BASE_URL} from '../lib/farcaster';
import RedirectToDemo from '@/components/redirect';
import {usePrivy} from '@privy-io/react-auth';

const frameMetadata = getFrameMetadata({
  buttons: ['Create a wallet'],
  image: FrameImageUrls.START,
  post_url: `${FRAME_BASE_URL}/api/wallet`,
});

export const metadata: Metadata = {
  title: 'Privy Frames',
  description: 'Privy Frames',
  openGraph: {
    title: 'Privy Frames',
    description: 'Privy Frames',
    images: [FrameImageUrls.START],
  },
  other: {
    ...frameMetadata,
  },
};


export default function Page() {

  const {login} = usePrivy();

  return (
    <>
      <h1>Privy Frames</h1>
      {/* <RedirectToDemo /> */}
      <main className="flex min-h-screen min-w-full">
        <div className="flex bg-privy-light-blue flex-1 p-6 justify-center items-center">
          <div>
            <div>
              {/* <Portal style={{maxWidth: '100%', height: 'auto'}} /> */}
            </div>
            <div className="mt-6 flex justify-center text-center">
              <button
                className="bg-violet-600 hover:bg-violet-700 py-3 px-6 text-white rounded-lg"
                onClick={login}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </main>

    </>);
}