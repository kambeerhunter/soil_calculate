import React from 'react';
import * as Ui from '../../Ui';

class Accelerogram extends React.Component {
  state = {
    seriesNumber: 0,
    seriesAmount: 0,
    data: [],
    errorMessage: null,
  }

  changeSeriesNumber = (e) => {
    const { seriesAmount } = this.state;
    if (e.currentTarget.value <= seriesAmount) {
      this.setState({ seriesNumber: e.currentTarget.value });
    } else {
      this.setState({ seriesNumber: seriesAmount });
    }
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
            data.push(string.replace(/\s\s+/g, ' ').trim().split(' ', 257));
          }
        });
        this.setState({ seriesAmount: data.length, data, errorMessage: null });
      };
      reader.onerror = () => {
        this.setState({ errorMessage: 'error reading file' });
      };
    }
  }

  render() {
    const { seriesNumber, seriesAmount, errorMessage } = this.state;

    return (
      <Ui.Body
        pageTitle="Accelerogram"
      >
        <form>
          <div className="form-group">
            <input
              type="text"
              name="seriesNumber"
              value={seriesNumber}
              onChange={this.changeSeriesNumber}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              name="accel"
              onChange={this.readAccelFile}
            />
          </div>
          <button
            type="button"
          >
            Построить график
          </button>
        </form>

        {errorMessage && (
          <div className="errorMessage">
            {errorMessage}
          </div>
        )}

        {(seriesAmount > 0) && (
          <div>
            The number of implementations in the uploaded file:
            {seriesAmount}
          </div>
        )}
      </Ui.Body>
    );
  }
}

export { Accelerogram };
