import React from "react";

function BannerTwo() {
  return (
    <div className="my-32 md:mt-20 md:mb-28">
      <div className="overflow-hidden bg-blue-700">
        <div className="max-w-7xl py-64 px-20 md:py-28 md:px-28 md:max-w-none">
          <div className="grid grid-cols-1 gap-y-64 gap-x-8 md:grid-cols-2">
            <div className="flex flex-col gap-y-16 md:gap-y-4">
              <div className="flex flex-col gap-y-4 md:gap-y-0">
                <div>
                  <img
                    src="/_astro/petran-logo.99970d82_1t8FzR.webp"
                    alt="Petran"
                    className="w-80 h-20 md:h-6 md:w-28"
                    width="1080"
                    height="260"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h2 className="text-4xl md:text-base font-normal leading-8 tracking-tight text-white">
                    <span className="text-white font-bold">PE</span>rformance -{" "}
                    <span className="text-white font-bold">TR</span>acking -{" "}
                    <span className="text-white font-bold">AN</span>alytics
                  </h2>
                </div>
              </div>
              <div className="flex flex-col text-8xl leading-snug md:text-4xl font-medium font-sans text-white">
                <div>AI &amp; IoT Enabled</div>
                <div>Asset Performance Management</div>
              </div>
              <div>
                <p className="text-6xl leading-snug md:text-lg text-white">
                  Petran offers an Asset Performance Management (APM) system
                  that harnesses the power of artificial intelligence and the
                  Internet of Things (IoT) to empower data-driven
                  decision-making and enable proactive maintenance strategies.
                </p>
              </div>
              <div className="flex mt-5">
                <div>
                  <button
                    className="bg-white md:bg-transparent leading-5 text-5xl md:leading-5 md:text-sm text-blue-700 md:text-white
              font-albert-sans font-medium hover:text-black border border-white
              rounded-full p-16 md:py-4 md:px-6 md:font-semibold"
                  >
                    Schedule Call
                  </button>
                </div>
                <div className="flex ml-8">
                  <button
                    type="button"
                    className="ml-2 md:ml-0 w-36 h-36 md:h-[3.25rem] md:w-[3.25rem] inline-flex items-center rounded-full border border-transparent md:border-white bg-white md:bg-transparent text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-16 h-16 ml-10 md:ml-3 md:h-6 md:w-6 text-blue-700 md:text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className="ml-8 font-medium md:font-semibold md:ml-4 text-white text-5xl xl:text-base font-albert-sans mt-14 md:mt-3 cursor-pointer hover:text-primary"
                  >
                    Watch Video
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-none md:min-w-full rounded-xl">
              <img
                src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
                alt="Asset Perfromance Management Software"
                width="4755"
                height="2980"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
