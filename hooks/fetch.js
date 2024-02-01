import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();
  const getData = async () => {
    const req = await fetch(url);
    const data = await req.json();
    setData(data);
  };
  const revalidate = () => {
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return { data, revalidate };
};
