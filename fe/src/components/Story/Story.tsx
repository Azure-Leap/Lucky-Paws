import React from 'react'
import Image from 'next/image'
import { Inter,  Fredoka_One} from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["200"] });
const fredokaOne = Fredoka_One({ subsets: ["latin"], weight: ["400"] });

const Story = () => {
  return (
    <div className='bg-white mx-auto h-[55vh] max-w-[70vw] rounded-3xl m-24 grid grid-cols-2 relative mb-5'>
    <div className='m-5'>
        <h2 className={`text-3xl font-bold m-5  ${fredokaOne.className}`}>From Rescue to Forever Home: The Heartwarming Story of Coco</h2>
       <div className={` m-5  ${inter.className}`}>
        <p className='p-2' >Coco was just a little kitten when she was found wandering alone on the streets, scared and hungry. Fortunately, a kind-hearted person saw her and brought her to the local animal shelter. There, Coco received food, shelter, and medical care, and slowly started to regain her trust in humans.</p>
        <p className='p-2' >After a few weeks at the shelter, Coco caught the eye of a couple who were looking to adopt a pet. They were immediately drawn to her big green eyes and playful personality. They spent some time with her, petting and playing, and knew that Coco was the one.</p>
        <p className='p-2' >Coco went home with her new family and quickly settled into her new life. She had a warm bed to sleep in, plenty of toys to play with, and all the love and attention she could ever want. Her new owners even took her to the vet for a check-up, where they found out that Coco had some minor health issues that needed treatment. They didn't hesitate to provide her with the care she needed...</p>
       </div>


  </div>
    <div>
    <Image
              src="/images/Coco.png"
              alt="Coco"
              width={650}
              height={620}
              className='max-w-[650px] max-h-[600px] absolute right-0'
              />
    </div>
    </div>
  )
}

export default Story