# Sign-Up-Service-with-AWS
AWS Sign-Up Service: Streamlining User Registration with Email Notifications

In my recent project, I developed a robust sign-up service using various AWS technologies, aimed at providing a seamless user registration experience with automated email notifications. Leveraging the power of AWS API Gateway, Terraform, AWS DynamoDB, and AWS SES, I designed and implemented an efficient and scalable solution to handle user sign-ups and facilitate communication through email.

The AWS API Gateway acted as a reliable entry point, enabling smooth interaction between the user interface and the backend services. By leveraging Terraform, I provisioned and managed the necessary AWS resources, ensuring efficient deployment and maintenance of the infrastructure. This allowed for scalability and flexibility in handling varying levels of user registration demands.

To securely store user information, I utilized AWS DynamoDB, a NoSQL database service. DynamoDB provided a highly available and scalable storage solution, enabling efficient retrieval and management of user data. Leveraging DynamoDB's robust features, I implemented a data model that met the specific requirements of the sign-up service.

To enhance user experience and ensure timely communication, I integrated AWS SES (Simple Email Service) for automated email notifications. By leveraging SES's reliable email delivery infrastructure, I implemented a notification system that sent customized emails to users upon successful sign-up. This feature facilitated effective communication, keeping users informed and engaged throughout the registration process.

Throughout the project, I prioritized security, scalability, and performance. By leveraging AWS services, I ensured the system could handle increasing user registrations while maintaining optimal performance and data integrity. Additionally, I implemented appropriate security measures, such as encryption and access controls, to safeguard user data and ensure compliance with privacy regulations.

Overall, this project showcases my expertise in building robust and scalable sign-up services using AWS technologies. By leveraging AWS API Gateway, Terraform, AWS DynamoDB, and AWS SES, I successfully streamlined the user registration process and enabled effective communication through automated email notifications. I am excited to apply this experience and knowledge to future projects, leveraging AWS services to deliver innovative solutions that meet the needs of businesses and users alike.

# The Architecture
The cloud platform hosting the app is AWS. Hence , only AWS technologies were used for the app . The architecture used for the app is meant to be very affordable for the client . However, we also discussed the option of a highly perfromance architecture. The cost-optimized architecture is as follows:

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

# Security Considerations:
To ensure the security of the app and data, the following measures can be implemented:
1. Authentication and Authorization: Implement user authentication and authorization mechanisms to control access to the web app and its functionalities.
2. Encryption: Encrypt sensitive data both in transit and at rest using appropriate encryption methods, such as HTTPS for communication and encryption at the DynamoDB level.
3. Least Privilege Principle: Apply the principle of least privilege to IAM roles and policies associated with Lambda functions, restricting access to only necessary resources.
4. Monitoring and Logging: Enable CloudWatch logs and metrics to monitor and detect any unauthorized access attempts or suspicious activity.

# Project Timeline
 ### Week 1: Requirement gathering and architecture design, Setup and configuration of AWS services (DynamoDB, SES, CloudWatch).  
 ### Week 2: Development of the web app and Lambda functions for adding new records and sending notifications, Integration testing and security enhancements (authentication, encryption, logging).  
 ### Week 3: Performance testing and optimization, Deployment to production environment and final testing.  
 ### Week 4: Monitoring and fine-tuning based on real-world usage, Documentation and presentation preparation for Mr. Whyte to present to the CEO.  
 

# Running the app with Docker
1. Pull image from docker hub : docker pull kofihervie/finalapp
2. Run container
3. Sign up as user

![3D0A3D78-DE5B-4F74-B409-27E49E7BCD9E_1_105_c](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/fb89fa5a-409c-4099-adf2-f2ac6a4a175a)

4. Check email for confirmation message (only works for verified email since AWS SES is still in a sandbox envirionment)

![1163EF04-BDAA-47D4-B318-3AF2D0DBF793](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/73baf43c-3fad-4844-aa85-c540094dad26)

5. Sign in as admin. Link is below the sign up form

![62CB0DFE-1A2E-4708-BAD9-BC29FEDCD6E5_1_105_c](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/791d76ac-a338-48a6-be4e-2582b693aeb3)

6. Username: kofi Password: 1234.
7. Access the dashboard.

![73CDFB0F-41FF-461A-AAA3-2210317102B2](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/f176f18d-56e1-4336-82d4-ce9e7c9c9ef0)


# High Perfomance Solution ( 2nd Option )
## Description
In this high-performance solution, we utilize an Application Load Balancer to distribute traffic to multiple EC2 instances running the web app. The load balancer ensures scalability and high availability by automatically distributing incoming requests across the instances. Each EC2 instance is responsible for processing user requests and interacting with DynamoDB for data operations. Notifications on app activity can be triggered using SNS. The solution offers high performance by leveraging multiple EC2 instances to handle concurrent user requests.

## Key Components and Justification
1. Application Load Balancer: The load balancer distributes incoming traffic across multiple EC2 instances, ensuring scalability and high availability. It intelligently routes requests to healthy instances and provides fault tolerance.
2. EC2 Instances: The EC2 instances host the web app and handle user requests. Multiple instances can be deployed behind the load balancer to handle concurrent requests and improve performance.
3. DynamoDB: DynamoDB is used as the database for storing app data. It provides low-latency access, high scalability, and automatic data replication for improved performance.
4. Simple Notification Service (SNS): SNS can be used for sending notifications on app activity.
5. CloudWatch: CloudWatch is utilized for monitoring the system's performance, collecting logs, and generating metrics.

## Budget:
The cost of this solution is primarily driven by the usage of EC2 instances and DynamoDB storage. The number and type of EC2 instances, along with the read and write capacity units of DynamoDB, contribute to the cost. The high-performance nature of this solution may result in higher costs, as it requires maintaining and scaling EC2 instances.


## Architecture
![image](https://github.com/kaynert/-Sign-Up-Service-with-AWS/assets/18236391/40385a8d-1466-42e3-9c92-c2658c636102)








