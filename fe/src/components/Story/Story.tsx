import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Fredoka_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["200"] });
const fredokaOne = Fredoka_One({ subsets: ["latin"], weight: ["400"] });
const cocoImg = require("../../assets/images/coco.avif");

const Story = () => {
  return (
    <div className="bg-white container mx-auto rounded-3xl m-24 grid grid-cols-2">
      <Image
        src={cocoImg}
        alt="Photo"
        width={400}
        height={200}
        className="rounded-lg w-auto h-auto"
      />
      <div className="sm:p-3 max-sm:p-3">
        <h2
          className={`lg:text-3xl font-bold my-12 sm:text-lg 2xl:text-4xl 2xl:my-8 max-sm:text-sm max:sm-mx-5 max-sm:my-2 ${fredokaOne.className}`}
        >
          From Rescue to Forever Home: The Heartwarming Story of Coco
        </h2>
        <p
          className={`max-sm:line-clamp-3 sm:line-clamp-4 md:line-clamp-6 xl:line-clamp-none sm:text-sm  max-sm:text-xs 2xl:text-lg ${inter.className}`}
        >
          Coco was just a little kitten when she was found wandering alone on
          the streets, scared and hungry. Fortunately, a kind-hearted person saw
          her and brought her to the local animal shelter.There, Coco received
          food, shelter, and medical care, and slowly started to regain her
          trust in humans.
          <br />
          After a few weeks at the shelter, Coco caught the eye of a couple who
          were looking to adopt a pet. They were immediately drawn to her big
          green eyes and playful personality. They spent some time with her,
          petting and playing, and knew that Coco was the one.
          <br />
          Coco went home with her new family and quickly settled into her new
          life. She had a warm bed to sleep in, plenty of toys to play with, and
          all the love and attention she could ever want. Her new owners even
          took her to the vet for a check-up, where they found out that Coco had
          some minor health issues that needed treatment. They didn(&apos)t
          hesitate to provide her with the care she needed...
        </p>
        <Link
          href={`movies` || " "}
          className="xl:hidden font-bold max-sm:text-xs "
        >
          Read More ...
        </Link>
      </div>
    </div>
  );
};

export default Story;
