import './Chart.css';

const Chart = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div className="container">
      <div className="filler" style={{
            width: `${completed}%`,
            backgroundColor: `${bgcolor}`,
      }}>
        <span className="label">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default Chart;