import React from 'react';
import * as Ui from '../../Ui';

export const Mainpage = () => (
  <Ui.Body
    pageTitle="Engineering Geology Calculator"
  >
    <h4>Statistics section</h4>
    <div>
      Calculator from statistics section allows you to calculate the average values for the soil,
      depending on the specified values, according to GOST 20522-2012
      (Soils. Methods of statistical treatment of test results)
    </div>
    <br />
    <h4>Accelerogram section</h4>
    <div>
      Accelerogram section allows you to create graphs using a special data file (
      <a href="/static/ACCEL.DAT" download>example</a>
      )
    </div>
  </Ui.Body>
);
