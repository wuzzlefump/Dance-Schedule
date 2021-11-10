import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "@expressive/mvc";
import { Model } from "@expressive/mvc";

export class List extends Model {
  list = [];
  currentInputValue = "";
  removeValue = (value) => {
    let x = this.list;
    let index = x.indexOf(value);
    x.splice(index, 1);
    this.list = [...x];
    localStorage.setItem("todos", JSON.stringify([...x]));
  };
}

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
        <Provider of={List}>
          {routes.map((x, i) => {
            const RouteComp = x.Route;
            return (
              <RouteComp key={i} exact path={x.path}>
                {/* //documentTitle */}
                <x.Layout>
                  <React.Suspense fallback={"Loading"}>{x.comp}</React.Suspense>
                </x.Layout>
              </RouteComp>
            );
          })}
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
