"use client"

import GetStartedButtonSection from "./get-started-button-section";

export default function DisclaimerSection() {

  return (
    <div className="bg-[#f8f9fa] py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-8">Disclaimer</h2>
        <p className="mb-8 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris nunc, ornare eget risus eget, vestibulum molestie lacus. Vestibulum pellentesque eget odio vel tristique. Nam suscipit varius ex nec aliquet. Aliquam erat volutpat. Integer ex ipsum, aliquam nec ultrices ut, pellentesque in magna. Sed tincidunt erat non lectus accumsan imperdiet. Quisque dui magna, accumsan a interdum vitae, sodales eu ligula. Cras eget lorem dolor.
        </p>
        <div className="flex justify-center mt-12">
          <GetStartedButtonSection />
        </div>
      </div>
    </div>
  )
}

