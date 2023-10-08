import axios from "axios";
import { useState } from "react"
import { SearchRepository, SearchResult } from "../store/store";

export default function Search() {
    const [value, setValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleChange = (e: { target: { value: string } }) => setValue(e.target.value)

    const repo =  new SearchRepository();
    async function search() {
        console.log(value);
        setLoading(true);
        try {
            const results = (await axios.get("https://api.adibeshgh.com/C/search/" + value)).data.result as SearchResult[]
            repo.updateResults(results);
        } catch (e) {
            console.error("couldn't fetch the results")
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div>
                <input placeholder="Search" value={value} onChange={(e) => handleChange(e)} />
                <button onClick={search}>Go</button>
            </div>
            {loading ?
                <div>Loading...</div>
                : <></>}
        </>
    )
}