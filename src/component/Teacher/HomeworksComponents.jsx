import React from "react";

const HomeworksComponent = ({ homeworks }) => {
  return (
    <div>
      {homeworks.length !== 0 ? (
        <div className=" bg-gray-300 p-4 shadow-md rounded-lg mt-4 ">
          <h2 className="text-2xl font-bold mb-4">All Homeworks</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Title
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {homeworks.map((homework) => (
                  <tr key={homework._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {homework.title}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
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
