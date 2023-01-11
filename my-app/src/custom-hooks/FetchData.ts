import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [whiskeyData, setData] = useState<[]>([]);

    //function to get the data
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //This is the actual call of the function handle DataFetch
    //Where data is actually acquired
    useEffect( () => {
        handleDataFetch();
    }, [])

    //We return the data that we've saved
    return {whiskeyData, getData:handleDataFetch}
}