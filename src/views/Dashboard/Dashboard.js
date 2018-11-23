import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

let portfolio = [
  {
    nome: 'Ações',
    sigla: 'bvmf',
    ativos: [
      {
        sigla: 'ABEV3',
        nome: 'Ambev S/A',
        color: '#a2a79e',
      },

      // {
      //   sigla: 'EGIE3',
      //   nome: 'Ambev S/A',
      //   color: '#a27e8e',
      // },

      // {
      //   sigla: 'GRND3',
      //   nome: 'Ambev S/A',
      //   color: '#a77464',
      // },

      // {
      //   sigla: 'TAEE11',
      //   nome: 'Ambev S/A',
      //   color: '#88292f',
      // },

      // {
      //   sigla: 'WEGE3',
      //   nome: 'Ambev S/A',
      //   color: '#2e1e0f',
      // },
    ],
  },

  // {
  //   name: 'Fundos Imobiliários',
  //   sigla: 'fii',
  //   ativos: [
  //     {
  //       sigla: 'ABCP11',
  //       nome: 'ABCP11',
  //       color: '#46a790',
  //     },

  //     {
  //       sigla: 'BCFF11',
  //       nome: 'BCFF11',
  //       color: '#6E5B04',
  //     },

  //     {
  //       sigla: 'MXRF11',
  //       nome: 'MXRF11',
  //       color: '#FFF1D0',
  //     },

  //     {
  //       sigla: 'XPML11',
  //       nome: 'XPML11',
  //       color: '#086788',
  //     },
  //   ]
  // }
];

let ativo;
let datasets = [];

// async function getAlphaVantageData(sigla) {
//   let data = {};

//   await fetch(
//     `https://www.alphavantage.co/query` +
//     `?function=TIME_SERIES_DAILY` +
//     `&symbol=${sigla}.SA` +
//     `&interval=1min` +
//     `&outputsize=compact` +
//     `&apikey=PIG9L01R7J2QRQI7`
//   );

//   return data;
// }

