import axios from "axios";
import { useState } from "react"

export default function Search() {
    const [value, setValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleChange = (e: { target: { value: string } }) => setValue(e.target.value)
    async function search() {
        console.log(value);
        setLoading(true);
        try {
            const result = await axios.get("https://api.adibeshgh.com/C/search/" + value)
            console.log(result.data.result);
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