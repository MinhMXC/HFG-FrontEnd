import React, {useEffect, useState} from 'react';
import ActivityCard from "../components/ActivityCard";
import '../App.css'
import fetchWithAuth from "../helpers/fetchWithAuth";
import FetchResponse from "../interfaces/FetchResponse";

async function fetchData() {
    try {
        const response = await fetchWithAuth("/activities", 'GET');
        console.log('Data fetched', response);
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function MainPage() {
    const [data, setData] = useState<FetchResponse | undefined>(undefined);

    useEffect(() => {
        const fetchDataAsync = async () => {
            const result = await fetchData();
            setData(result);
        };

        fetchDataAsync().then();
    }, []);
    return (
        <>
            <div className="activities-list">
                <div className="item">
                    {data !== undefined ? (

                        <div>
                            <ActivityCard id={data.data[0].id} title={data.data[0].attributes.title}
                                          overview={data.data[0].attributes.overview}
                                          body={data.data[0].attributes.body} image={data.data[0].attributes.image}
                                          manpower_needed={data.data[0].attributes.manpower_needed}
                                          location={data.data[0].attributes.location}
                                          time_start={data.data[0].attributes.time_start}
                                          time_end={data.data[0].attributes.time_end}
                                          created_at={data.data[0].attributes.created_at}
                                          updated_at={data.data[0].attributes.updated_at}

                            />
                            <p>Status: {data.status}</p>
                            <p>Response Code: {data.response_code}</p>
                            <p>{data.data[0].id}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="item">
                    {data !== undefined ? (

                        <div>
                            <ActivityCard id={data.data[0].id} title={data.data[0].attributes.title}
                                          overview={data.data[0].attributes.overview}
                                          body={data.data[0].attributes.body} image={data.data[0].attributes.image}
                                          manpower_needed={data.data[0].attributes.manpower_needed}
                                          location={data.data[0].attributes.location}
                                          time_start={data.data[0].attributes.time_start}
                                          time_end={data.data[0].attributes.time_end}
                                          created_at={data.data[0].attributes.created_at}
                                          updated_at={data.data[0].attributes.updated_at}

                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
                <div className="item">
                    {data !== undefined ? (

                        <div>
                            <ActivityCard id={data.data[0].id} title={data.data[0].attributes.title}
                                          overview={data.data[0].attributes.overview}
                                          body={data.data[0].attributes.body} image={data.data[0].attributes.image}
                                          manpower_needed={data.data[0].attributes.manpower_needed}
                                          location={data.data[0].attributes.location}
                                          time_start={data.data[0].attributes.time_start}
                                          time_end={data.data[0].attributes.time_end}
                                          created_at={data.data[0].attributes.created_at}
                                          updated_at={data.data[0].attributes.updated_at}

                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="item">
                    {data !== undefined ? (

                        <div>
                            <ActivityCard id={data.data[0].id} title={data.data[0].attributes.title}
                                          overview={data.data[0].attributes.overview}
                                          body={data.data[0].attributes.body} image={data.data[0].attributes.image}
                                          manpower_needed={data.data[0].attributes.manpower_needed}
                                          location={data.data[0].attributes.location}
                                          time_start={data.data[0].attributes.time_start}
                                          time_end={data.data[0].attributes.time_end}
                                          created_at={data.data[0].attributes.created_at}
                                          updated_at={data.data[0].attributes.updated_at}

                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="item">
                    {data !== undefined ? (

                        <div>
                            <ActivityCard id={data.data[0].id} title={data.data[0].attributes.title}
                                          overview={data.data[0].attributes.overview}
                                          body={data.data[0].attributes.body} image={data.data[0].attributes.image}
                                          manpower_needed={data.data[0].attributes.manpower_needed}
                                          location={data.data[0].attributes.location}
                                          time_start={data.data[0].attributes.time_start}
                                          time_end={data.data[0].attributes.time_end}
                                          created_at={data.data[0].attributes.created_at}
                                          updated_at={data.data[0].attributes.updated_at}

                            />
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default MainPage;