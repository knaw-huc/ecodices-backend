import React, {useState, useEffect} from "react";
import PageHeader from "../pageElements/pageHeader";
import {EDITOR, HOME, SERVICE_SERVER} from "../misc/config";
import {IResult} from "../misc/interfaces";
import Viewer from "./viewer";
import {fromBase64} from "js-base64";

function Detail(props: {id: string}) {
    const item:IResult = JSON.parse(fromBase64(props.id));
    //const [item, setItem] = useState<IResult>(buffer);

    return (
        <div>
            <PageHeader/>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin hcMarginTop4 hcMarginBottom1">
                    <h1>{item.title}</h1>
                    <div className="hcFormStack hcMarginBottom3 hcBasicSideMargin">
                        <div className="hcStackInfo">
                            <div className="hcClickable" onClick={() => {
                                window.open(HOME + "tei_files/" + item.xml.charAt(0) + "/" + item.xml, "new");
                            }}>Show TEI file</div>
                            <div className="hcClickable" onClick={() => {
                                window.open(EDITOR + item.xml.replace(".xml", ""));
                            }}>Edit</div>
                            <div className="hcClickable" onClick={() => window.open(HOME + "#viewer") }>View IIIF</div>
                            <div className="hcClickable" onClick={() => {window.history.back()}}>Back</div>
                        </div>
                        <div className="hcStackFormItems">
                            <div className="hcLabel">Original place</div>
                            <div className="hcMarginBottom1">{item.place}</div>

                            <div className="hcLabel">Original date</div>
                            <div className="hcMarginBottom1">{item.origDate}<br/>
                            </div>

                            <div className="hcLabel">Shelfmark</div>
                            <div className="hcMarginBottom1">{item.shelfmark}<br/>
                            </div>

                            <div className="hcLabel">Title</div>
                            <div className="hcMarginBottom1">{item.title}<br/>
                            </div>

                            <div className="hcLabel">Summary</div>
                            <div className="hcMarginBottom1">{item.summary}<br/>
                            </div>

                            <div className="hcLabel">Layout</div>
                            <div className="hcMarginBottom1">{item.layout}<br/>
                            </div>

                            <div className="hcLabel">TEI file</div>
                            <div className="hcMarginBottom1">{item.xml}</div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Detail;