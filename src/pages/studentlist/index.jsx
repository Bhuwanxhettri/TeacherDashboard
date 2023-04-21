import api from "@/pages/api/axios";
import React, { useEffect, useState } from "react";
import NavBar from "@/component/NavBar";
import { Progress, Space ,Rate} from "antd";
import Reports from "@/component/charts/Reports";

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
          <h1 className="text-2xl font-bold">Student list</h1>

          <div className="flex gap-20 mt-5 ">
            <div>
              {/* ====== Table Section Start */}
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                            >
                              Phone
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                            >
                              Class
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {student.map((student, id) => {
                            return (
                              <>
                                <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                                  <td className="px-6 cursor-pointer hover:underline hover:text-red-600 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {student?.studentId?.firstName} {""}{" "}
                                    {student?.studentId?.lastName}{" "}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {student?.studentId.email}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {student?.phoneNumber}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {student?.address}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                    {student?.address}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border w-96  hover:shadow-none shadow-slate-50 shadow-md px-5 rounded-md">
              <div className=" relative flex flex-col mx-auto  m-5">
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
                    Roll NO : 6
                  </div>
                  <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                    CSIT
                  </div>
                </div>
              </div>
              <div className="flex gap-5 item center">
                <div>
                <h3 className="font-bold text-lg font-mono">Attendance</h3>
                <Space wrap>
                  <Progress
                    type="circle"
                    percent={90}
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                  />
                </Space>
                </div>
                <div className="px-3">
                  <span className="text-green-500 font-bold font-serif">Assignment Submit</span>
                  <Rate allowHalf defaultValue={2.5}/>
                </div>
              </div>
              <div className="py-4">
              <h3 className="font-bold text-lg font-mono">Studnet Performance</h3>
                <Reports height={300} width={370}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
