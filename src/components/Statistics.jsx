import React from "react";

const Statistics = () => {
  return (
    <section className="text-gray-600 bg-cover body-font bg-[url('https://i.ytimg.com/vi/zCgW78NcYB8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEYgWihlMA8=&rs=AOn4CLAm--57Dq63hNXjdfFb6ctNvHR-SA')]">
      <div className="bg-[#5F96B4]/70 backdrop-brightness-75">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <div className="flex items-center py-4">
              {/* The left line */}
              <div className="flex-grow h-px bg-white" />
              {/* Your text here */}
              <span className="flex-shrink text-2xl title-font font-semibold text-white px-4">
                IMSciences in Numbers
              </span>
              {/* The right line */}
              <div className="flex-grow h-px bg-white" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4 text-center ">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full ">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/phd_scholar_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M8 17l4 4 4-4m-4-5v9" />
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />

                <p className="leading-relaxed">PhD Faculty Members</p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  51
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/scholarship_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />

                <p className="leading-relaxed">
                  Scholarships (Rs. in Millions)
                </p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  2,124
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/project_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />

                <p className="leading-relaxed">Projects/Consultancies</p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  65
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/degree_programs_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />

                <p className="leading-relaxed">Degree Programs</p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  20
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/alumni_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M3 18v-6a9 9 0 0118 0v6" />
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />

                <p className="leading-relaxed">Alumni</p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  9,795
                </h2>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-white/70">
                <img
                  src={require("../assets/linkage_icon.png")}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

                <p className="leading-relaxed">Inter/national Linkages</p>
                <h2 className="title-font font-bold text-3xl text-gray-900">
                  50
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
