import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request."
    );
  }
  return resData
}

export default function useHttp(url, config, initalValue) {

  const [data, setData] = useState(initalValue);
  const [isLoding, setIsLoding] = useState(false);
  const [error, SetError] = useState();

  function clearData() {
    setData(initalValue)
  }

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoding(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        SetError(error.message || "Something went wrong.");
      }
      setIsLoding(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoding,
    error,
    sendRequest,
    clearData
  };
}
