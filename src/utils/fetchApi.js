import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '713f7536d6msh175d2b3677bbed6p162f3ajsn363d8c68869d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
};