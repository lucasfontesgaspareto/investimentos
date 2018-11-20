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

      {
        sigla: 'EGIE3',
        nome: 'Ambev S/A',
        color: '#a27e8e',
      },

      {
        sigla: 'GRND3',
        nome: 'Ambev S/A',
        color: '#a77464',
      },

      {
        sigla: 'TAEE11',
        nome: 'Ambev S/A',
        color: '#88292f',
      },

      {
        sigla: 'WEGE3',
        nome: 'Ambev S/A',
        color: '#2e1e0f',
      },
    ],
  },

  {
    name: 'Fundos Imobiliários',
    sigla: 'fii',
    ativos: [
      {
        sigla: 'ABCP11',
        nome: 'ABCP11',
        color: '#46a790',
      },

      {
        sigla: 'BCFF11',
        nome: 'BCFF11',
        color: '#6E5B04',
      },

      {
        sigla: 'MXRF11',
        nome: 'MXRF11',
        color: '#FFF1D0',
      },

      {
        sigla: 'XPML11',
        nome: 'XPML11',
        color: '#086788',
      },
    ]
  }
];

let ativo;
let datasets = [];

function randomArray(min, max, items) {
  let arrayNumbers = [];
  for (var i = 0; i < items; i++) {
    arrayNumbers.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return arrayNumbers;
}

for (var i = 0; i < portfolio.length; i++) {
  for (var j = 0; j < portfolio[i].ativos.length; j++) {
    ativo = portfolio[i].ativos[j];

    datasets.push({
      label: ativo.sigla,
      borderWidth: 1,
      borderColor: ativo.color,
      backgroundColor: 'transparent',
      pointHoverBackgroundColor: '#fff',
      data: randomArray(0, 1000, 27),
    });
  }
}
console.log(datasets);

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
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
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 1000,
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
