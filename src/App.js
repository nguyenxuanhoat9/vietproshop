import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"

// import shared component 
import Footer from "./shared/components/Layout/Footer";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Sidebar from "./shared/components/Layout/Sidebar";
import Slider from "./shared/components/Layout/Slider";

// import pages 
import Home from "./pages/Home";
import Page404 from "./pages/NotFound";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Success from "./pages/Success";


function App() {
  return (
    <div>
      <Header />
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              <Slider />
              <Router> 
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/Cart" component={Cart}/>
                  <Route path="/Category" component={Category}/>
                  <Route path="/ProductDetails" component={ProductDetails}/>
                  <Route path="/Search" component={Search}/>
                  <Route path="/Success" component={Success}/>
                  <Route component={Page404}/>
                </Switch>
              </Router>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {/*	End Body	*/}
      <Footer />
    </div>
  );
}

export default App;
