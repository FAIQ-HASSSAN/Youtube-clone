import React , { useState , useEffect , createContext } from "react";

import { fetchdatafromapi } from '../utils/api'

export const Context = createContext();

export const AppContext = (props) =>{

    const [loading,setloading] = useState(false);
    const [searchResults,setsearchResults] = useState([]);
    const [selectCategories,setSelectCategories] = useState('New');
    const [mobilemenu,setMobileMenu] = useState(false);


    useEffect(()=>{

        fetchSelectedCatogeryData(selectCategories)

    },[selectCategories])


    const fetchSelectedCatogeryData = (query) => {
        setloading(true);
      
        // endpoint
        fetchdatafromapi(`search/?q=${query}`).then((contents) => {
          console.log("search result is");
          console.log(contents);
          setsearchResults(contents);
        }).catch((error) => {
          console.error("Error fetching data:", error);
        }).finally(() => {
          setloading(false);
        });
      }
      


    return(


        // globally available rahe 
        <Context.Provider value={{

            loading,
            setloading,
            searchResults,
            setsearchResults,
            selectCategories,
            setSelectCategories,
            mobilemenu,
            setMobileMenu

        }}>

           {props.children}

        </Context.Provider>
    )
}

