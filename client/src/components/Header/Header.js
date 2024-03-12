import React from "react";

const Header = () => {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="bg-tarnsparent">
          <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
          </div>
        </div>
        <div className="py-20 md:py-28">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 uppercase rounded-9xl">
                  PROJECT INCOME-EXPENSES TRACKER
                </span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
                  Track Your Income and Expenses in One Place
                </h1>
                <p className="mb-8 text-lg md:text-xl text-gray-500 font-medium">
                  Wondering where all your money goes each month? Tired of
                  complicated budgeting software? Try our Simple Income &
                  Expenses Tracker Application, the simple way to track your
                  income and expenses in one place.
                </p>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                    <a
                      className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm"
                      href="/register"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="relative mx-auto md:mr-0 max-w-max">
                  <img
                    className="relative rounded-7xl"
                    src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg"
                    alt="landing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
