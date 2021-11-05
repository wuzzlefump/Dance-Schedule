import * as React from "react";
import Layout from "./components/Layout";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  RouteProps,
} from "react-router-dom";

//screen import
const SchedulePage = React.lazy(() => import("./screens/Schedule/Index"));
const Todo = React.lazy(() => import("./screens/Todo/Index"));
//screen import
function App() {
  const routes = [
    {
      path: `/`,
      title: "Schedule",
      comp: <SchedulePage />,
      Layout: Layout,
      Route: Route,
    },
    {
      path: `/todo`,
      title: "Todo",
      comp: <Todo />,
      Layout: Layout,
      Route: Route,
    },
  ];

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {routes.map((x, i) => {
          const RouteComp = x.Route;
          return (
            <RouteComp key={i} exact path={x.path}>
              {/* //documentTitle */}
              <x.Layout {...x.layoutProps}>
                <React.Suspense fallback={"Loading"}>{x.comp}</React.Suspense>
              </x.Layout>
            </RouteComp>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
