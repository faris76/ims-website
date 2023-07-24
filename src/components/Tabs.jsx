import React from "react";
import { Route, Link as RouteLink } from "react-router-dom";

const Tabs = () => {
  return (
    <>
      {/*Tabs navigation*/}
      <div className="bg-[#5F96B4]">
        <ul
          className="flex list-none flex-row flex-wrap border-b-0 pl-0 max-w-7xl mx-auto"
          role="tablist"
          data-te-nav-ref=""
        >
          <li role="presentation" className="flex-grow basis-0 text-center">
            <RouteLink
              to={"/"}
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Home
            </RouteLink>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <RouteLink
              to={"/faculty"}
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Faculty&Research
            </RouteLink>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Admissions
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Academics
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Governance
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-home02"
              className="font-bold my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs uppercase leading-tight text-white hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 "
              data-te-toggle="pill"
              data-te-target="#tabs-home02"
              data-te-nav-active=""
              role="tab"
              aria-controls="tabs-home02"
              aria-selected="true"
            >
              Compus Life
            </a>
          </li>
        </ul>
        {/* Tabs content*/}
        {/* <div className="mb-6">
        <div
          className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home02"
          role="tabpanel"
          aria-labelledby="tabs-home-tab02"
          data-te-tab-active=""
        >
          Tab 1 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-profile02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          Tab 2 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-messages02"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab02"
        >
          Tab 3 content
        </div>
        <div
          className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-contact02"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab02"
        >
          Tab 4 content
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Tabs;
