import axios from 'axios';

// Создаем экземпляр axios для работы с PokeAPI
const axiosClient = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/', // Базовый URL API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
