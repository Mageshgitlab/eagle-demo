import React, { Component } from "react";

import ProductService from "../../Services/Service";
import Breadcrum from "../../components/Breadcrums/Breadcrum.component";

import StickyHeadTable from "../../components/MaterialTable/Mtable.component";

import "./contract-home.styles.css";

export default class ContractHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      skip: 0,
      take: 10,
      loading: false,
    };
    this.productService = new ProductService();
  }

  getProductData = () => {
    const { skip, take } = this.state;
    console.log("skip", skip);
    console.log("take", take);
    this.productService.getProducts(skip, take).then((data) => {
      console.log(data);
      if (data.length > 0) {
        const col = [];
        Object.keys(data[0]).map((res) => col.push(res));
        this.setState({
          columns: col,
          products: data,
        });
      }
    });
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.getProductData();
  }
  onChange = async (skip, take) => {
    this.setState({ skip, take, products: [] });
    await this.getProductData();
  };
  render() {
    const { products, columns } = this.state;
    const breadCrumsValues = ["Contract", "Contract Summary"];

    return (
      <div>
        <Breadcrum values={breadCrumsValues} />
        {products.length > 0 && (
          <StickyHeadTable
            columns={columns}
            data={products}
            onChange={(skip, take) => this.onChange(skip, take)}
          />
        )}
      </div>
    );
  }
}
