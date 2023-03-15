import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

import Container from "./container";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-100 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-pixlviol-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-pixlviol-500 dark:text-yellow-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is pixl?",
    answer: "Yes, pixl. is completely free to use.",
  },
  {
    question: "How do I sign up for Pixl.?",
    answer: "Creating a free account takes less than 30 seconds! Just click Join Pixl below.",
  },
  {
    question: "How do I get my company to work with Pixl.?",
    answer:
      "Pixl has a partnership referral program offering up to $1,000 per retailer to reward users helping Pixl grow! Reach out to partnerships@goPixl.xyz",
  },
  {
    question: "How does Pixl. Work?",
    answer:
      "Pixl earns money from partnering with top stores that pay us when users shop. Pixl passes earnings to users in NFT Rewards, Solana or USDC!",
  },
  {
    question: "Is Pixl. Free to use?",
    answer:
      "Yes, Pixl. is completely free to use & creating an account takes less than 30 seconds!",
  },
  {
    question: "Do I need a crypto wallet to start using Pixl.?",
    answer:
      "No, your rewards are safely kept in Pixl. Points until you are ready to redeem them for your favorite web3 rewards!",
  },
];