function getAlphaVantageData () {
  return JSON.parse('{"Meta Data":{"1. Information":"Daily Prices (open, high, low, close) and Volumes","2. Symbol":"ABEV3.SA","3. Last Refreshed":"2018-11-22","4. Output Size":"Compact","5. Time Zone":"US/Eastern"},"Time Series (Daily)":{"2018-11-22":{"1. open":"16.5300","2. high":"16.6200","3. low":"16.4400","4. close":"16.5000","5. volume":"7567000"},"2018-11-21":{"1. open":"16.2500","2. high":"16.4000","3. low":"15.9300","4. close":"16.3800","5. volume":"14321100"},"2018-11-19":{"1. open":"16.4700","2. high":"16.4700","3. low":"16.0700","4. close":"16.4600","5. volume":"14540100"},"2018-11-16":{"1. open":"16.1000","2. high":"16.5000","3. low":"16.0600","4. close":"16.5000","5. volume":"19753600"},"2018-11-14":{"1. open":"15.7000","2. high":"16.1000","3. low":"15.6800","4. close":"16.0300","5. volume":"18774300"},"2018-11-13":{"1. open":"16.0500","2. high":"16.1600","3. low":"15.5900","4. close":"15.7600","5. volume":"17448400"},"2018-11-12":{"1. open":"16.0400","2. high":"16.2100","3. low":"15.7900","4. close":"15.9500","5. volume":"11207200"},"2018-11-09":{"1. open":"15.7900","2. high":"16.1300","3. low":"15.7100","4. close":"16.0800","5. volume":"20738100"},"2018-11-08":{"1. open":"16.4000","2. high":"16.6400","3. low":"15.6800","4. close":"15.7100","5. volume":"20668200"},"2018-11-07":{"1. open":"16.7200","2. high":"16.8800","3. low":"16.3200","4. close":"16.3500","5. volume":"16523600"},"2018-11-06":{"1. open":"16.3200","2. high":"16.8000","3. low":"16.1600","4. close":"16.6400","5. volume":"18079800"},"2018-11-05":{"1. open":"16.5000","2. high":"16.5500","3. low":"16.2200","4. close":"16.4600","5. volume":"19580700"},"2018-11-01":{"1. open":"16.3700","2. high":"16.4500","3. low":"16.1400","4. close":"16.3700","5. volume":"22441600"},"2018-10-31":{"1. open":"16.1900","2. high":"16.3700","3. low":"15.9500","4. close":"16.3400","5. volume":"27263000"},"2018-10-30":{"1. open":"15.5600","2. high":"16.1300","3. low":"15.4800","4. close":"16.0500","5. volume":"34851100"},"2018-10-29":{"1. open":"15.4800","2. high":"15.6800","3. low":"15.3100","4. close":"15.4300","5. volume":"31727000"},"2018-10-26":{"1. open":"15.1500","2. high":"15.4900","3. low":"14.7900","4. close":"15.1900","5. volume":"39461900"},"2018-10-25":{"1. open":"14.8000","2. high":"15.0900","3. low":"14.5400","4. close":"15.0000","5. volume":"80816400"},"2018-10-24":{"1. open":"16.7000","2. high":"16.7000","3. low":"15.8800","4. close":"15.8900","5. volume":"32261600"},"2018-10-23":{"1. open":"16.6600","2. high":"16.7800","3. low":"16.4900","4. close":"16.6300","5. volume":"23081500"},"2018-10-22":{"1. open":"16.9400","2. high":"17.0400","3. low":"16.5700","4. close":"16.8200","5. volume":"20248500"},"2018-10-19":{"1. open":"16.8000","2. high":"16.9600","3. low":"16.5600","4. close":"16.8600","5. volume":"8740300"},"2018-10-18":{"1. open":"17.0500","2. high":"17.1300","3. low":"16.6500","4. close":"16.6500","5. volume":"14101200"},"2018-10-17":{"1. open":"17.3000","2. high":"17.3500","3. low":"17.0400","4. close":"17.0500","5. volume":"14503400"},"2018-10-16":{"1. open":"17.0000","2. high":"17.4600","3. low":"16.9900","4. close":"17.4100","5. volume":"13766600"},"2018-10-15":{"1. open":"17.1500","2. high":"17.1800","3. low":"16.8600","4. close":"16.9300","5. volume":"15583600"},"2018-10-11":{"1. open":"17.3000","2. high":"17.3000","3. low":"16.9200","4. close":"16.9900","5. volume":"14529800"},"2018-10-10":{"1. open":"17.4200","2. high":"17.4900","3. low":"17.2000","4. close":"17.2000","5. volume":"11261500"},"2018-10-09":{"1. open":"0.0000","2. high":"0.0000","3. low":"0.0000","4. close":"0.0000","5. volume":"0"},"2018-10-08":{"1. open":"0.0000","2. high":"0.0000","3. low":"0.0000","4. close":"0.0000","5. volume":"0"},"2018-10-05":{"1. open":"18.0400","2. high":"18.0800","3. low":"17.5200","4. close":"17.6500","5. volume":"16164800"},"2018-10-04":{"1. open":"18.1500","2. high":"18.2000","3. low":"17.6600","4. close":"17.8700","5. volume":"12303600"},"2018-10-03":{"1. open":"0.0000","2. high":"0.0000","3. low":"0.0000","4. close":"0.0000","5. volume":"0"},"2018-10-02":{"1. open":"18.7900","2. high":"18.8000","3. low":"17.9800","4. close":"18.2500","5. volume":"26709600"},"2018-10-01":{"1. open":"18.3500","2. high":"18.5500","3. low":"18.3500","4. close":"18.4300","5. volume":"6236800"},"2018-09-28":{"1. open":"18.3700","2. high":"18.5000","3. low":"18.2500","4. close":"18.3400","5. volume":"9047100"},"2018-09-27":{"1. open":"18.7900","2. high":"18.9500","3. low":"18.4400","4. close":"18.4800","5. volume":"25704700"},"2018-09-26":{"1. open":"18.4000","2. high":"18.9000","3. low":"18.3000","4. close":"18.7000","5. volume":"10959200"},"2018-09-25":{"1. open":"18.2500","2. high":"18.5100","3. low":"18.1600","4. close":"18.4000","5. volume":"11472300"},"2018-09-24":{"1. open":"18.7900","2. high":"18.8200","3. low":"18.3400","4. close":"18.3900","5. volume":"12892100"},"2018-09-21":{"1. open":"18.8500","2. high":"19.1800","3. low":"18.8000","4. close":"18.8500","5. volume":"19894000"},"2018-09-20":{"1. open":"18.9800","2. high":"18.9800","3. low":"18.6800","4. close":"18.7500","5. volume":"7134900"},"2018-09-19":{"1. open":"18.6400","2. high":"18.9300","3. low":"18.5500","4. close":"18.7900","5. volume":"13022400"},"2018-09-18":{"1. open":"18.2800","2. high":"18.9600","3. low":"18.2800","4. close":"18.7900","5. volume":"14866400"},"2018-09-17":{"1. open":"18.1500","2. high":"18.4100","3. low":"18.1400","4. close":"18.3600","5. volume":"15714800"},"2018-09-14":{"1. open":"18.2600","2. high":"18.4500","3. low":"18.0700","4. close":"18.2300","5. volume":"10265000"},"2018-09-13":{"1. open":"18.3800","2. high":"18.5100","3. low":"18.2100","4. close":"18.3300","5. volume":"10927000"},"2018-09-12":{"1. open":"18.2100","2. high":"18.5700","3. low":"18.1300","4. close":"18.4500","5. volume":"14075600"},"2018-09-11":{"1. open":"18.1500","2. high":"18.2400","3. low":"17.8900","4. close":"18.1900","5. volume":"14217500"},"2018-09-10":{"1. open":"18.3200","2. high":"18.4500","3. low":"18.1900","4. close":"18.2900","5. volume":"11868100"},"2018-09-06":{"1. open":"18.2500","2. high":"18.4700","3. low":"17.9800","4. close":"18.3200","5. volume":"16262200"},"2018-09-05":{"1. open":"18.0100","2. high":"18.3500","3. low":"18.0000","4. close":"18.1400","5. volume":"15790000"},"2018-09-04":{"1. open":"18.6400","2. high":"18.6500","3. low":"18.0100","4. close":"18.0100","5. volume":"19372200"},"2018-09-03":{"1. open":"18.9000","2. high":"18.9200","3. low":"18.5400","4. close":"18.6300","5. volume":"4966100"},"2018-08-31":{"1. open":"18.9600","2. high":"19.0400","3. low":"18.6800","4. close":"18.8500","5. volume":"26640800"},"2018-08-30":{"1. open":"19.1500","2. high":"19.2300","3. low":"18.7300","4. close":"19.0000","5. volume":"18010200"},"2018-08-29":{"1. open":"19.1200","2. high":"19.4700","3. low":"19.0800","4. close":"19.2500","5. volume":"12853800"},"2018-08-28":{"1. open":"19.1300","2. high":"19.1500","3. low":"19.0000","4. close":"19.1000","5. volume":"11838900"},"2018-08-27":{"1. open":"19.1000","2. high":"19.2600","3. low":"19.0300","4. close":"19.1300","5. volume":"14945900"},"2018-08-24":{"1. open":"18.9600","2. high":"19.1600","3. low":"18.9400","4. close":"19.0700","5. volume":"13921900"},"2018-08-23":{"1. open":"18.9300","2. high":"19.1600","3. low":"18.7500","4. close":"18.9400","5. volume":"14962400"},"2018-08-22":{"1. open":"18.9800","2. high":"19.0400","3. low":"18.7600","4. close":"18.9000","5. volume":"11062000"},"2018-08-21":{"1. open":"19.0300","2. high":"19.2800","3. low":"18.8500","4. close":"18.9800","5. volume":"11065800"},"2018-08-20":{"1. open":"19.0500","2. high":"19.2600","3. low":"18.9200","4. close":"19.1500","5. volume":"13221500"},"2018-08-17":{"1. open":"18.9500","2. high":"19.3000","3. low":"18.5700","4. close":"19.1800","5. volume":"20326000"},"2018-08-16":{"1. open":"19.3400","2. high":"19.4300","3. low":"18.9700","4. close":"19.0100","5. volume":"10816900"},"2018-08-15":{"1. open":"19.2000","2. high":"19.5900","3. low":"19.2000","4. close":"19.4200","5. volume":"17960100"},"2018-08-14":{"1. open":"19.2700","2. high":"19.4600","3. low":"19.1000","4. close":"19.4100","5. volume":"20005300"},"2018-08-13":{"1. open":"18.8300","2. high":"19.2100","3. low":"18.7000","4. close":"19.1400","5. volume":"10336600"},"2018-08-10":{"1. open":"19.1600","2. high":"19.2200","3. low":"18.8900","4. close":"18.9100","5. volume":"18932500"},"2018-08-09":{"1. open":"19.1200","2. high":"19.4400","3. low":"19.1000","4. close":"19.2700","5. volume":"14312100"},"2018-08-08":{"1. open":"19.1200","2. high":"19.3300","3. low":"19.0200","4. close":"19.1600","5. volume":"21203400"},"2018-08-07":{"1. open":"19.3000","2. high":"19.3400","3. low":"19.0600","4. close":"19.1700","5. volume":"14107500"},"2018-08-06":{"1. open":"19.3500","2. high":"19.4100","3. low":"19.1700","4. close":"19.3000","5. volume":"6327100"},"2018-08-03":{"1. open":"19.3800","2. high":"19.5800","3. low":"19.2100","4. close":"19.3000","5. volume":"13735700"},"2018-08-02":{"1. open":"19.3000","2. high":"19.4400","3. low":"19.2100","4. close":"19.2900","5. volume":"8645900"},"2018-08-01":{"1. open":"19.4500","2. high":"19.7100","3. low":"19.3600","4. close":"19.4500","5. volume":"9261100"},"2018-07-31":{"1. open":"19.7000","2. high":"19.7900","3. low":"19.2400","4. close":"19.4100","5. volume":"13110300"},"2018-07-30":{"1. open":"19.6600","2. high":"19.7900","3. low":"19.5600","4. close":"19.7000","5. volume":"12744700"},"2018-07-27":{"1. open":"19.9500","2. high":"20.3000","3. low":"19.7100","4. close":"19.8100","5. volume":"16978200"},"2018-07-26":{"1. open":"19.6500","2. high":"19.9400","3. low":"19.5100","4. close":"19.8900","5. volume":"33046900"},"2018-07-25":{"1. open":"18.9700","2. high":"19.0000","3. low":"18.6900","4. close":"18.9000","5. volume":"14883100"},"2018-07-24":{"1. open":"18.7500","2. high":"19.0400","3. low":"18.6700","4. close":"18.9700","5. volume":"13453000"},"2018-07-23":{"1. open":"18.7900","2. high":"18.9100","3. low":"18.5200","4. close":"18.6500","5. volume":"6126000"},"2018-07-20":{"1. open":"19.2000","2. high":"19.2800","3. low":"18.7000","4. close":"18.7900","5. volume":"14247100"},"2018-07-19":{"1. open":"18.6100","2. high":"18.8800","3. low":"18.4500","4. close":"18.8800","5. volume":"10294600"},"2018-07-18":{"1. open":"19.1100","2. high":"19.2300","3. low":"18.6600","4. close":"18.7600","5. volume":"11851300"},"2018-07-17":{"1. open":"18.9600","2. high":"19.3700","3. low":"18.9100","4. close":"19.1700","5. volume":"14126700"},"2018-07-16":{"1. open":"18.5300","2. high":"19.0300","3. low":"18.5300","4. close":"18.9500","5. volume":"18208300"},"2018-07-13":{"1. open":"18.2500","2. high":"18.4800","3. low":"18.1700","4. close":"18.4400","5. volume":"11875400"},"2018-07-12":{"1. open":"17.9100","2. high":"18.3000","3. low":"17.9100","4. close":"18.2400","5. volume":"18946300"},"2018-07-11":{"1. open":"18.2000","2. high":"18.2600","3. low":"17.8000","4. close":"17.9100","5. volume":"13464200"},"2018-07-10":{"1. open":"18.1400","2. high":"18.2100","3. low":"18.0100","4. close":"18.1900","5. volume":"12608800"},"2018-07-06":{"1. open":"18.4000","2. high":"18.4000","3. low":"17.9800","4. close":"18.0900","5. volume":"19331000"},"2018-07-05":{"1. open":"18.1500","2. high":"18.4300","3. low":"18.0100","4. close":"18.4000","5. volume":"11574400"},"2018-07-04":{"1. open":"18.1100","2. high":"18.2400","3. low":"17.9800","4. close":"18.1000","5. volume":"7882400"},"2018-07-03":{"1. open":"18.1400","2. high":"18.4100","3. low":"18.0900","4. close":"18.0900","5. volume":"10977800"},"2018-07-02":{"1. open":"17.9300","2. high":"18.2400","3. low":"17.8000","4. close":"18.1400","5. volume":"7294300"},"2018-06-29":{"1. open":"18.0900","2. high":"18.3100","3. low":"17.9300","4. close":"17.9800","5. volume":"13306900"},"2018-06-28":{"1. open":"17.9300","2. high":"18.1800","3. low":"17.8400","4. close":"18.0100","5. volume":"10416400"}}}');
}

