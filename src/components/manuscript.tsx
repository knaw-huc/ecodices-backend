import React from "react";
import PageHeader from "../pageElements/pageHeader";

function Manuscript(props: { manuscriptID: string }) {
    return (
        <div>
            <PageHeader/>
            <div className="hcContentContainer">
                <div className="hcStackFormItems">
                    <div className="hcLabel">Birth</div>
                    <div className="hcMarginBottom1">1851<br/>
                        Dordrecht</div>

                    <div className="hcLabel">Death</div>
                    <div className="hcMarginBottom1">1929<br/>
                    </div>

                    <div className="hcLabel">Gender</div>
                    <div className="hcMarginBottom1">male</div>

                    <div className="hcLabel">Short bio</div>
                    <div className="hcMarginBottom1">Jan Boeke was born in 1874 in Hengelo. He attended the gymnasium in
                        Utrecht and in 1894 he went to study medicine in Amsterdam. As a third year student he won a
                        gold medal that the Amsterdam Medical Faculty had put up for the best answer to the prize
                        question Over de invloed van aethyl-alcohol op het hart, met name op de hartspier. After sitting
                        his medical finals in 1900, Boeke left for the Zoological Station (Deep Sea Institute) in Naples
                        to study the development of muraenoids. With the publication arising from this, De
                        ontwikkelingsgeschiedenis der muraenoieden he firmly established his name as a zoologist. Back
                        in the Netherlands he assisted professor Thomas Place at the Physiological laboratory in
                        Amsterdam and after one year he gained his doctorate under Place for his thesis Bijdrage tot de
                        pharmacologie van het hart, a more detailed version of his answer to the prize question. Back in
                        Naples, he became acquainted with the famous Hungarian professor Stefan Apáthy, expert in the
                        area of the anatomy and histology of nervous tissue. He taught Boeke about the problems and
                        methods of research in this area. Fur thermore, Boeke was his guest for four months in his
                        laboratory in Kolozsvar Hungary. Back in Amsterdam Boeke worked for a shor t period at the
                        Histology Depar tment of the Physiology Laboratory, but he soon left the university to accept a
                        position as first assistant at the newly founded Rijksinstituut voor Onderzoek der Zee [National
                        Institute for Marine Research] in Den Helder. From there he took part in a number of fishing
                        investigations on the Nor th Sea and the Caribbean Sea.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Manuscript;