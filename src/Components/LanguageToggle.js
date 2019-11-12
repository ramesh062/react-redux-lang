import React from 'react';
import { withLocalize } from 'react-localize-redux';
import englishFlag from '../gb.svg';
import hindiFlag from '../in.svg';

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => (
    <li className="nav-item dropdown language">
        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {(activeLanguage ? (activeLanguage.code === 'en' ? <img src={englishFlag} height="15px" alt="English flag" /> : '') : '')}
            {(activeLanguage ? (activeLanguage.code === 'hd' ? <img src={hindiFlag} height="15px" alt="India flag" /> : '') : '')}
        </button>
        <div className="dropdown-menu dropdown-menu-right">
            <div className="nav-item" onClick={() => setActiveLanguage("en")}>
                <img src={englishFlag} height="15px" alt="English flag" className="px-2" />
                <span className="px-2">Egnlish</span>
            </div>
            <div className="dropdown-divider"></div>
            <div className="nav-item" onClick={() => setActiveLanguage("hd")}>
                <img src={hindiFlag} height="15px" alt="Denish flag" className="px-2" />
                <span className="px-2">Hindi</span>
            </div>
        </div>
    </li>
);

export default withLocalize(LanguageToggle);