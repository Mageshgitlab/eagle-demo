import React, { Component } from "react";
import Breadcrum from "../../../components/Breadcrums/Breadcrum.component";
import Tabs from "../../../components/Tabs/Tabs.component";

export default class Title extends Component {
  render() {
    const breadCrumsValues = ["Contract", "Title", "Title Research"];
    const tabValues = [
      "Title Reseach",
      "Mineral Tracts",
      "Mineral Tracts Owners",
      "Unit Tracts",
      "API",
    ];
    return (
      <div>
        <Breadcrum values={breadCrumsValues} />
        <Tabs values={tabValues} />
      </div>
    );
  }
}
