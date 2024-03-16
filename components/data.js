import {
  AdjustmentsHorizontalIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  FaceSmileIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import benefitOneImg from "../public/img/hero.png";
import benefitTwoImg from "../public/img/pixl-coins.png";

const benefitOne = {
  title: "",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pixl. offers retailers",
      desc: "...a low cost & lowrisk way to identify, target andextablish connections with web3 users.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Pixl. offers web2 users",
      desc: "...a risk-freeway to learn about & enter web3communities.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Pixl. enables web3 users",
      desc: "...to easily identify and support retailers whoexplicitly endorse web3.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Solana pixl. NFT",
  desc: "Even more benefits await pixl. NFT holders.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Earn extra percentage-based rewards",
      // desc: "Get an additional 2% rewards points.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Exclusive token-gated partner promotions",
      // desc: "At least 4 free airdrops per year from our partners.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Get rewarded to engage & support online retailer initiaves",
      // desc: "Get an additional 2% rewards points.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Priority access to our top NFT rewards & sought-after partner whitelists",
      // desc: "At least 4 free airdrops per year from our partners.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};

export { benefitOne, benefitTwo };
