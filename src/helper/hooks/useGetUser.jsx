// import React, { useEffect } from "react";
// import axiosConfig from "../service/axios.config";

// export const useGetUsers = (id, page) => {
//   const [users, setUsers] = React.useState([]);
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);

//   const getUsers = async () => {
//     setLoading(true);

//     try {
//       const response = page
//         ? await axiosConfig.get(`/?page=${page}`)
//         : await axiosConfig.get(id || "/");
//       setUsers(response.data.data);
//     } catch (error) {
//       setError(error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return [users, setUsers];
// };
