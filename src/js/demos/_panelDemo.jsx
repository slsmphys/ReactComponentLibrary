import React from "react";

import Panel from "../components/Panel";

const PanelDemo = () => {
    const getFooterContent = () => <button>Test</button>;
    
    const getContent = () => <h2>Content</h2>

    return (<Panel
        title="Panel Demo"
        subtitle="Test"
        panelContent={getContent()}
        footerContent={getFooterContent}
    />);
};

export default PanelDemo;
