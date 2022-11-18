import React from 'react';
import RouteListWrapper from "./RouteListWrapper";

const GrammarWrapper = () => {

    return (
        <div>
            <RouteListWrapper isGrammar={true} mainUrl={"/grammar_route"} title={"Grammar route"}/>
        </div>
    );
};

export default GrammarWrapper;