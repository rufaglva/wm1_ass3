import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: boolean;
  refetch: () => void;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (e: any) {
      setError(true); // Fix: Set error to true in case of an error
      toast.error(e?.message ?? e?.data?.message);
      throw new Error(e);
    }
  }, [url]);

  const refetch = useCallback(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getData();
  }, [getData, url]);

  return { data, loading, error, refetch };
}

export default useFetch;
