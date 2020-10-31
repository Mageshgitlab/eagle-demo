import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = ({ values }) => (
  <div>
   
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        {values.map((value) => (
          <li class="breadcrumb-item">
            <Link to="/contract">{value}</Link>
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Breadcrum;
