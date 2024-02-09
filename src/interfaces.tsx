export interface CapitalInfo {
    latlng:number[]
  };
  export interface Car {
    signs:string[]
    side:string
  };
  export interface CoatOfArms {
    png: string
    svg: string
  };
  export interface Currency{
    name:string
    symbol:string
  };
  export interface Currencies {
    c: Currency
  };
  export interface Ds{
    f:string
    m:string
  };
  export interface Demonyms {
    eng: Ds
    fra: Ds 
  };
  export interface Flags {
    alt: string
    png: string
    svg: string
  };
  export interface Idd {
    root: string
    suffixes: number[] 
  };
  export interface Language {
    name: string 
  };
  export interface Languages {
    name: Language
  };
  export interface Maps {
    googleMaps: string
    openStreetMaps: string 
  };
  export interface Name {
    common: string
    nativeName: Translation 
    official:string
  };
  export interface PostalCode {
    format: string
    regex: string
  };
  export interface Translation {
    official: string
    common: string 
  };
  export interface Translations {
    ara: Translation
    bre: Translation
    ces: Translation
    cym: Translation
    deu: Translation
    est: Translation
    fin: Translation
    fra: Translation
    hrv: Translation
    hun: Translation
    ita: Translation
    jpn: Translation
    kor: Translation
    nld: Translation
    per: Translation
    pol: Translation
    por: Translation
    rus: Translation
    slk: Translation
    spa: Translation
    srp: Translation
    swe: Translation
    tur: Translation
    urd: Translation
    zho: Translation
  };
  export type Countries ={
    altSpellings: string[]
    area:number
    borders:string[]
    capital:string[]
    capitalInfo:CapitalInfo
    car:Car
    cca2:string
    cca3:string
    ccn3:string
    cioc:string
    coatOfArms:CoatOfArms
    continents:string[]
    currencies:Currencies
    demonyms:Demonyms
    fifa:string
    flag:string
    flags:Flags
    idd:Idd
    independent:boolean
    landlocked:boolean
    languages:Languages
    latlng: number[]
    maps:Maps
    name:Name
    population:number
    postalCode:any
    region:string
    startOfWeek:string
    status:string
    subregion:string
    timezones:string[]
    tld:string[]
    translations:Translations
    unMember:boolean
  };