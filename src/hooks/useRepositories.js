import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true)

    // eslint-disable-next-line no-undef
    const response = await fetch("http://172.17.212.37:5000/api/repositories");
    const json = await response.json();


    setLoading(false)

    // eslint-disable-next-line no-undef
    console.log(json);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
