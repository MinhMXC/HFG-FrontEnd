export default function ActivityStatisticsRoute() {
    return (
        <div className="standard-container" style={{width: "900px", display: "flex", justifyContent: "center"}}>
            <div className="grid">
                <section style={{ marginRight: "50px" }}>
                    <h2 style={{ marginLeft: "30px" }}>Applications</h2>
                    <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="200" height="200"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-chart__background" stroke="#efefef" strokeWidth="2" fill="none"
                                cx="16.91549431" cy="16.91549431" r="15.91549431"/>
                        <circle className="circle-chart__circle" stroke="#00acc1" strokeWidth="2"
                                strokeDasharray="30,100" strokeLinecap="round" fill="none" cx="16.91549431"
                                cy="16.91549431" r="15.91549431"/>
                        <g className="circle-chart__info">
                            <text className="circle-chart__percent" x="16.91549431" y="15.5"
                                  alignmentBaseline="central" textAnchor="middle" fontSize="8">100
                            </text>
                            <text className="circle-chart__subline" x="16.91549431" y="20.5"
                                  alignmentBaseline="central" textAnchor="middle" fontSize="2">Applications Received
                            </text>
                        </g>
                    </svg>
                </section>

                <section style={{marginLeft: "50px"}}>
                <h2 style={{marginLeft: "30px"}}>Attendances</h2>
                    <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="200" height="200"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-chart__background" stroke="#efefef" strokeWidth="2" fill="none"
                                cx="16.91549431" cy="16.91549431" r="15.91549431"/>
                        <circle className="circle-chart__circle" stroke="#00acc1" strokeWidth="2"
                                strokeDasharray="30,100" strokeLinecap="round" fill="none" cx="16.91549431"
                                cy="16.91549431" r="15.91549431"/>
                        <g className="circle-chart__info">
                            <text className="circle-chart__percent" x="16.91549431" y="15.5"
                                  alignmentBaseline="central" textAnchor="middle" fontSize="8">30%
                            </text>
                            <text className="circle-chart__subline" x="16.91549431" y="20.5"
                                  alignmentBaseline="central" textAnchor="middle" fontSize="2">Attended
                            </text>
                        </g>
                    </svg>
                </section>
            </div>
        </div>
    )
}