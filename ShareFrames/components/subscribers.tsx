"use client";

import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { useRouter } from 'next/navigation'
import { JSX, SVGProps } from "react";

export default function SubscribersSection() {

    const router = useRouter();

    const createFrameSet = () => {
        console.log("Create a frame set");
        router.push("/frame");
    };


    return (
        <div className="m-16">

            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-semibold">Subscribers</h1>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <DownloadIcon className="mr-2" />
                        Download CVS{"\n          "}
                    </Button>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Email</TableHead>
                            <TableHead>Date Register</TableHead>
                            <TableHead>From FrameID#</TableHead>
                            <TableHead>Injected in Subtract</TableHead>
                            <TableHead>Re-shares</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Fo...@gmail.com</TableCell>
                            <TableCell>10/23/24</TableCell>
                            <TableCell>234</TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Gr...@gmail.com</TableCell>
                            <TableCell>10/13/24</TableCell>
                            <TableCell>2233</TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>12d...@gmail.com</TableCell>
                            <TableCell>10/03/24</TableCell>
                            <TableCell>334</TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pa4...@gmail.com</TableCell>
                            <TableCell>07/11/24</TableCell>
                            <TableCell>445</TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                            <TableCell>
                                <CheckIcon className="text-green-500" />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

        </div>
    )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}
