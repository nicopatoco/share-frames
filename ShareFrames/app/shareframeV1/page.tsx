

import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';

const searchParams = useSearchParams();
const shareFrameId = searchParams.get('sfid');
const maxPage = 8;
const siteURL = process.env.NEXT_PUBLIC_SITE_FRAME_URL;

const frameMetadata = getFrameMetadata({
    buttons: [
        {
            label: 'Tell me the story:' + shareFrameId,
        },
],
    image: 'https://zizzamia.xyz/park-3.png',
    postUrl: 'https://build-onchain-apps.vercel.app/api/frame',
  });

export const metadata: Metadata = {
    manifest: '/manifest.json',
    other: {
        ...frameMetadata
    },
};

export default async function Frame() {

    return (
        <>
        <h1>Share Frame</h1>
        </>
    );
}

