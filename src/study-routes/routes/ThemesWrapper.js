import React from 'react';
import RouteListWrapper from "./RouteListWrapper";

const ThemesWrapper = () => {

    return (
        <div>
            <RouteListWrapper isGrammar={false} mainUrl={"/themes_route"} title={"Themes route"}/>
        </div>
    );
};

export default ThemesWrapper;