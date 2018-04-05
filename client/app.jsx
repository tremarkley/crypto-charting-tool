import React from 'react';
import chart from 'react-chartjs';
import axios from 'axios';
import querystring from 'query-string';
import composeDataSet from './helpers/chartDataHelperFunctions';

const serverUrl = 'http://localhost:5555';

const LineChart = chart.Line;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataLoaded: false,
			chartData: {},
			error: false,
		};
		this.updateChartData = this.updateChartData.bind(this);
		this.padZero = this.padZero.bind(this);
  }

  componentDidMount() {
		this.getChartData(1);
	}

	padZero(number) {
		if (number < 10) {
			return `0${number}`;
		}
		return number;
	}

	getChartData(offset) {
		const startDate = new Date();
		startDate.setMonth(startDate.getMonth() - offset);
		const start = `${startDate.getFullYear()}-${this.padZero(startDate.getMonth() + 1)}-${this.padZero(startDate.getDate())}`;
		const now = new Date();
		const end = `${now.getFullYear()}-${this.padZero(now.getMonth() + 1)}-${this.padZero(now.getDate())}`;
		axios.get(`${serverUrl}/coindesk/historical?${querystring.stringify({
			start,
			end
		})}`)
			.then((data) => {
				this.updateChartData(data);
			})
			.catch(() => {
				this.setState({ error: true });
			});
	}
	
	updateChartData({ data }) {
		const chartData = composeDataSet(data);
		this.setState({
			chartData,
			isDataLoaded: true,
			error: false,
		});
	}

	render() {
		if (this.state.isDataLoaded) {
			return (
				<div>
					<p>Bitcoin Exchange (USD)</p>
						<LineChart data={this.state.chartData} width="1200" height="450" />
					<p>Powered by <a href="https://www.coindesk.com/price/">CoinDesk</a></p>
				</div>
			);
		}
		if (!this.state.isDataLoaded) {
			return <p>Loading Data</p>;
		}
		if (this.state.error) {
			return <p>Error Loading Data</p>;
		}
	} 
} 

export default App;
