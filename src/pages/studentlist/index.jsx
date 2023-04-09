import api from "@/pages/api/axios";
import React, { useEffect, useState } from "react";
import NavBar from "@/component/NavBar";

const index = () => {
  const [student, setStudent] = useState([]);
  const studentlist = async () => {
    try {
      const res = await api.get("/teacher/class");
      if (res) {
        setStudent(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    studentlist();
  }, []);

  return (
    <div>
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="ml-56 mt-5 px-5">
          <h1 className="text-3xl font-bold">Student list</h1>

          <div className="flex gap-20 mt-5 ">
            <div>
              <table className="table-auto shadow-lg hover:shadow-none bg-white rounded-md p-3 w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Phone</th>
                    <th className="px-4 py-2 text-left">Class</th>
                    <th className="px-4 py-2 text-left">Age</th>
                    <th className="px-4 py-2 text-left">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {student.map((student, id) => {
                    return (
                      <>
                        <tr>
                          <td className=" px-4 py-2">
                            {student?.studentId?.firstName} {""}{" "}
                            {student?.studentId?.lastName}{" "}
                          </td>
                          <td className=" px-4 py-2">
                            {student?.studentId.email}
                          </td>
                          <td className=" px-4 py-2">{student?.phoneNumber}</td>
                          <td className=" px-4 py-2">{student?.address}</td>
                          <td className=" px-4 py-2">{student?.address}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <div className="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
                <img
                  className="max-h-20 w-full opacity-80 absolute top-0"
                  style={{ zIndex: -1 }}
                  src="https://unsplash.com/photos/iFPBRwZ4I-M/download?force=true&w=640"
                  alt=""
                />
                <div className="profile w-full flex m-3 ml-4 text-white">
                  <img
                    className="w-28 h-28 p-1 bg-white rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                    alt=""
                  />
                  <div className="title mt-11 ml-3 font-bold flex flex-col">
                    <div className="name break-words">Ricky</div>
                    <div className="add font-semibold text-sm italic dark">
                      Designer
                    </div>
                  </div>
                </div>
                <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                  <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                    Contact
                  </div>
                  {"{"}" "{"}"}
                  <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                    Bio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
