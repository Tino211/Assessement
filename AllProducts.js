import axios from 'axios';

const getAllProducts = async () => {
  try {
    const response = await axios.get('https://app.signalgas.io/api/v1/products', {
      headers: {
        Authorization: 'Bearer 344|tw8yf1x76acIyuIXncYTgDTlmoRquuCjFqwpsYeXaa0f305b'
      }
    });
    console.log(response.data); // Handle the response data
  } catch (error) {
    console.error(error); // Handle any errors
  }
};
export default getAllProducts;