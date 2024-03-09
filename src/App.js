import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import Maincontainer from "../src/components/Maincontainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watchpage from "./components/Watchpage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
