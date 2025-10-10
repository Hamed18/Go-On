import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
    </div>
  );
};

export default UserProfile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import { Link } from "react-router-dom";

// const UserProfile = () => {
//   const [users, setUsers] = useState([]); // store all users
//   const [loading, setLoading] = useState(false);

//   // Fetch all users info
//   const fetchAllUsers = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get("http://localhost:4000/api/user", {
//         withCredentials: true,
//       });
//       console.log("✅ All Users Response:", res.data);
//       setUsers(res.data.data || []);
//     } catch (err) {
//       console.error("❌ Failed to fetch users:", err);
//       const msg =
//         err.response?.data?.message ||
//         err.message ||
//         "Something went wrong while fetching users!";
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllUsers();
//   }, []);

//   return (
//     <div className="p-4 md:p-6">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
//         <h3 className="text-2xl font-bold">All Registered Users</h3>
//         <Link to="/dashboard">
//           <Button className="gap-2">Back to Dashboard</Button>
//         </Link>
//       </div>

//       {/* Loading / Empty States */}
//       {loading ? (
//         <p className="text-gray-500">Loading users...</p>
//       ) : users.length === 0 ? (
//         <p className="text-gray-500">No users found.</p>
//       ) : (
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {users.map((user) => (
//             <div
//               key={user._id}
//               className="bg-white rounded-xl shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition duration-200"
//             >
//               <div>
//                 <h4 className="text-lg font-semibold mb-2 text-gray-900">
//                   {user.name || "Unnamed User"}
//                 </h4>
//                 <p className="text-sm text-gray-700 mb-1">
//                   <span className="font-medium">Email:</span> {user.email}
//                 </p>
//               </div>

           
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
