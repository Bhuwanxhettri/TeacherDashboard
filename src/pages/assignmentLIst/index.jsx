import React, { useEffect, useState } from "react";
import api from "../api/axios";
import NavBar from "@/component/NavBar";
const index = () => {
  const [assignment, setAssignment] = useState(null);
  const fetchAssignment = async () => {
    try {
      const res = await api.get("/teacher/assignment");
      const data = await res.data;
      setAssignment(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="w-[20%]">
          <NavBar />
        </div>
        <div className="w-[100%] px-20">
          <h1 className="font-bold px-2 text-white rounded-md font-serif text-2xl my-3 bg-black py-1">
            Assignment List
          </h1>
          <ul className="flex flex-col py-2 bg-gray-300 p-4">
            {assignment != null && (
              <>
                {assignment?.map((assignmentData) => {
                  return (
                    <>
                      <li className="border-blue-300 flex flex-row mb-2">
                        <div className="select-none h-[40vh] overflow-y-scroll cursor-pointer bg-white rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                          <div className=" w-[200px] h-[200px] mr-4">
                            <img src={assignmentData.pdf} />
                          </div>
                          <div className="flex-1 pl-1 mr-16">
                            <div className="font-medium">
                              {assignmentData.title}
                            </div>
                          </div>
                          <div className="px-20">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: assignmentData.word,
                              }}
                            />
                          </div>
                          <div className="text-gray-600 text-xs">
                            {" "}
                            Deadline{" "}
                            {new Date(
                              assignmentData.deadLine
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                      </li>
                    </>
                  );
                })}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
