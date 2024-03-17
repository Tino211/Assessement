import axios from 'axios';

const login = async () => {
  try {
    const response = await axios.post('https://app.signalgas.io/api/v1/customer/signin', {
      email: '<email-here>',
      password: '<password-here>'
    });
    console.log(response.data); // Handle the response data
  } catch (error) {
    console.error(error); // Handle any errors
  }
};

export default login;