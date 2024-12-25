export const useCache = (key: string) => {
    const getCache = () => {
        const cachedData = localStorage.getItem(key);
        return cachedData ? JSON.parse(cachedData) : null;
    };

    const setCache = (data: any) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    return { getCache, setCache };
};
