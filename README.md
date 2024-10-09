# manhwa-project

This project contains a CloudFormation template for deploying a Node.js web application inspired by the "50 Best Fantasy Manhwa You Must Read Now" article. The application will display a list of manhwa titles, genres, and descriptions, and it is designed to scale automatically based on traffic and CPU utilization.


Features
1. Auto-scaling based on CPU utilization (threshold: 70%).
2. Deployment of EC2 instances using a Launch Template.
3. Load Balancer configuration for distributing traffic across instances.
4. Monitoring with CloudWatch Alarms.
5. Security groups configured for HTTP and SSH access.
6. HTTPS-enabled communication with a load balancer (requires an SSL certificate).

   
Prerequisites

AWS Account with access to EC2, CloudFormation, Auto Scaling, and CloudWatch.
A Key Pair for SSH access to the EC2 instance.
AMI ID for the EC2 instance (Amazon Linux 2 recommended).
Subnet and VPC information to launch instances and other AWS resources.
Basic knowledge of AWS services like EC2, CloudFormation, and Auto Scaling.
