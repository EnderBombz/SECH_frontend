import { useState, useEffect } from "react";

export default function useList() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false)

    function pushList(data) {
        console.log({ path: "useList", data: data });
        setList(list => list.concat(data))
    }

    function updateList() {
        let aux = list
        console.log(aux);
        setList([])
        setList(list => list.concat(aux))
    }

    function clearList() {
        setList([]);
    }


    return { list, setList, pushList, clearList, updateList, loading, setLoading };


}