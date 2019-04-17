import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
// import { Helloworld } from "../helloworld.jsx";
import { NavTest } from "../components/nav.jsx";
import { Index } from '../components/index.jsx';
import { SimpleGrid } from "../components/simpleGrid.jsx";
import { FlexGrid } from "../components/flexGrid.jsx";
import { CssGrid } from "../components/cssGrid.jsx";
import '../styles/index.scss';

const routes = [
    {path:'/index', linkName:'home', extra:true, component: Index },
    {path:'/simple', linkName:'simpleGrid', component:  SimpleGrid},
    {path:'/flex', linkName:'flexGrid', component:  FlexGrid},
    {path:'/css', linkName:'cssGrid', component:  CssGrid},
]
function AppRouter() {
 const MyRoutes = routes.map( (route, index) => <Route path={route.path} component={route.component} extra={route.extra} key={index}/>)
  return (
    <Router>
      <div>
        <NavTest links={routes}></NavTest>
        {MyRoutes}
      </div>
    </Router>
  );
}

render(<AppRouter></AppRouter>, document.getElementById('root'));