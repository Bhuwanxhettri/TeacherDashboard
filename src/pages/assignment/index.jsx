import { useState, useEffect } from "react";
import NavBar from "@/component/NavBar";
import CKeditor from "./CKeditor";
import api from "../api/axios";
const index = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("                      ");

  const uploadeAssignment = async () => {
    const res = api.post("/teacher/assignment");
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="flex">
      <div>
        <NavBar />
      </div>
      <div className="ml-56 mt-20  w-full  shadow-xl rounded-md px-5">
        <div className="flex justify-between gap-10">
          <div className=" p-5">
            <h1 className="font-bold text-xl px-5 my-2 text-indigo-600">
              Upload Assignment
            </h1>
            <CKeditor
              name="description"
              onChange={(data) => {
                setData(data);
              }}
              editorLoaded={editorLoaded}
            />
            <div class="flex my-2 flex-col space-y-4">
              <label for="pdf" class="text-gray-700">
                PDF File:
              </label>
              <div class="mb-3">
                <input
                  class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFile"
                />
              </div>
              <label for="date" class="text-gray-700">
                Dead Line for Assignment
              </label>
              <input
                type="date"
                id="date"
                name="date"
                class="py-2 px-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="button"
                class="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
              >
                Upload Assignment
              </button>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-xl my-3 text-indigo-600">
              Latesh Assignment
            </h1>
             
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;
