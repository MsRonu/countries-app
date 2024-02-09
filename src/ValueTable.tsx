import React,{useState} from 'react';
import { Translations,CoatOfArms, Countries,Flags,Maps } from './interfaces';
import './Table.css';

interface Props {
    country: Countries;
};
const formatKey = (key: string): string => {
    var formattedKey = JSON.stringify(key);//Make key into string
    formattedKey=formattedKey.replace(/[A-Z]/g, (match) => ' ' + match);//Add spaces
    formattedKey=formattedKey.replace(/"/g, "");// Remove double quotes
    return formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1);// Capitalize the first letter of the key
};
const TableWithTogglesAndValues: React.FC<Props> = ({ country }) => {
    const [activeToggles, setActiveToggles] = useState<boolean[]>(
        Object.keys(country).map(() => false)
    );

    const handleToggleChange = (index: number) => {
        setActiveToggles((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });//Toggle for checkboxes
    };

    const renderValue = (value: any) => {
        if (typeof value === 'object') {
            if ('png' in value && 'svg' in value) {//Flags and CoatOfArms interfaces
                return (
                    <>
                        <img src={value.png} className='photo' alt="Flag" />
                        <p> </p>
                        <img src={value.svg} className='photo' alt="Flag" />
                        <p>{value.alt}</p>
                    </>
                );
            } else if ('googleMaps' in value && 'openStreetMaps' in value) {//Maps interface
                return (
                    <>
                        <a href={value.googleMaps} target="_blank" rel="noopener noreferrer">
                            Google Maps
                        </a><br/>
                        <a href={value.openStreetMaps} target="_blank" rel="noopener noreferrer">
                            Open Street Maps
                        </a>
                    </>
                );
            } else if ('ara' in value && 'bre' in value && 'ces' in value) {//Translations interface
                const translations = Object.entries(value)
                    .map(([lang, translation]) => `\n ${lang}: ${JSON.stringify(translation)}`)
                    .join(', \n').split('[').join('').split('{').join('').split('}').join('').split(']').join('').split('"').join(' ').split(' :{').join(': {').split('common ').join('Common').split('official ').join('Official');
                return <span>{translations}</span>;
            } else {
                var val = JSON.stringify(value).split('[').join('').split('{').join('').split('}').join('').split(']').join('').split('"').join(' ').split(' :{').join(': {').split('common ').join('Common').split('official ').join('Official').split('nativeName :').join('Native Name: ');
                return val;
            }
        } else if (typeof value === 'boolean'){
            if (value===false){
                return 'No';
            } else {
                return 'Yes';
            }
        } else if (Array.isArray(value)) {
            var val= value.join(', \n').split('[').join('').split('{').join('').split('}').join('').split(']').join('').split('"').join(' ').split(' :{').join(': {');
            return val;
        } else {
            if(typeof value === 'string'){
                return value.charAt(0).toUpperCase() + value.slice(1);// Capitalize the first letter of the value
            } else{
            return value;
            }
        }
    };
    const keyOrder: (keyof Countries)[] = [
        "name", "altSpellings", "flags", "coatOfArms", "capital", "currencies",
        "population", "languages", "area", "maps", "landlocked", "latlng",
        "continents", "independent", "timezones", "borders", "unMember",
        "startOfWeek", "region", "subregion", "cca2", "cca3", "ccn3", "cioc",
        "fifa", "flag", "idd", "tld", "status", "capitalInfo", "car",
        "demonyms", "postalCode", "translations"
    ]; //Display order

    return (
        <div>
            <div className="toggle-container">
                <label className='toggle-label'>
                    <input
                        type="checkbox"//All checkbox
                        checked={activeToggles.every(toggle => toggle)}
                        onChange={() => {
                        const newState = activeToggles.map(() => !activeToggles.every(toggle => toggle));
                        setActiveToggles(newState);
                        }}
                    />
                    All
                </label>
                {keyOrder.map((key, index) => (//Always in the same order
                    <label key={key} className="toggle-label">
                        <input
                            type="checkbox"
                            checked={activeToggles[index]}
                            onChange={() => handleToggleChange(index)}
                        />
                        {formatKey(key)}
                    </label>))}
            </div> 
            <table className='table'>
                <tbody>
                    {keyOrder.map((key) => (//Table contents also always in the same order
                    activeToggles[keyOrder.indexOf(key)] && (
                    <tr key={key}>
                        <td>{formatKey(key)}</td>
                        <td>{renderValue(country[key])}</td>
                    </tr>
                    )
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableWithTogglesAndValues;