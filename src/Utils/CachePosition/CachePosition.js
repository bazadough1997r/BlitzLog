import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CachePosition = () => {
  const { loading } = useSelector(({ UsersReducer }) => ({
    loading: UsersReducer.loading,
  }));
  const [cacheData, setCacheData] = useState(0);

  const addDataIntoCache = (cacheName, url, response) => {
    const data = new Response(JSON.stringify(response));
    if ("caches" in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const getAllCacheData = async () => {
    var url = "http://localhost:3000" || "https://blitzlog.netlify.app/";
    var names = await caches.keys();
    const cacheStorage = await caches.open(names[0]);
    const cachedResponse = await cacheStorage.match(url);
    var data = await cachedResponse.json();
    setCacheData(parseInt(data));
  };

  getAllCacheData();

  const cache = () => {
    addDataIntoCache(
      "userScrollPosition",
      "http://localhost:3000" || "https://blitzlog.netlify.app/",
      window.pageYOffset
    );
  };
  
  window.onbeforeunload = cache;

  const afterFetching = useCallback(() => {
    if (loading) {
      window.scrollTo({
        top: cacheData,
        behavior: "smooth",
      });
    }
  }, [loading]);

  // useEffect(() => {
  //   window.onfocus = afterFetching();
  // }, [afterFetching]);

  return <></>;
};

export default CachePosition;
