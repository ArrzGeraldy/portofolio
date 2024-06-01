import Title from "@/components/Title";
import React from "react";
import {
  MongodbOriginal,
  ReactOriginal,
  Html5Original,
  Css3Original,
  TypescriptOriginal,
  PythonOriginal,
  CplusplusOriginal,
  GoOriginal,
  NodejsOriginal,
  MysqlOriginalWordmark,
  LaravelOriginal,
  TailwindcssOriginal,
} from "devicons-react";

const page = () => {
  return (
    <>
      <Title title={"Skills"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12 text-gray-300 mt-8">
        <article>
          <h4 className="font-semibold text-2xl">Frontend</h4>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Html5Original size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[95%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>95%</span>
            </div>
            <div className="flex gap-4 items-center">
              <Css3Original size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[85%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>85%</span>
            </div>
            <div className="flex gap-4 items-center">
              <ReactOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[85%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>85%</span>
            </div>
            <div className="flex gap-4 items-center">
              <TailwindcssOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[90%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>90%</span>
            </div>
          </div>
        </article>
        <article>
          <h4 className="font-semibold text-2xl">Backend</h4>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <NodejsOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[85%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>85%</span>
            </div>
            <div className="flex gap-4 items-center ">
              <MongodbOriginal size={32} />

              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[70%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>70%</span>
            </div>
            <div className="flex gap-4 items-center">
              <LaravelOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[80%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>80%</span>
            </div>
            <div className="flex gap-4 items-center">
              <MysqlOriginalWordmark size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[85%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>85%</span>
            </div>
          </div>
        </article>
        <article>
          <h4 className="font-semibold text-2xl">Others</h4>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center ">
              <PythonOriginal size={32} />

              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[80%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>80%</span>
            </div>
            <div className="flex gap-4 items-center">
              <CplusplusOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[60%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>60%</span>
            </div>
            <div className="flex gap-4 items-center">
              <GoOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[65%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>65%</span>
            </div>
            <div className="flex gap-4 items-center">
              <TypescriptOriginal size={32} />
              <div className="w-[60%] relative">
                <div className="h-1.5 w-full bg-color-gray rounded-md"></div>
                <div
                  className={`h-1.5 w-[80%] bg-color-orange rounded-md absolute top-0`}
                ></div>
              </div>
              <span>80%</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default page;
