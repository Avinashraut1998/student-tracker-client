import React from "react";

const HomeworksComponent = ({ homeworks }) => {
  return (
    <div>
      {homeworks.length !== 0 ? (
        <div className=" bg-white p-4 shadow-md rounded-lg mt-4 ">
          <h2 className="text-2xl font-bold mb-4">All Homeworks</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table className="w-full text-sm text-left rtl:text-right text-black ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-white">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-white">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {homeworks.map((homework) => (
                  <tr key={homework._id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {homework.title}
                    </td>
                    <td className="border border-gray-300 px-2 py-2">
                      {homework.approvedByAdmin ? (
                        <span className="text-green-500 font-bold">
                          Approved
                        </span>
                      ) : (
                        <span className="text-red-500 font-bold">
                          Not Approved
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomeworksComponent;
