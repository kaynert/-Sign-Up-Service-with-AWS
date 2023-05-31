# -Sign-Up-Service-with-AWS
This project is the final project for the Azubi AWS cloud training program. This project is about creating a user sign up service with AWS. It includes an admin sign in page and admin dashboard.

# The Architecture
The cloud platform hosting the app is AWS. Hence , only AWS technologies were used for the app . The architecture used for the app is meant to be very affordable for the client . The architecture is as follows:
![finalarchitecture review](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/c5a35f11-7a1d-4cdb-87f6-bb138ceca18a)

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
