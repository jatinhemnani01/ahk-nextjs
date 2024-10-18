import { useState, useEffect } from "react";

// Define the type for the fetch response, ensuring T is always an array
interface UseFetchResult<T extends any[]> {
  data: T | null;
  loading: boolean;
  error: boolean;
}

const useFetch = <T extends any[]>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
          setError(true);
        }
        const result: T = await response.json();

        if (result.length === 0) {
          // If result is empty, set the data as an empty array or empty result
          setData(result);
        } else {
          // Merge the existing data with the new fetched result
          setData((prevData) => {
            if (!prevData) return result; // If no previous data, set the new result
            return [...prevData, ...result] as T; // Merge and cast the result as T
          });
        }
      } catch (error) {
        setError(true); // Set error to true if an error occurs
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
