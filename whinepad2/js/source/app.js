/* @flow */
"use strict";

import Logo from "./components/Logo";
import React from "react";
import ReactDOM from "react-dom";
import Whinepad from "./components/Whinepad";
import schema from "./schema";

let data: Array<Object>;
const storage: ?string = localStorage.getItem("data");

// default example data, read from the schema
if (!storage) {
  data = [{}];
  schema.forEach(item => (data[item.id] = item.sample));
} else {
  data = JSON.parse(storage);
}

const root = document.getElementById("pad");

if (root !== null) {
  ReactDOM.render(
    <div>
      <div className="app-header">
        <Logo/> Welcome to Whinepad!
      </div>
      <Whinepad schema={schema} initialData={data}/>
    </div>,
    root
  );
};
