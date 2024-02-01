import React from "react";
import Sidebar2 from "../Layouts/Sidebar2";
import Contents from "./Contents";
import "../styles/dashbaord.css";
import "aos/dist/aos.css";
import { useFetch } from "../hooks/fetch";

function Itemout() {
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}/items/getAll`);
  console.log(data);

  return (
    <div className="dashboard">
      {}
      <div className="dashboard-content shadow-xl">
        <div className="  w-full  ">
          <Contents />
          <div className="relative w-8/12 ml-52 mt-20">{}</div>
          <table className="finance-table mt-20">
            <thead>
              <tr>
                <th>Date</th>
                <th>Item-name</th>
                <th>Quantity</th>
                <th>Unit-Price</th>
                <th>Total-Price</th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((report) => (
                <tr key={crypto.randomUUID()}>
                  <td
                    className="border p-2 delay-[300ms] duration-[600ms] "
                    data-aos="zoom-in-down"
                  >
                    20/12/2023
                  </td>
                  <td>{report.productName}</td>
                  <td>{report.quantity}</td>
                  <td
                    className="border p-2 delay-[300ms] duration-[600ms]"
                    data-aos="zoom-in-down"
                  >
                    {report.pricePerUnit}
                  </td>
                  <td
                    className="border p-2 delay-[300ms] duration-[600ms] "
                    data-aos="zoom-in-down"
                  >
                    {report.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Itemout;
