import React, {useEffect, useState} from 'react';
import '../App.css'
import fetchWithAuth from "../helpers/fetchWithAuth";
import FetchResponse from "../interfaces/FetchResponse";
import ActivityCard from "../components/ActivityCard";
import Activity from "../interfaces/Activity";
import {attributes} from "js-cookie";

async function fetchData() {
    try {
        const response = await fetchWithAuth("/activities", 'GET');
        console.log('Data fetched', response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default function MainPage() {
    const [data, setData] = useState<FetchResponse | undefined>(undefined);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const result = await fetchData();
            setData(result);
        };

        fetchDataAsync().then();
    }, []);
    return (
        <div className="item-container">
            {data !== undefined ? (
                <div className="items">
                    {
                        data.data.map((data: any) => {
                            const attributes:Activity = data.attributes;
                            return (
                                <div className="item" key={data.id}>
                                    <ActivityCard activity={attributes}/>
                                </div>
                            );
                        })
                    }
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}