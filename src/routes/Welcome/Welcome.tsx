import './Welcome.scss'
import React from "react";
import { Link } from 'react-router-dom';

export function Welcome() {

    return (
        <>
            <h1>Welcome</h1>
            <Link to="/studio">Launch studio</Link>
        </>
    )
}