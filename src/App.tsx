import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Countries } from './interfaces';
import CountryName from './CountryName';
import TableWithTogglesAndValues from './ValueTable';
import './Table.css';

function App() {
  const [countries, setCountries] = useState<Countries[]|null>();
  const [selected,setSelected] = useState<Countries|null>();

  useEffect(() => {//Import and sort data
    const url = 'https://restcountries.com/v3.1/all';
    axios.get(url).then((response) => {
      setCountries(response.data);
      setCountries(countries?.sort(function (a,b){//Sort countries
        if(a.name.common<b.name.common){return -1;}
        if(a.name.common>b.name.common){return 1;}
        return 0;
      })); //In case of a loading problem remove this setCountries then save, put it back, and save again
    });
  }, []);

  return (
    <>
  <div className="App">
    <select className='dropdown' onChange={(e)=>{//Dropdown menu
      const c=countries?.find((x)=>x.name.official===e.target.value)
      //console.log(c);
      setSelected(c);
    }}>
      {countries ? countries.map((countries) => {
      return <option key={countries.name.official} value={countries.name.official}><CountryName countries={countries}/></option>
      //return {countries.name.common}
      }) : null}
    </select>
    
  </div>
  {selected && <TableWithTogglesAndValues country={selected}/>/*Table and checkboxes*/}
  
  </>
  );
}
/*{selected && <TableWithToggle country={selected} />}
  {selected && <TableWithValues country={selected} />}
return <p><TableWithToggle country={selected} /></p>
<button onClick={{handleClick}}>a</button>
<p>{selected ? <CountrySummary countries={selected}/> : null}</p>
*/
export default App;
