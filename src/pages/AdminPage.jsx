import { Outlet } from "react-router-dom";
import AdminDrawer from "../component/admin/AdminDrawer";

const AdminPage = () => {
  <div className="bg-violet-300 h-screen flex">
    <div>
      <AdminDrawer />
    </div>
    <Outlet />
  </div>;
};

export default AdminPage;
