import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all users info
  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/user", {
        withCredentials: true,
      });
      console.log("✅ All Users (Admin Dashboard):", res.data);
      setUsers(res.data.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
      const msg =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong while fetching users!";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h3 className="text-2xl font-bold">Admin Dashboard</h3>
        <Link to="/">
          <Button className="gap-2">Go To Home</Button>
        </Link>
        <div className="rounded-md border"></div>
      </div>

      {/* User List Section */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-4">All Registered Users</h4>

        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-xl shadow-md border p-5 flex flex-col justify-between hover:shadow-lg transition duration-200"
              >
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    <span className="font-medium">Name:</span> {user.name || "Unnamed User"}
                  </h4>
                  <p className="text-sm text-gray-700 mb-1">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Role:</span>{" "}
                    {user.role || "user"}
                  </p>
                </div>

                {/* <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      toast.info(`Edit/Delete feature for ${user.name} coming soon!`)
                    }
                  >
                    Manage
                  </Button>
                </div> */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDash;
