import './App.css';
import Chart from './Chart';
import List from './List';
import {useState} from 'react';

function App() {
  // let htmlPercentage = 90;
  // let cssPercentage = 72;
  // let jsPercentage = 81;
  const [htmlPercentage, setHtmlPercentage]=useState(90);
  const [cssPercentage, setCssPercentage]=useState(72);
  const [jsPercentage, setJsPercentage]=useState(81);
  const [jsChartPercentage, setJsChartPercentage]=useState(jsPercentage);
  return (
    <div className="App">
      <div className="charts">
        <Chart completed={htmlPercentage} bgcolor={'red'}/>
        <Chart completed={cssPercentage} bgcolor={'green'}/>
        <Chart completed={jsChartPercentage} bgcolor={'blue'}/>
      </div>
      <div className="inputs">
        <input min="0" max="100" type="number" placeholder="HTML" onChange={(e)=>{
          setHtmlPercentage(e.target.value);
        }} value={htmlPercentage}></input>
        <input min="0" max="100" type="number" placeholder="CSS" onChange={(e)=>{
          setCssPercentage(e.target.value);
        }} value={cssPercentage}></input>
        <input min="0" max="100" type="number" placeholder="JS" onChange={(e)=>{
          setJsPercentage(e.target.value);
        }} value={jsPercentage}></input>
        <button type="button" onClick={(e)=>{
          console.log(jsPercentage);
          setJsChartPercentage(jsPercentage);
        }}>Apply</button>
      </div>
      <List todos={[
          {href:"#", title:"Facebook", id:1},
          {href:"#", title:"Youtube", id:2},
          {href:"#", title:"Twitter", id:3},
          {href:"#", title:"WhatsApp", id:4},
          {href:"#", title:"CodeGirls", id:5},
        ]} />
    </div>
  );
}

export default App;
