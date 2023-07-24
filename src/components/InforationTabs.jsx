import React from "react";
import { Link as RouteLink } from "react-router-dom";
const InforationTabs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4">
            <RouteLink
              to={"/faculty"}
              class="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="uppercase mb-2 text-2xl font-bold tracking-tight text-[#5DAE37] dark:text-white">
                Faculty
              </h5>
              <hr class="h-px my-3 bg-black border-0 dark:bg-gray-700 w-10 mx-auto"></hr>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </RouteLink>
          </div>
          <div className="p-4 lg:w-1/4">
            <a
              href="#"
              class="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="uppercase mb-2 text-2xl font-bold tracking-tight text-[#3299E3] dark:text-white">
                Students
              </h5>
              <hr class="h-px my-3 bg-black border-0 dark:bg-gray-700 w-10 mx-auto"></hr>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </a>
          </div>
          <div className="p-4 lg:w-1/4">
            <a
              href="#"
              class="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="uppercase mb-2 text-2xl font-bold tracking-tight text-[#5228B6] dark:text-white">
                Alumni
              </h5>
              <hr class="h-px my-3 bg-black border-0 dark:bg-gray-700 w-10 mx-auto"></hr>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </a>
          </div>
          <div className="p-4 lg:w-1/4">
            <a
              href="#"
              class="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#1BA0AB] dark:text-white">
                Resources
              </h5>
              <hr class="h-px my-3 bg-black border-0 dark:bg-gray-700 w-10 mx-auto"></hr>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InforationTabs;
