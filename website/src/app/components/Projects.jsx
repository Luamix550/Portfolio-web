import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Modal from "./Modal"

export default function App() {
  return (
    <div className="max-w-[900px] gap-6 grid grid-cols-12 px-8">
      <Card className="col-span-12 sm:col-span-18 mb-6">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Holberton School</p>
          <h1 className="text-white font-bold text-large">Clone hbnb</h1>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://i.imgur.com/fphVGX5.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full border-t-1 border-default-600 dark:border-default-100">
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
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <Button radius="full" size="sm">Click here</Button>
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
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <Button radius="full" size="sm">Click here</Button>
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
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 w-full border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center justify-between">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">About the project</p>
            </div>
            <Button radius="full" size="sm">Click here</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
