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
                <img src={profile?.avatar} />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 mr-1 rounded-full bg-green-500 border-2 border-white" />
            </div>
          </div>
          <div className="flex mx-10 justify-between items-center pt-5 ">
            <div className="px-20 py-10 text-red-800 font-bold rounded-bl-3xl  shadow bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-600">
              <AiFillContainer size={24} className="mt-[-20px] " />
              <p className="text-3xl font-serif font-bold pt-4 text-black mb-3">
                10
              </p>
              Total Student's
            </div>
            <div className="bg-white w-[90%] mx-10 border-gray-200   shadow p-4">
              <h2 className="font-bold font-serif text-xl">
                Studnet Performance
              </h2>
              <Reports height={250} width={600} />
            </div>
          </div>
          <div className="flex gap-2 my-16   ">
            <div className=" w-[45%] p-4 border border-gray-200   bg-white shadow">
              <h2 className="font-bold font-serif text-xl">
                Studnet Attendance
              </h2>
              <Attendance />
            </div>
            <div className="w-[100%] overflow-y-auto h-52 rounded-md bg-white border-gray-200 border ">
              <h2 className="font-bold p-1 bg-red-600  text-white  font-serif text-xl">
                Messages from Department
              </h2>
              <>
                {/* component */}
                {/* This is an example component */}
                <div>
                  <div
                    id="toast-default"
                    className="flex hover:bg-slate-100 cursor-pointer  items-center p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
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
                      Guest lacture for Teacher Tranning
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
