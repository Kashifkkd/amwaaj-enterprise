import Image from "next/image";
import { Container } from "@/components/Container";
import MainImage from "../../public/img/MainImage.png";
import MojoLogo from "../../public/img/brands/mojo-logo.png";
import ThumsupLogo from "../../public/img/brands/thumsup-logo.png";
import BigColaLogo from "../../public/img/brands/big-cola.png";
import ShahyadriLogo from "../../public/img/brands/shahyadri-logo.png";
import CampaLogo from "../../public/img/brands/campa-logo.png";
import { Button } from "@headlessui/react";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
              Amwaaj Enterprises
            </h1>
            <p className="py-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-1xl dark:text-gray-300">
              Hey there! We're not your average wholesale business. <br />
              We're your partners in success, here to make your life easier.
            </p>

            <div className="pt-2 flex flex-row items-center gap-2 ">
              <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Order now
              </Button>

              <span className="text-sm"> Fast delivery *</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={MainImage}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Brands that are trusted by{" "}
            <span className="text-indigo-600">Customers</span>
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <Image
              src={MojoLogo}
              width="150"
              height="100"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={ThumsupLogo}
              width="150"
              height="300"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={BigColaLogo}
              width="150"
              height="50"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={ShahyadriLogo}
              width="150"
              height="300"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={CampaLogo}
              width="150"
              height="300"
              className={"object-contain"}
              alt="Hero Illustration"
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
