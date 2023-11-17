import { useEffect, useState } from "react";

export default function useFetchDestinations () {
    const [destinations, setDestinations] = useState([]);
    // Initially, set loading to true
    const [isLoading, setIsLoading] = useState(false); 
  
    useEffect(() => {
      async function fetchData() {
        try {
          setIsLoading(true);
          const res = await fetch('/db.json');
          const data = await res.json();
          setDestinations(data);
          // Set loading to false once data is loaded
          setIsLoading(false); 
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false); // Set loading to false in case of an error
        }
      }
  
      fetchData();
    }, []);
  
    return { destinations, isLoading };
}