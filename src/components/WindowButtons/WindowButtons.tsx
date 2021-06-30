import './WindowButtons.scss';
import React from "react";

export function WindowButtons() {
    return (
        <div className="window-buttons">
            <span className="button button--close"></span>
            <span className="button button--minimize"></span>
            <span className="button button--maximize"></span>
        </div>
    )
}