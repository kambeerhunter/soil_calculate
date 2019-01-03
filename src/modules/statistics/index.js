import React from 'react';
import { StatisticsForm } from './components/StatisticsForm';
import * as Ui from '../../Ui';


export const Statistics = () => (
  <Ui.Body
    pageTitle="Statistics"
  >
    <h3>Form for calculating statistical values</h3>
    <StatisticsForm />
  </Ui.Body>
);
