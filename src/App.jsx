import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElement,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElement(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
