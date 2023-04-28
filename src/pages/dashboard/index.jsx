import NavBar from "@/component/NavBar";
import Attendance from "@/component/charts/Attendance";
import Reports from "@/component/charts/Reports";
import { AiOutlineCheckCircle, AiFillContainer } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import api from "../api/axios";
import HitMaps from "@/component/charts/HitMaps";

const Result = () => {
  const [profile, setProfile] = useState("");
  const getProfile = async () => {
    try {
      const res = await api.get("/auth/users/me");
      if (res) {
        setProfile(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div className="">
        <NavBar />
        <div className="ml-56  px-5">
          <div className="flex justify-between mb-5 items-center">
            <div className="mt-5">
              <h3 className="text-blue-600 font-bold text-3xl ">
                Welcome
                <span className="mx-2 text-sm text-red-700">
                  {" "}
                  {profile?.firstName}
                </span>
              </h3>
              <p className="text-xs font-bold text-gray-600">
                Welcome to Teacher Dashboard
              </p>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 mx-2 overflow-hidden rounded-full">
                <img src="https://images.unsplash.com/photo-1548544149-4835e62ee5b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-green-500 border-2 border-white" />
            </div>
          </div>
          <div className="flex gap-5 items-center pt-5 ">
            <div className="px-10 py-10 text-red-800 font-bold rounded-bl-3xl  shadow-xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-600">
              <AiOutlineCheckCircle size={24} className="mt-[-20px] " />
              <p className="text-3xl font-serif font-bold mb-3 pt-4 text-black">
                {" "}
                23
              </p>
              Complated Course
            </div>
            <div className="px-10 py-10 text-red-800 font-bold rounded-bl-3xl  shadow-xl bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-600">
              <AiFillContainer size={24} className="mt-[-20px] " />
              <p className="text-3xl font-serif font-bold pt-4 text-black mb-3">
                4
              </p>
              Total Student's
            </div>

            <div className="bg-white border-gray-200   shadow-xl p-4">
              <h2 className="font-bold font-serif text-xl">
                Studnet Performance
              </h2>
              <Reports height={250} width={600} />
            </div>
          </div>
          <div className="flex gap-2 my-16   ">
            <div className=" w-[45%] p-4 border border-gray-200   bg-white shadow-xl">
              <h2 className="font-bold font-serif text-xl">
                Studnet Attendance
              </h2>
              <Attendance />
            </div>
            <div className="w-[40%] overflow-y-auto h-52 rounded-md bg-white border-gray-200 border ">
              <h2 className="font-bold p-1 bg-red-600  text-white  font-serif text-xl">
                Notifciation
              </h2>
              <>
                {/* component */}
                {/* This is an example component */}
                <div className="w-full">
                  <div
                    id="toast-default"
                    className="flex hover:bg-slate-100 cursor-pointer  items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                  >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3 text-sm font-normal">
                      Set yourself free.
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="w-[60%]">
              <div className="flex shadow-xl   border border-gray-300 flex-col  w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg ">
                <h1 className="text-xl font-bold  bg-slate-200 w-full p-2">
                  Student List
                </h1>
                <ul className="flex overflow-y-auto h-52 flex-col w-full divide-y">
                  <li className="flex flex-row">
                    <div className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                      <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                            className="mx-auto object-cover rounded-full h-10 w-10"
                          />
                        </a>
                      </div>
                      <div className="flex-1 pl-1">
                        <div className="font-medium dark:text-white">
                          Jean Marc
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-sm">
                          Developer
                        </div>
                      </div>
                      <div className="flex flex-row justify-center">
                        <div className="text-gray-600 dark:text-gray-200 text-xs">
                          6:00 AM
                        </div>
                        <button className="w-10 text-right flex justify-end">
                          <svg
                            width={20}
                            fill="currentColor"
                            height={20}
                            className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
