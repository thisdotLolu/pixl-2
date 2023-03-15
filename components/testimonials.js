import Image from "next/legacy/image";
import React from "react";

import userOneImg from "../public/img/kevinw.jpg";
import userThreeImg from "../public/img/ta.jpg";
import userTwoImg from "../public/img/user1.jpg";
import Container from "./container";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              pixl. is the best. I&rsquo;ve been using it for months and it just works.
            </p>

            <Avatar
              image={userOneImg}
              name="Kevin Williams"
              title="Founder of Manifest FTS"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            pixl. is the best. I&rsquo;ve been using it for months and it just works.
            </p>

            <Avatar
              image={userTwoImg}
              name="Sarah Steiner"
              title="Lead marketer at Netflix"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            pixl. is the best. I&rsquo;ve been using it for months and it just works.
            </p>

            <Avatar
              image={userThreeImg}
              name="The Atlantean"
              title="Founder of BGN.games"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-pixlviol-800 bg-pixlviol-100 rounded-md ring-pixlviol-100 ring-4 dark:ring-pixlviol-900 dark:bg-pixlviol-900 dark:text-pixlviol-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
