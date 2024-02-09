import React from "react";
import * as itf from './interfaces';

export type AppProps={
    countries:itf.Countries
};

export default function CountryName({countries}:AppProps):JSX.Element{
    return <p>{countries.name.common}</p>
};