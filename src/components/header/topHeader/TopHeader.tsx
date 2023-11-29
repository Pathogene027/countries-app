import React, { useEffect, useState } from "react";
import Mode from "./Mode";

interface propsType {
  toggleMode: boolean;
  setToggleMode: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  continent: string;
  filteredCountries: any[]
}
const TopHeader: React.FC<propsType> = (props) => {
  const toggleMode = props.toggleMode;
  const setToggleMode = props.setToggleMode;
  const setDisplay = props.setDisplay;
  const continent= props.continent
  const filteredCountries= props.filteredCountries
  const [region, setRegion]= useState<string>()
  const [total, setTotal]= useState<number>()


  useEffect(()=>{
    if(continent !== 'All Countries' && continent !=='Filter by Region'){
      setRegion(continent)
    }
    else{
      setRegion('the world')
    }
  },[continent])

  useEffect(()=>{
    setTotal(filteredCountries.length)
  }, [filteredCountries])
  return (
    <div
      id="top-h-cnt"
      className={toggleMode ? "child-light" : "child-dark"}
      onClick={() => setDisplay((display) => (display = false))}
    >
      <div id="top-header">
        <p id="intro" className="top-header">
          Where in the world?
        </p>
        <p id='counter'>
          {`There are ${total} countries in ${region}`}
        </p>
        <Mode setToggleMode={setToggleMode} toggleMode={toggleMode} />
      </div>
    </div>
  );
};
export default TopHeader;
