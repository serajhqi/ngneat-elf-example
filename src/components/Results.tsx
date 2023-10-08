import { useEffect, useState } from "react";
import { SearchRepository, SearchResult } from "../store/store"
import { useObservable } from "@ngneat/react-rxjs";

export default function Results(){
    const repo = new SearchRepository();
    const [result] = useObservable(repo.results$);
    return (
        <>
            <div>
                Hello from the <b>Results</b> component
            </div>
            {result?.map((value) => 
                <div key={value.ID}>
                    <b>{value?.Title}</b><br></br>
                    {value?.Description}
                </div>)}
        </>
    )
}