import React from "react";
import "font-awesome/css/font-awesome.min.css";
import bitcoinImage from '../images/bitcoin.jpg';
import graphImage from '../images/sparkline.svg';
import '../App.css';

const Table = () => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">
            <i className="fa fa-star"></i> 1
          </th>
          <td>
              <div className="tw-flex d-flex">
                  <div className="flex-column center">
                      <img src={bitcoinImage}  className="bitcoinLogo"/>
                  </div>
                  <div className="center">
                      <span className="bitcoinInfo fw-bold">Bitcoin</span>
                      <span>BTC</span>
                  </div>
              </div>
          </td>
          <td>$49,848.05</td>
          <td>-0.5%</td>
          <td>4.3%</td>
          <td>1.6%</td>
          <td>$40,080,532,960</td>
          <td>$937,351,978,569</td>
          <td><img src={graphImage} /></td>
        </tr>
      </tbody>
    </>
  );
};

export default Table;
