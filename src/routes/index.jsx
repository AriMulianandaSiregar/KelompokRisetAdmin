import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import GroupManagementPage from "../pages/GroupManagementPage";
import MemberManagementPage from "../pages/MemberManagementPage";
import GroupFormPage from "../pages/GroupFormPage";
import MemberFormPage from "../pages/MemberFormPage";

const router = createBrowserRouter([
  {
    // Rute ini adalah fallback atau wildcard route (*), yang mencocokkan semua URL yang tidak terdefinisi dalam rute lainnya.
    path: "*",
    element: <div>Routes Not Found</div>,
  },
  {
    // Rute ini memiliki elemen MainLayout sebagai tata letak utama.
    element: <MainLayout />,
    // Rute ini memiliki beberapa child routes:
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/dashboard",
        element: <DashboardPage />,
      },

      {
        path: "/researchgroupmanagement",
        element: <GroupManagementPage />,
      },

      {
        path: "/membermanagement",
        element: <MemberManagementPage />,
      },
      {
        path: "/researchgroupform",
        element: <GroupFormPage />,
      },
      {
        path: "/memberform",
        element: <MemberFormPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster position="top-center" richColors />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
