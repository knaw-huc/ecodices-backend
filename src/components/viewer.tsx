import React from "react";
import Mirador from "./Mirador";
import {fromBase64} from "js-base64";

function Viewer() {

    //const id: string = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
    //const manifest = fromBase64(id);

    return (
     <div>
         <Mirador
             config={{
                 id: 'mirador',
                 window: {
                     allowFullscreen: false,
                     sideBarPanel: 'info',
                     hideWindowTitle: true,
                     sideBarOpen: true,
                     highlightAllAnnotations: true,
                     forceDrawAnnotations: true
                 },
                 windows: [
                     {
                         loadedManifest: "https://digitalcollections.universiteitleiden.nl/iiif_manifest/item%3A2356986/manifest",
                     },
                 ],
                 workspaceControlPanel: {
                     enabled: false,
                 },
             }}
             plugins={[]}
         />
     </div>
    )
}

export default Viewer;

