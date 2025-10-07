import axios from "axios";
import { useEffect, useState } from "react"

const useData = () => {
    const [appData, setAppData] = useState([]);
    console.log(appData);

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('/appData.json')
            .then(data => setAppData(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { appData, loading, error }
}
export default useData;