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
        <div className="w-full px-4">
          <h1 className="font-bold px-2 text-white rounded-md font-serif text-3xl my-3 bg-blue-800 py-2">
            Assignment List
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignment != null &&
              assignment.map((assignmentData) => (
                <div
                  key={assignmentData.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={assignmentData.pdf}
                    alt={assignmentData.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 truncate text-gray-800">
                      {assignmentData.title}
                    </h2>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: assignmentData.word,
                      }}
                      className="text-sm text-gray-700 leading-relaxed"
                    ></div>

                    <div className="text-gray-600 text-sm mt-4">
                      Deadline:{" "}
                      {new Date(assignmentData.deadLine).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
