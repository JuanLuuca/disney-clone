import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Pagina não encontrada</h1>
            <Link to="/"><button>Página inicial</button></Link>

        </div>
    );
};

export default NotFound;