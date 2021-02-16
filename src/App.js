import React from "react";
import "./styles.css";
import Cards from '../src/components/cards/cardsModule';
import Charts from '../src/components/chart/chartModule';
import Country from '../src/components/countryPicker/country';
import { fetchData } from './api/index';
class App extends React.Component{
  state={
    data:{},
    country:''
  };
  handleCountryChange=async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country});
  }


  async componentDidMount(){
    const fetcheddata=await fetchData();
    this.setState({data:fetcheddata});
  }
  render(){
    const data=this.state.data;
    const country=this.state.country;
    return(
      <div className="App">
      <h1>Covid-19 Tracker</h1>
      <div className="container"> 
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
      </div>
    );
  }

};
export default App;
// export decfault function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
