import Pie from './Pie';
import Radar from './Radar';

import CartesianAxis from './CartesianAxis';
import CartesianGrid from './CartesianGrid';
import Legend from './Legend';
import PolarGrid from './PolarGrid';
import PolarRadiusAxis from './PolarRadiusAxis';
import PolarAngleAxis from './PolarAngleAxis';

import Curve from './Curve';
import Rectangle from './Rectangle';
import Sector from './Sector';

import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ScatterChart from './ScatterChart';

export default {
  chart: {
    Pie,
    Radar
  },

  component: {
    CartesianAxis,
    CartesianGrid,
    Legend,
    PolarGrid,
    PolarRadiusAxis,
    PolarAngleAxis,
  },

  shape: {
    Curve,
    Rectangle,
    Sector
  },

  chartWrapper: {
    LineChart,
    BarChart,
    ScatterChart,
    PieChart
  }
};