import React from "react";
import { Card, CardHeader, CardFooter, Image} from "@nextui-org/react";
import Modal from "./modal/Modal"
import Modal2 from "./modal/Modal2" 
import Modal3 from "./modal/Modal3"
import Modal4 from "./modal/Modal4"

export default function App() {
  return (
    <div className="max-w-[900px] gap-6 grid grid-cols-12 px-8">
      <Card className="col-span-12 sm:col-span-18 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Holberton School</p>
          <h1 className="text-white font-bold text-large">Clone Airbnb</h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.imgur.com/fphVGX5.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full  border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <div>
            <Modal/>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-6 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Holberton Schoolt</p>
          <h4 className="text-white font-bold text-large">Clone Printf function in C lenguaje</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.imgur.com/vlZzI1u.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <div>
            <Modal2/>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-6 mb-6 h-auto">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Holberton School</p>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src="https://i.imgur.com/kz3ORFR.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full  border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <div>
            <Modal3/>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="col-span-12 sm:col-span-6 mb-6 h-auto">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Holberton School</p>
          <h4 className="text-white/90 font-medium text-xl">Clone of Shell in C lenguaje </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full object-cover"
          src="https://i.imgur.com/Zcm2dGM.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <div>
            <Modal4/>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
