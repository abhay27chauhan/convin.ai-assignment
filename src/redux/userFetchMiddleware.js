import toast from "react-hot-toast";
import baseUrl from "./baseUrl";

export async function usersCountFetchMiddleWare(dispatch) {
  try {
    dispatch({ type: "USER_COUNT_LOADING" });
    const response = await fetch(baseUrl);
    const data = await response.json();
    toast.success("Data Fetched");
    dispatch({
      type: "USER_COUNT_COMPLETE",
      payload: { response: data },
    });
  } catch (error) {
    toast.error("Something went wrong!!");
    dispatch({ type: "USER_COUNT_ERROR", payload: { error } });
  }
}

export async function userFetchMiddleWare(dispatch, userId) {
  try {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${baseUrl}/${userId}`);
    const { data } = await response.json();

    toast.success("Data Fetched");
    dispatch({
      type: "RESPONSE_COMPLETE",
      payload: { response: data },
    });
  } catch (error) {
    toast.error("Something went wrong!!");
    dispatch({ type: "ERROR", payload: { error } });
  }
}
