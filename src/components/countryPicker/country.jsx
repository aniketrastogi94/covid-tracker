import React,{ useState,useEffect } from 'react';
import { NativeSelect , FormControl } from '@material-ui/core';
import styles from './country.module.css';
import {countryPicker} from '../../api/index';

const Country=({handleCountryChange})=>{
  const [fetechedCountries,setFetechedContries]=useState([]);
  useEffect(()=>{
    const fetchCountries=async()=>{
      setFetechedContries(await countryPicker());
    }
    fetchCountries();
  },[setFetechedContries]);

  
  return (
    <FormControl  className={styles.formControl} >
      <NativeSelect 
        className={styles.nativeSelect}
        defaultValue=""
        onChange={(e)=>handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetechedCountries.map((country,i)=><option key={i} value={country} >{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Country;