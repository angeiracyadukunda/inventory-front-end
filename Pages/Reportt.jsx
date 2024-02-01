import React from "react";
import Sidebar2 from "../Layouts/Sidebar2";
import "../styles/dashbaord.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Contents from "./Contents";
import { useFetch } from "../hooks/fetch";
function Reportt() {
  const { data } = useFetch(
    `${import.meta.env.VITE_API_URL}/getReport/getReport`
  );
  console.log(data);
  return (
    <div>
      <div className="dashboard">
        <Sidebar2 />

        <div className="dashboard-content shadow-2xl">
          <div className="w-full">
            <Contents />

            <div className="flex">
              <table className="finance-table mt-24">
                <thead>
                  <tr data-aos="fade-up">
                    <th>Date</th>
                    <th>Time</th>
                    <th>Item-name</th>
                    <th>Quantity</th>
                    <th>Unit-Price</th>
                    <th>TOtal-Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.reportData?.map((report) => (
                    <tr data-aos="zoom-in-down" key={crypto.randomUUID()}>
                      <td>20/12/2023</td>
                      <td>15:00 pm</td>
                      <td>{report.productName}</td>
                      <td>{report.quantity}</td>
                      <td>{report.pricePerUnity}</td>
                      <td>{report.description}</td>
                      <td>
                        <button className="bg-blue-900 text-white rounded-full py-2 px-8 text-sm mr-4">
                          Available
                        </button>
                      </td>{" "}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportt;
