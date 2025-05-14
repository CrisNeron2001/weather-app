import { useState } from "react";

export const useStateWeather = () => {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);

    return { weather, setWeather, loading, setLoading };
}