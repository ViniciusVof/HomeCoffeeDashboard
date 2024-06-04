import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as Pages from "pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Home />,
  },
]);

export function Loader() {
  return <RouterProvider router={router} />;
}
