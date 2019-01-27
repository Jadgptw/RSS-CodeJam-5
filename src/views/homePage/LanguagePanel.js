import React from 'react';
import '../homePage/styles/LanguagePanel.css'

function LanguagePanel(props){
    
    return (
        <ul className="LanguagePanel">
            <li className="LanguagePanelItem">EN</li>
            <li className="LanguagePanelItem">BY</li>
            <li className="LanguagePanelItem">RU</li>
        </ul>
    )
}

export default LanguagePanel;