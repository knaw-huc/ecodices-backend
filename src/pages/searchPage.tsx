import React from 'react';
import PageHeader from "../pageElements/pageHeader";
import PageFooter from "../pageElements/pageFooter";
import Search from "../components/search";

function SearchPage() {
    return (
        <div>
            <PageHeader />
            <Search/>
            <PageFooter />
        </div>
    )
}
export default SearchPage;