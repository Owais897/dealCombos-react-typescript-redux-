//@ts-nocheck
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import TabsList from "./TabsList";
import { get_initial_data, save_seleted_item } from "./reducks/data";
import "./App.css";

function App(props) {
  useEffect(() => {
    props.get_initial_data();
  }, []);

  return (
    <Fragment>
      <TabsList {...props} />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.data.loading,
});

export default connect(mapStateToProps, {
  get_initial_data,
  save_seleted_item,
})(App);
