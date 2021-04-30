import React from "react";
import { PageHeader } from "antd";
import { Router } from "@reach/router";

import "./styles/style.css";
import Main from "./components/Main";

function App() {
  return (
    <>
      <PageHeader className="site-page-header" title="Swarnim Doegar" />
      <Router>
        <Main path="/" default />
      </Router>
    </>
  );
}
export default App;
