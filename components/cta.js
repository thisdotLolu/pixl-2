import Link from "next/link";
import React from "react";

import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white dark:text-black bg-pixlviol-600 dark:bg-yellow-500 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to earn?
          </h2>
          <p className="mt-2 font-medium text-white dark:text-black text-opacity-90 lg:text-xl">
            Signup for free to start earning pixl.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link href="/account/get-started" rel="noopener" className="inline-block py-3 mx-auto text-lg font-medium text-center text-pixlviol-600 dark:text-yellow-500 bg-white dark:bg-black/80 dark:hover:bg-black rounded-md px-7 lg:px-10 lg:py-5 ">
            Join pixl.
          </Link>
        </div>
      </div>
    </Container>
  );
}
