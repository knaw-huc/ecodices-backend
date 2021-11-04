import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./components/search";
import Manuscript from "./components/manuscript";
import {StateMachineComponent} from "./renderMachine";
import {interpret} from "xstate";
import {EcodicesMachine} from "./machine/ecodices";
import './assets/css/style.css';
import Viewer from "./components/viewer";


const interpreter = interpret(EcodicesMachine);
interpreter.start();

gotoUrl();

function gotoUrl() {
    if (window.location.hash.substr(1).indexOf("detail/") === 0) {
        const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
        interpreter.send("fourOhFour"); //Filthy solution for forcing props reload!!!
        interpreter.send("detail", {manuscript_id: id});
    } else {
        if (window.location.hash.substr(1).indexOf("search") === 0) {
            if (window.location.hash.substr(1).length > 6 && window.location.hash.substr(1).indexOf("search") !== -1) {
                const id = window.location.hash.substr(window.location.hash.indexOf("/") + 1);
                interpreter.send("search", {search_string: id});
            } else {
                const id = "none";
                interpreter.send("search", {search_string: id});
            }
        } else {
            if (window.location.hash.substr(1).indexOf("viewer") === 0) {
                interpreter.send("viewer");
            } else {
                const id = "none";
                interpreter.send("search", {search_string: id});
            }

        }
    }
}

window.onhashchange = gotoUrl;




ReactDOM.render(
    <div>
        {StateMachineComponent(interpreter, {
            "detail": ({state}) => <Manuscript manuscriptID={(state.context || {}).manuscript_id}/>,
            "search": ({state}) => <Search  search_string={(state.context || {}).search_string}/>,
            "viewer": () => <Viewer/>,
            "fourOhFour": ({state}) => <div>404</div>,
            "": ({state}) => <div>The GUI for {state.value} is not yet defined</div>
        })}</div>
    , document.getElementById('root'));



