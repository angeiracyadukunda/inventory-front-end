import React from "react";
import Sidebar2 from "../Layouts/Sidebar2";
import Contents from "./Contents";
import "../styles/dashbaord.css";
import ItemsIntable from "./ItemsIntable";
import { useFetch } from "../hooks/fetch";
import "aos/dist/aos.css";
function ItemsIn() {
  const { data, revalidate } = useFetch(
    `${import.meta.env.VITE_API_URL}/products/getAll`
  );
  const deleteProduct = async (id) => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/products/remove/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      revalidate();
    }
  };
  console.log(data);
  return (
    <div>
      <div className="dashboard">
        <Sidebar2 />

        <div className="dashboard-content shadow-2xl">
          <div className="w-full">
            <Contents />

            <button
              className="btn-user mt-14 delay-[300ms] duration-[600ms] text-sm  mr-32 mb-14"
              data-aos="fade-down"
            >
              Add item
            </button>
            <div className="relative w-8/12 ml-52 mt-12">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full border-s-gray-50 border-s-2 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search...."
                required
              />
            </div>

            <table className="finance-table mt-20">
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
                {data?.products?.map((product) => (
                  <tr key={product._id} data-aos="zoom-in-down">
                    <td>20/12/2023</td>
                    <td>15:00 pm</td>
                    <td>{product.productName}</td>
                    <td>{product.quantity}</td>
                    <td>{product.totalPrice + ""}</td>
                    <td>{product.pricePerUnit + ""}</td>
                    <td>{product.description}</td>
                    <td>
                      <button className="bg-blue-900 text-white rounded-full py-2 px-8 text-sm mr-4">
                        Update
                      </button>{" "}
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-900 text-white rounded-full py-2 px-8 text-sm mr-4"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsIn;
