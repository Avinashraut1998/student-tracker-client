import { useContext, useEffect, useState } from "react";
import AdminDrawer from "../component/admin/AdminDrawer";
import { Outlet } from "react-router-dom";
import { MyContext } from "../MyContext";
import axios from "axios";

const AdminPage = () => {
  const { user, setUser } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="p-4 sm:ml-64 flex bg-violet-200 h-screen justify-center ">
      <AdminDrawer />
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
