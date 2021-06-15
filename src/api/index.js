// export const url = "http://localhost:5000/api";
export const url = "https://todo-app-007.herokuapp.com/api";

export const setHeaders = () => {
  const header = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  return header;
};
