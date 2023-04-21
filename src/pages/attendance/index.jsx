import NavBar from "@/component/NavBar";
import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { fetcher } from "../api";
import api from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const res = await fetcher("teacher/class");
      if (res) {
        setStudents(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAttendanceChange = async(studentid, isPresent) => {
    const res = await api.post("/attendance", {
      studentId:studentid,
      isPresent:isPresent,
    })
    if(res){
      toast('Attendance Done', { hideProgressBar: true, autoClose: 2000, type: 'success' })
    }
  };

  const today = moment().format("MMMM Do, YYYY");

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="ml-56 mt-5 px-5">
          <span className="mx-24 text-xl">
            {today}
            <ToastContainer />
          </span>
          <table className="min-w-full divide-y divide-gray-200 mx-20">
            <thead className="bg-black">
              <tr>
                <th
                  scope="col"
                  className=" px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Roll Number
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students?.map((student, index) => (
                <tr key={index}>
                  <td className="px-6 text-center py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student?.studentId?.firstName}{" "}
                    {student?.studentId?.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <a href={student?.studentId?.email}>
                      {student?.studentId?.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <input
                        id={`present-${index}`}
                        name={`attendance-${index}`}
                        type="radio"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        // checked={attendee.present}
                        onChange={() =>
                          handleAttendanceChange(student?.studentId?.id, true)
                        }
                      />
                      <label
                        htmlFor={`present-${index}`}
                        className="ml-3 cursor-pointer"
                      >
                        Present
                      </label>
                      <input
                        id={`absent-${index}`}
                        name={`attendance-${index}`}
                        type="radio"
                        className="ml-8 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        // checked={!attendee.present}
                        onChange={() =>
                          handleAttendanceChange(student?.studentId?.id, false)
                        }
                      />
                      <label
                        htmlFor={`absent-${index}`}
                        className="ml-3 cursor-pointer"
                      >
                        Absent
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default index;
