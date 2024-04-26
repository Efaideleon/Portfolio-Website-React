import * as Papa from 'papaparse';
import { useState, useEffect } from 'react';

export function useFetchCSVData<T>(url: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const text = await response.text();
          const result = Papa.parse(text, { header: true });
          setData(result.data as T[]);
        } catch (err) {
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, loading, error };
}