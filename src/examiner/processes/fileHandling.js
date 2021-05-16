import { useState, useEffect } from "react";

// Credit: https://reactgo.com/fetch-data-react-hooks/

const patchFile = (fileName, patchData) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/update/" + fileName, {
      method: "PATCH",
      body: patchData,
      headers: {
        "Content-Type": "application/json"
      }
    }).catch((err) => {
      setData(err);
      setLoading(false);
    });

    const responseData = await response.text();
    setData(responseData);
    setLoading(false);
  };

  useEffect( async () => {
    fetchData();
  }, []);

  return { isLoading, data };
};

const postFile = (fileData) => {
  return fetch("http://localhost:3001/upload", {
    method: "POST",
    body: fileData,
  })
    .then(res => res)
    .catch(err => err);
};

export { patchFile, postFile };