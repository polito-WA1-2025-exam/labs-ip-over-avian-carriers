import axios from 'axios';
const APIURL = 'http://localhost:3000';

async function getProteins() {
    try {
      const response = await axios.get(`${APIURL}/proteins`);
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching proteins:', error);
      throw error; // Re-throw the error for further handling
    }
  }
  
  async function getIngredients() {
    try {
      const response = await axios.get(`${APIURL}/ingredients`);
      return response.data; // Axios automatically parses JSON
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      throw error; // Re-throw the error for further handling
    }
  }

export { getProteins, getIngredients };