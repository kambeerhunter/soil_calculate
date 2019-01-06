import React from 'react';
import * as Ui from '../../Ui';
import { LineChart } from './components/LineChart';

class Accelerogram extends React.Component {
  state = {
    seriesNumber: 0,
    seriesAmount: 0,
    data: [],
    errorMessage: null,
    selectedColor: 'rgba(255, 0, 0, 0.7)',
  }

  changeSeriesNumber = (e) => {
    const { seriesAmount } = this.state;
    if (e.currentTarget.value <= seriesAmount) {
      this.setState({ seriesNumber: e.currentTarget.value });
    } else {
      this.setState({ seriesNumber: seriesAmount });
    }
  }

  selectChange = (e) => {
    this.setState({ selectedColor: e.currentTarget.value });
  }

  readAccelFile = (e) => {
    const file = e.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file, 'cp866');
      reader.onload = (evt) => {
        const rowData = evt.target.result;
        const data = [];
        rowData.split('\n     256').forEach((string, index) => {
          if (index !== 0) {
            data.push(
              string.replace(/\s\s+/g, ' ')
                .trim()
                .split(' ', 257),
            );
          }
        });
        data.length ?
          this.setState({ seriesAmount: data.length, data, errorMessage: null }):
          this.setState({ errorMessage: 'error reading file' });
      };
      reader.onerror = () => {
        this.setState({ errorMessage: 'error reading file' });
      };
    }
  }

  render() {
    const {
      seriesNumber,
      seriesAmount,
      errorMessage,
      selectedColor,
      data,
    } = this.state;

    return (
      <Ui.Body
        pageTitle="Accelerogram"
      >
        <div>
          <div className="form-group">
            <div class="custom-file">
              <input
                type="file"
                onChange={this.readAccelFile}
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose data file
              </label>
            </div>
          </div>
          <div className="form-group">
            <h5>
              Select implementation number
            </h5>
            <select
              value={seriesNumber}
              onChange={this.changeSeriesNumber}
              className="form-control"
            >
              {
                [...Array(seriesAmount).keys()].map(item => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item + 1}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="form-group">
            <h5>
              Select color
            </h5>
            <select
              value={selectedColor}
              onChange={this.selectChange}
              className="form-control"
            >
              <option value="rgba(255, 0, 0, 0.7)">Red</option>
              <option value="rgba(0, 255, 0, 0.7)">Green</option>
              <option value="rgba(0, 0, 255, 0.7)">Blue</option>
            </select>
          </div>
        </div>

        {errorMessage && (
          <div className="text-danger">
            {errorMessage}
          </div>
        )}

        {(seriesAmount > 0) && (
          <div>
            The number of implementations in the uploaded file:
            {seriesAmount}
          </div>
        )}

        {
          (seriesAmount > 0) &&
          data[seriesNumber] && (
            <LineChart
              data={data[seriesNumber]}
              lineColor={selectedColor}
            />
          )
        }
      </Ui.Body>
    );
  }
}

export { Accelerogram };
