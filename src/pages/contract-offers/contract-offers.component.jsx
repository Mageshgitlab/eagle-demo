import React, { Component } from "react";
import Breadcrum from "../../components/Breadcrums/Breadcrum.component";

import ProductService from "../../Services/Service";

export default class ContractOffer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false,
    };

    this.productService = new ProductService();
  }
  componentDidMount() {}
  render() {
    const breadCrumsValues = ["Contract", "Offers"];
    return (
      <div>
        <Breadcrum values={breadCrumsValues} />
      </div>
    );
  }
}
