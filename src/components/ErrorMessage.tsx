import { error } from "console";
import React from "react";

interface ErrorProps{
    error: string
}

export function ErrorMessage({error}:ErrorProps){
    return(
        <p className="Error"> {error}</p>
    )
}