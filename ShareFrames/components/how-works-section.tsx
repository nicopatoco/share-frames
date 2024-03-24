import { JSX, SVGProps } from "react"


export default function HowWorksSection() {
  return (
    <div className="bg-[#2c2541] text-white">
      <div className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">How Share Frames Works for You</h2>
        <div className="flex justify-between">
          <div className="w-1/3 px-4">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                <ShieldCheckIcon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creators</h3>
              <p>
                Create your Share Frame
              </p>
              <p>
                Share your Share Frame
              </p>
              <p>
                Scale your offerings
              </p>
            </div>
          </div>
          <div className="w-1/3 px-4">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                <LockIcon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sharers</h3>
              <p>
                Opt in to share
              </p>
              <p>
                Re-Share Share Frames
              </p>
              <p>
                Get Rewards
              </p>
            </div>
          </div>
          <div className="w-1/3 px-4">
            <div className="flex flex-col items-center text-center">
              <div className="p-4 mb-4 bg-[#6e42a5] rounded-full">
                <BarChartIcon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creators and Sharers</h3>
              <p>
                Track your activity
              </p>
              <p>
                Optimize your sharing
              </p>
              <p>
                See your profits grow!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function LockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function ShieldCheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