let jsonData = getAlphaVantageData();
let days = Object.keys(jsonData['Time Series (Daily)']).reverse();
let stockQuote = [];
let close, max = 0, min = 0;

days.forEach(function (day, index) {
  if (+jsonData['Time Series (Daily)'][day]['4. close'] !== 0) {
    close = +jsonData['Time Series (Daily)'][day]['4. close'];
  }

  if (index === 0) {
    max = min = close;
  } else if (max < close) {
    max = close;
  } else if (close < min) {
    min = close;
  }

  stockQuote.push(close.toFixed(2));
});

for (let i = 0; i < portfolio.length; i++) {
  for (let j = 0; j < portfolio[i].ativos.length; j++) {
    ativo = portfolio[i].ativos[j];
    // ativo.data = getAlphaVantageData(ativo.sigla);
    // ativo.data = getAlphaVantageData();

    datasets.push({
      label: ativo.sigla,
      borderWidth: 1,
      borderColor: ativo.color,
      backgroundColor: 'transparent',
      pointHoverBackgroundColor: '#fff',
      data: stockQuote,
    });
  }
}

const mainChart = {
  labels: days,
  datasets: datasets
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: +max,
          min: +min,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {

    return (
      <div className="animated fadeIn">

        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Investimentos</CardTitle>
                    <div className="small text-muted">Novembro 2018</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 550 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Dashboard;
