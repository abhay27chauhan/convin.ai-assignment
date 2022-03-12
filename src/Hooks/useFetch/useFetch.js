import { useReducer, useEffect } from "react";
import toast from "react-hot-toast";

import initialState from "./initialState";
import fetchReducer from "./fetchReducer";
import baseUrl from "./baseUrl";

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });

    const fetchUrl = async () => {
      try {
        const response = await fetch(baseUrl + url);
        const data = await response.json();
        toast.success("User Fetched");
        dispatch({
          type: "RESPONSE_COMPLETE",
          payload: { response: data },
        });
      } catch (error) {
        toast.error("Something went wrong!!");
        dispatch({ type: "ERROR", payload: { error } });
      }
    };

    fetchUrl();
  }, []);

  return [state.result, state.loading, state.error];
};

export default useFetch;
