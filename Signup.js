import axios from 'axios';

const signup = async () => {
  try {
    const response = await axios.post('https://app.signalgas.io/api/v1/customer/signup', {
      fname: 'Tom',
      lname: 'Bhonzo',
      country_id: 1,
      phone: '0777777777777',
      email: 'tom@gmail.com',
      password: '123'
    });
    console.log(response.data); // Handle the response data
  } catch (error) {
    console.error(error); // Handle any errors
  }
};

export default signup;