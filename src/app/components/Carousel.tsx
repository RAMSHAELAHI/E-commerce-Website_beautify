import React from "react";

export default function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-2 pb-2 pt-40 flex-grow"
              >
                <img
                  src="/images/make up items.avif"
                  alt="make-up-products"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Make-Up Products
                </h3>
              </a>
            </div>

            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/Skin care items.jpeg"
                  alt=" Skin care items.jpeg"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Skin Care Items
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow"
              >
                <img
                  src="/images/acrylic nails.jpeg"
                  alt="acrylic nails "
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Acrylic Nails
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/hair styling electronics.avif"
                  alt=" Hair styling Tools"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Hair styling Tools
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow"
              >
                <img
                  src="/images/hair extensions.webp"
                  alt="hair extensions "
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Hair Extensions{" "}
                </h3>
              </a>
            </div>

            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col "
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/lenses shades.jpeg"
                  alt="lenses shades"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Eye lenses Shades
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
