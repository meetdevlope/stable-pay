import axios from "axios"

export const getConvertedData = async () => {
    try {
        const data = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr.json');
        return data.data['inr'];
    } catch (error) {
        return {};
    }
}