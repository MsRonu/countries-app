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
    const url = 'https://restcountries.com/v3.1/all?fields=name,capital,coatOfArms,maps,population,area,languages,currencies,flags,cca3';
    axios.get(url).then((response) => {
      const sortedCountries = [...response.data].sort((a,b) => a.name.common.localeCompare(b.name.common));
      setCountries(sortedCountries);
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
