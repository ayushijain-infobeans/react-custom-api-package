import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useCustomHook = (token) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchOptions = {
      headers: {},
    };
  
    if (token) {
      fetchOptions.headers.Authorization = `Bearer ${token}`;
    }
  
    const fetchData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url, fetchOptions);

        if (!response.ok) {
          setError(response.status);
          if (response.status === 401) {
            toast.error("Unauthorized - Please log in again.");
          } else if (response.status === 404) {          
          toast.error("Resource not found.");
          } else if (response.status === 500) {
            toast.error("Internal Server Error.");
          } else {
            toast.error("An error occurred. Please try again later.");
          }
        }else {
          const data = await response.json();
          setData(data);
          setLoading(false);
        }
   
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    const handleCRUD = async (endpoint, method, body) => {
      try {
        setLoading(true);
        const response = await fetch(endpoint, {
          ...fetchOptions,
          method,
          headers: {
            ...fetchOptions.headers,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          if (response.status === 401) {
            toast.error("Unauthorized - Please log in again.");  
            setError();
          } else if (response.status === 404) {
            toast.error("Resource not found.");
          } else if (response.status === 500) {
            toast.error("Internal Server Error.");
          } else {
            toast.error("An error occurred. Please try again later.");          }
        } else {
          if (response.status === 200) {
            setLoading(false);
          }
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    return { data, loading, error, handleCRUD, fetchData };
}

export default useCustomHook