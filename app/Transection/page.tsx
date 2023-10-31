import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Transection = () => {
  return (
    <>
      <div className="flex justify-center h-[100vh]  align-center">
        <div className="mt-[15rem]">
          <Card className="w-[450px] ">
            <CardHeader>
              <CardTitle>Create Stream</CardTitle>
              <CardDescription>stream g$ in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="put your ENS" />
                  </div>
                  <div className="flex flex-col w-[200px] space-y-1.5">
                    <Label htmlFor="framework">Platform</Label>
                    <Select className="">
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Twitter</SelectItem>
                        <SelectItem value="sveltekit">lens</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
              <form>
                <div className="flex w-[200px] items-center  gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className=" space-y-1.5 mt-2">
                      Enter the flow rate...
                    </Label>
                    <Input
                      id="name"
                      className=" w-[400px]"
                      placeholder="Name of your project"
                    />
                  </div>
                </div>
              </form>
              <form>
                <div className="flex w-[200px] items-center  gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className=" space-y-1.5 mt-2">
                      Enter your massage
                    </Label>
                    {/* <Input
                      id="name"
                      className=" w-[400px]"
                      placeholder="Write something"
                    /> */}
                    <Textarea
                      className="w-[400px] "
                      placeholder="Type your message here."
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              {/* <Button variant="outline">Cancel</Button> */}
              <Button className="w-full">Create Stream</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Transection;
