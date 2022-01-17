import HttpClient from 'config/httpClient';
import ApiSettings from 'settings/api.settings';

export const getApiCities = async () => {
    const response = await HttpClient.get(ApiSettings.ENDPOINT_CITIES)
    if (response.data) return await response.data
    else return {}
};
