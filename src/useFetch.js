import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [fetchData, setData] = useState(null);
  const [status, setStatus] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortControl = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortControl.signal })
      .then(response => {
        if(!response.ok){
          throw Error("not found");
        }
        return response.json();
      }).then(data => {
        setData(data);
        setStatus(false);
        setError(null);
      }).catch(err => {
        if (err.name === 'AbortError'){
          console.log("Aborted");
        }else{
          setStatus(false);
          setError(err.message);
        } 
      })
    }, 1000);

    return () => abortControl.abort();
  }, [url]);

  return { fetchData, status, error }
}

export default useFetch;