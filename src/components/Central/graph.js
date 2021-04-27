import * as React from "react";
import Paper from "@material-ui/core/Paper";
import axios from 'axios';
 import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend
} from "@devexpress/dx-react-chart-material-ui";
import { withStyles } from "@material-ui/core/styles";
import { Animation } from "@devexpress/dx-react-chart";

// import { bitcoin as data } from "../../../demo-data/data-vizualization";

const format = () => (tick) => Date(tick).toLocaleDateString();
const legendStyles = () => ({
  root: {
    display: "flex",
    margin: "auto",
    flexDirection: "row"
  }
});
const legendLabelStyles = (theme) => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: "nowrap"
  }
});
const legendItemStyles = () => ({
  item: {
    flexDirection: "column"
  }
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: "LegendRoot" })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: "LegendLabel" })(
  legendLabelBase
);
const Item = withStyles(legendItemStyles, { name: "LegendItem" })(
  legendItemBase
);
const demoStyles = () => ({
  chart: {
    paddingRight: "20px"
  },
  title: {
    whiteSpace: "pre"
  }
});

const ValueLabel = (props) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={`${text}%`} />;
};

const titleStyles = {
  title: {
    whiteSpace: "pre"
  }
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
  <Title.Text {...props} className={classes.title} />
));

class Graph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chartData:[]
      
    };
    }

    componentDidMount() {
        console.log('Mai agaya')
     
      axios.get('http://localhost:5000/transaction/')
      .then(response => {
        if (response.data.length > 0) {
          console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[')
          console.log(response.data)
          this.setState({
            chartData: response.data,
          })
        }
      })
      .catch((error) => {
        console.log('hahahaha');
      })
      }
  

  render() {
    // const { data: chartData } = this.state;
    const { classes } = this.props;

    return (
      <Paper>
        <Chart data={this.state.chartData} className={classes.chart}>
          <ArgumentAxis tickFormat={format} />
          <ValueAxis  labelComponent={ValueLabel} />

          <LineSeries name="price" valueField="amount" argumentField="date" />
          
          <Legend
            position="bottom"
            rootComponent={Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Title
            text={`Confidence in Institutions in American society ${"\n"}(Great deal)`}
            textComponent={TitleText}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default withStyles(demoStyles, { name: "Demo" })(Graph);
