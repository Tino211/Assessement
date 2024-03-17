# Assessement
This is an assessment project where l was supposed to consume the provided endpoints in the question and l used React.js and Spring Boot to do so..
Because of the limited time l had l could not solve one error that was showing on my react.js froend page. But basically l used the react.js to consume the provided endpoints. First step is to create the react.js folder, install the depencies which you will be using for my case some of the dependencies l was making use of are axiom, https, util etc. l then created the Login, Signup, Allproducts and AllCurrencies in the src folder and to link the pages l created the Home.js page which has all the links and had to install the react-route-dom dependency which enables the links. So the main code you find it in the src folder which is inside the interview folder which is inside the root folder Assessment. Could not do the backend using springboot because of time but below is what should be done in the backennd: In Sppringboot l use RestTemplate to make Http requests: 
LOGIN.Java

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class LoginExample {
  public static void main(String[] args) {
    RestTemplate restTemplate = new RestTemplate();

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);

    String url = "https://app.signalgas.io/api/v1/customer/signin";
    String requestBody = "{\"email\":\"<email-here>\",\"password\":\"<password-here>\"}";
    HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

    ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
    System.out.println(response.getBody()); // Handle the response body
  }
}









