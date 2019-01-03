import React from 'react';
import * as Ui from '../../Ui';

export const Mainpage = () => (
  <Ui.Body
    pageTitle="Soil value calculator info"
  >
    <div className="text-center">
      This calculator allows you to calculate the average values for the soil,
      depending on the specified values, according to GOST 20522-2012
      (Soils. Methods of statistical treatment of test results)
    </div>
  </Ui.Body>
);
