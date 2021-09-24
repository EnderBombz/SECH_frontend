import React, { createContext} from 'react';

import useList from './../hooks/useList'

const Context = createContext();

function ListProvider({ children }) {

    const  {
        list,setList ,pushList, clearList,updateList,loading, setLoading
    } = useList()

    return ( 
        <Context.Provider value={{list, pushList, clearList,updateList,setList,loading, setLoading}}> 
            { children } 
        </Context.Provider>
    )


}

export {Context, ListProvider};