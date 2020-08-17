import React from 'react';
import HorizontalChart from './Component/Chart/HorizontalChart';
import LineChart from './Component/Chart/LineChart';
import Tables from './Component/Table/DataTable';
import MaxChart from './Component/Chart/MaxChart';
import MinChart from './Component/Chart/MinChart';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12 mb-16">
          <div className="card p-16">
            <LineChart></LineChart>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-16 p-16">
            <HorizontalChart></HorizontalChart>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12">
              <Tables type="all"></Tables>
            </div>
            <div className="col-md-6 pr-8">
              <div className="card p-16">
                <p className="chart-title text-standard">5 Besar Dengan Serapan Pagu Tertinggi</p>
                <div>
                  <MaxChart></MaxChart>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-8">
              <div className="card p-16">
                <p className="chart-title text-standard">5 Besar Dengan Serapan Pagu Terendah</p>
                <div>
                  <MinChart></MinChart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 mt-16 mb-56">
          <Tables type="component"></Tables>
        </div>
      </div>
    </div>
  );
}

export default App;
