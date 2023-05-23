import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import MessagePage from "./pages/MessagePage";
import WelcomePage from "./pages/WelcomePage";

const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  { path: "/messages", element: <MessagePage /> },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
