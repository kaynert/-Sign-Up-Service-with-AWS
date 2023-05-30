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

# Technologies Used
1. 
