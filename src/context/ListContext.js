import React, { createContext} from 'react';

import useList from './../hooks/useList'

const ListContext = createContext();

function ListProvider({ children }) {

    const  {
        list,setList ,pushList, clearList,updateList,loading, setLoading
    } = useList()

    return ( 
        <ListContext.Provider value={{list, pushList, clearList,updateList,setList,loading, setLoading}}> 
            { children } 
        </ListContext.Provider>
    )


}

export {ListContext, ListProvider};