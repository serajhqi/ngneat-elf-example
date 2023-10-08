import { useEffect, useState } from "react";
import { SearchRepository, SearchResult } from "../store/store"

export default function Results(){
    const [result, setResult] = useState<SearchResult[] | null>(null);    
    useEffect(()=>{
        const repo = new SearchRepository();
        repo.results$.subscribe((value)=> setResult(value))
    },[])
    return (
        <>
            <div>
                Hello from the <b>Results</b> component
            </div>
            {result?.map((value) => 
                <div>
                    <b>{value?.Title}</b><br></br>
                    {value?.Description}
                </div>)}
        </>
    )
}