import axios from 'axios';

export const getAllSIM = async () => {
    try {
        const response = await axios.get(`/data/sim`);
        return response.data;
    } catch (err) {
        console.error('Error fetching SIM data:', err);
        throw err;
    }
};

export const getSIMById = async (id) => {
    try {
        console.log('Getting SIM with ID:', id); // Debug log
        const response = await axios.get(`/data/sim/${id}`);
        return response.data;
    } catch (err) {
        console.error(`Error getting SIM ${id}:`, err);
        throw err;
    }
};

export const createSIM = async (data) => {
    try {
        const response = await axios.post(`/data/sim`, data);
        return response.data;
    } catch (err) {
        console.error('Error creating SIM:', err);
        throw err;
    }
};

export const updateSIMById = async (id, data) => {
    try {
        console.log('Updating SIM with ID:', id, 'Data:', data); // Debug log
        const response = await axios.put(`/data/sim/${id}`, data);
        return response.data;
    } catch (err) {
        console.error(`Error updating SIM ${id}:`, err);
        throw err;
    }
};

export const deleteSIMById = async (id) => {
    try {
        console.log('Deleting SIM with ID:', id); // Debug log
        const response = await axios.delete(`/data/sim/${id}`);
        return response.data;
    } catch (err) {
        console.error(`Error deleting SIM ${id}:`, err);
        throw err;
    }
};