import React from 'react';
import logo from '../assets/img/logo-data-huygensing.png';

function PageHeader() {
    return (
        <div>
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom1">
                <header className=" hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo">
                            <img src={logo} className="logo"/>
                        </div>
                    </div>

                    <nav>
                        <a href="">About</a>
                    </nav>
                </header>
            </div>
            <div className="hcContentContainer hcMarginBottom5 hcBorderBottom">
                <div className="hcBarDataset hcBasicSideMargin">
                <span>
                <span className="hcSmallTxt hcTxtColorGreyMid">Dataset</span>
                    <select className="" name="">
                        <option value="">Manuscripts eCodices NL</option>
                    </select>
                </span>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;