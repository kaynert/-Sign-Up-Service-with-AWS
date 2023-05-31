# -Sign-Up-Service-with-AWS
This project is the final project for the Azubi AWS cloud training program. This project is about creating a user sign up service with AWS. It includes an admin sign in page and admin dashboard.

# The Architecture
The cloud platform hosting the app is AWS. Hence , only AWS technologies were used for the app . The architecture used for the app is meant to be very affordable for the client .However, we also discussed the option of a highly perfromant architecture. The cost-optimized architecture is as follows:

![image](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/cc8bf51d-9578-4362-a38e-b6d20e5255d8)

1. User enters details on the form.
2. Details on the form pass through AWS API Gateway to AWS Lambda.
3. AWS Lambda handles the email service and database insertions upon a successful registration.
4. AWS Lambda sends an email notification to the users email when registration is successful .
5. AWS Lambda sends all user entries into dynamodb. 

In this cost-optimized solution, we leverage AWS Lambda functions for the web app's functionality. The web app is responsible for handling user requests and interactions. When a user adds a new record, the web app invokes a Lambda function to process the request. The Lambda function interacts with DynamoDB to add the new record and can also trigger notifications using Simple Email Service (SES) based on app activity. The system's performance is optimized by utilizing serverless functions, which scale automatically based on demand.


# Technologies Used
1. Terraform
2. AWS DynamoDb
3. AWS SES
4. AWS API Gateway
5. AWS Lambda
6. AWS SDK
7. Docker 

#Security Considerations:
To ensure the security of the app and data, the following measures can be implemented:
1. Authentication and Authorization: Implement user authentication and authorization mechanisms to control access to the web app and its functionalities.
2. Encryption: Encrypt sensitive data both in transit and at rest using appropriate encryption methods, such as HTTPS for communication and encryption at the DynamoDB level.
3. Least Privilege Principle: Apply the principle of least privilege to IAM roles and policies associated with Lambda functions, restricting access to only necessary resources.
4. Monitoring and Logging: Enable CloudWatch logs and metrics to monitor and detect any unauthorized access attempts or suspicious activity.

#Project Timeline
1. Week 1: Requirement gathering and architecture design.
2. Week 2: Setup and configuration of AWS services (DynamoDB, SES, CloudWatch).
3. Week 3: Development of the web app and Lambda functions for adding new records and sending notifications.
4. Week 4: Integration testing and security enhancements (authentication, encryption, logging).
5. Week 5: Performance testing and optimization.
6. Week 6: Deployment to production environment and final testing.
7. Week 7: Monitoring and fine-tuning based on real-world usage.
8. Week 8: Documentation and presentation preparation for Mr. Whyte to present to the CEO.

#Running the app with Docker
1.Pull image from docker hub : docker pull kofihervie/finalapp
2. Run container
3. Sign up as user

![3D0A3D78-DE5B-4F74-B409-27E49E7BCD9E_1_105_c](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/fb89fa5a-409c-4099-adf2-f2ac6a4a175a)

5. Check email for confirmation message . only works for verified email since AWS SES is still in a sandbox envirionment
6. Sign in as admin. Link is below the sign up form
7. Username: kofi Password: 1234.
8. Access the dashboard. 




