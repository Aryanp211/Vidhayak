import axios from 'axios';
import CanvasJSReact from '../canvasjs.react'

var React = require('react');
var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
class Graph extends Component {
    constructor(props){
        super(props)
    }
 
    render() {
        const options = {
            theme: "light2",
            title: {
                // text: "Transactions taking place"
            },
            axisY: {
                title: "Price in Ether",
                // prefix: "ETH"
            },
            data: [{
                type: "line",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "ETH #,##0.00",
                dataPoints: dataPoints
            }]
        }
        return (

        <div>

            <CanvasJSChart options = {options} 
                 onRef={ref => this.chart = ref}
            />
  
        </div>
        );
    }

    componentDidMount(){
        var chart = this.chart;
        axios.get('http://localhost:5000/state/transaction/'+this.props.statename)

        .then(function(response) {
            console.log(response)
            return response.data;
        })
        .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log("graph")
                console.log(data[i])
                dataPoints.push({
                    x: new Date(data[i].date),
                    y: data[i].amount
                });
            }
            chart.render();
        });
    }
}
 
export default  Graph