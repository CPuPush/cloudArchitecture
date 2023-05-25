/*
! Best practices for building solutions on AWS\

? Design Tradeoffs
   * Evaluate tradeoffs so you can select an optimal approach
   * Example of tradeoffs include:
      * Trade consistency, durability, and space for time and latency to deliver higher performance
      * Prioritize speed to market of new features over cost
   * base design decisioins on empirical data

* => As you design a solution, think carefully about tradeoffs so that you can select an optimal approach. For example, you might trade consistency, durability, and space for time and latency to deliver higher performance. Or, you might prioritize speed to market over cost.

* Tradeoffs can increase the cost and complexity of your architecture, so your design decisions should be based on empirical data. 

* For example, you might need to perform load testing to ensure that a measurable benefit is obtained in performance. Or, you might need to perform benchmarking to achieve the most cost-optimal workload over time. When you evaluate performance-related improvements, you will also want to consider how your architecture design choices will impact customers and workload efficiencies.

todo  => In this section, you will learn about best practices for designing solutions on AWS. You will also learn about anti-patterns (or bad solution designs) to avoid

? 1. Enable Scalability
TODO  Anti-Pattern
Ensure that your architecture can handle changes in demand.

user cannot access application =====> application servers at full capacity
new server takes time to launch <=== administrator manually launches new server 

* => When you run your workloads on the AWS Cloud, you can scale your infrastructure quickly and proactively. Make sure that you implement scalability at every layer of your infrastructure.

* To understand the importance of scalability, consider this anti-pattern, where scaling is done reactively and manually.

* In this scenario, when application servers reach full capacity, users are prevented from accessing the application.Administrators then manually launch one or more new instances to manage the load. Unfortunately, it takes a few minutes for an instance to become available for use after it’s launched.That increases the time that users can’t access the application.

Ensure that your architecture can handle changes in demand
TODO Best Practice
Users never experience a service interruption=> application servers at alarm threshold

new server is ready before capacity is reached => Amazon Ec2 auto scaling is alerted and scales out

* => By enabling scalability, you can improve your design to anticipate the need for more capacity and deliver it before it's too late

* For example, you can use a monitoring solution like Amazon CloudWatch to detect whether the total load across your fleet of servers has reached a specified threshold. You can define this threshold to be Stayed above 60% CPU utilization for longer than 5 minutes, or anything related to the use of resources. With CloudWatch, you can also design custom metrics based on specific applications that can trigger the resource scaling that is required.

* When an alarm is triggered, Amazon EC2 Auto Scaling immediately launches a new instance. That instance is then ready before capacity is reached, which provides a seamless experience for users.

* Ideally, you should also design your system to scale in when demand drops off so that you're not running (and paying for) instances that you no longer need

? 2. Automate your environment
Where possible, automate the provisioning, termination, and configuration of resources.

* => AWS offers built-in monitoring and automation tools at virtually every layer of your infrastructure. Take advantage of these tools to ensure that your infrastructure can respond quickly to changes. You can use tools like CloudWatch and Amazon EC2 Auto Scaling to detect unhealthy resources and automate the launch of replacement resources. You can also be notified when resource allocations change.

? 3.Treat resources as dispsable
Take advantage of the dynamically provisioned nature of cloud computing.
*/

/*
Trade-off merupakan usaha untuk meningkatkan kualitas suatu aspek dengan mengurangi kualitas dari aspek lainnya

disposable => sekali pakai
*/