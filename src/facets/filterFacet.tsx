import React, {useState, useEffect} from "react";
import {IFacetValues, ISendCandidate} from "../misc/interfaces";
import {SERVICE_SERVER} from "../misc/config";

function FilterFacet(props: {parentCallback: ISendCandidate, label: string, field: string, min: number, max: number}) {
    const [length, setLength] = useState(props.min);
    const [data, setData] = useState<IFacetValues[]>([]);
    const [refresh, setRefresh] = useState(true);
    const [loading, setLoading] = useState(true);
    const [short, setShort] =  useState(true);
    const [filter, setFilter] = useState("");

    async function fetchData() {
        const url = SERVICE_SERVER + "filter-facet?name=" + props.field + "&amount=" + length + "&filter=" + filter;
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        if (e.currentTarget.value.length > 0) {
            setFilter(e.currentTarget.value);
            setRefresh(!refresh);
        }
    }

    useEffect(() => {
        fetchData();
    }, [refresh]);

    return ( <div className="hcFacet">
            <div className="hcFacetTitle">
                <span>{props.label}</span>
            </div>
            <div className="hcFacetFilter"><input type="text" name="" onChange={handleChange} id="shipMasterFilter"
                                                  placeholder="Type to filter"/></div>
            <div className="hcFacetItems">
                {loading ? (
                    <div className="hcFacetItem">
                        Loading...
                    </div>
                ) : (
                    <div>
                        {data.map((item) => {
                            return (
                                <div className="hcFacetItem" onClick={() => props.parentCallback({
                                    facet: props.label,
                                    field: props.field,
                                    candidate: item.key
                                })}>
                                    {item.key} <span className="hcFacetCount">{item.doc_count}</span>
                                </div>
                            )
                        })}

                    </div>

                )}

                {short ? (
                    <div className="hcClickable" onClick={() => {
                        setLength(props.max);
                        setShort(false);
                        setRefresh(!refresh);
                    }}>More</div>
                ) : (<div className="hcClickable" onClick={() => {
                    setLength(props.min);
                    setShort(true);
                    setRefresh(!refresh);
                }}>Less</div>)}

            </div>
        </div>
    )
}

export default FilterFacet;