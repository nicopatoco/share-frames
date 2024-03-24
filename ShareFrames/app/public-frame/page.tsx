'use client'

import { useSearchParams } from 'next/navigation'
import { FrameMetadata } from '@coinbase/onchainkit';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';

export default async function HomePage() {

    const searchParams = useSearchParams()
    const shareFrameId = searchParams.get('sfid')
    let pageNumberString = searchParams.get('page');

    const maxPage = 8;
    const siteURL = process.env.NEXT_PUBLIC_SITE_FRAME_URL;

    let nextPageNumber = 0
    let pageNumber = 1

    if (pageNumberString) {
        pageNumber = parseInt(pageNumberString);
    }

    if (pageNumber < maxPage) {
        nextPageNumber = pageNumber + 1;
    } else {
        nextPageNumber = maxPage;
    }

    //const userAddress = await getFarcasterUserAddress(fid, options);


    let nextFrameUrl = siteURL + '?sfid=' + shareFrameId + '&page=' + nextPageNumber;

    return (
        <FrameMetadata
            ogTitle='Welcome to the Park'
            ogDescription='This is a park with a beautiful lake'
            buttons={[
                {
                    label: 'Tell me the story',
                },
                {
                    action: 'link',
                    label: 'Link to Google' + shareFrameId,
                    target: 'https://www.google.com'
                },
                {
                    action: 'post',
                    label: 'Go page:' + nextFrameUrl,
                },
            ]}
            image={{
                src: 'https://zizzamia.xyz/park-3.png',
                aspectRatio: '1:1'
            }}
            input={{
                text: 'Tell me a boat story',
            }}
            postUrl={ nextFrameUrl }
        />
    );
}