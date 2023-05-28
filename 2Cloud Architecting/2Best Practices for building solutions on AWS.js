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

anti-pattern
   * Over time, different servers end up with different configurations
   * Resources run when they’re not needed
   * Hardcoded IP addresses prevent flexibility
   * It can be difficult or inconvenient to test new updates on hardware that's in use

Best practice
   * Automate deployment of new resources with identical configurations
   * Terminate resources that are not in use
   * Switch to new IP addresses automatically
   * Test updates on new resources, and then replace old resources with updated ones

? 4.use loosely coupled components
Design architectures with independent components

anti pattern
Web servers tightly coupled to application servers

best practice
Decoupled with a load balancer
---------------
web servers
ec2   ec2   ec2
      ELB
ec2   ec2   ec2
application server
---------------
* => The example on the right shows a load balancer (in this case, an Elastic Load Balancing load balancer) that routes requests between the web servers and the application servers. If one application server goes down, the load balancer will automatically start directing all traffic to the two healthy servers

? 5. Design services, not servers
* use the breadth of AWS services. don't limit your infrastructure to server.

anti-pattern
   * Simple applications run on persistent servers
   * Applications communicate directly with one anothe
   * Static web assets are stored locally on instances
   * Backend servers handle user authentication and user state storage
best practice
   *  When appropriate, consider using containers or a serverless solution
   * Message queues handle communication between applications
   * Static web assets are stored externally, such as on Amazon Simple Storage Service (Amazon S3)
   * User authentication and user state storage are handled by managed AWS services

? 6. Choose the right database solution
match technology to the workload, not the other way around.
Things to consider:
   * Read and write needs
   * Total storage requirements
   * Typical object size and nature of access to these objects
   * Durability requirements
   * Latency requirements
   * Maximum concurrent users to support
   * Nature of queries
   * Required strength of integrity controls

? 7. Avoid single points of failure
ANTI PATTERN
* assume everithing fails. then design backward
* where possible, use redundancy to prevent single points from bringing down an entire system.

* => Where possible, eliminate single points of failure from your architecture. This doesn't mean that you must always duplicate every component. Depending on your downtime service-levelagreements (SLAs), you can use automated solutions that only launch components when needed. You can also use a managed service, where AWS automatically replaces malfunctioning underlying hardware for you.

* This simple system shows two application servers connected to a single database server. The database server represents a single point of failure and should be avoided. When it goes down, the application servers also go down

* Application servers should continue to function even if the underlying physical hardware fails, is removed, or replaced

BEST PRACTICE

ec2 => datbaase server == replication => database server secondary
* A common way to avoid single points of failure is to create a secondary (standby) database server and replicate the data. This way, if the main database server goes offline, the secondary server can pick up the load.

* In this example, when the main database goes offline, the application servers automatically send their requests to the secondary database. This example also exemplifies Best Practice #3: Treat resources as disposable, and design your applications to support changes in hardware. 

? 8. Optimize for cost
* Take advantage of the flexibility of AWS to increase your cost efficiency.
Things to consider:
   * Are my resources the right size and type for the job?
   * What metrics should I monitor?
   * How do I make sure to turn off resources that are not in use?
   * How often will I need to use this resource?
   * Can I replace any of my servers with managed services?

? 9. Use caching
Caching minimizes redundant data retrieval operations, improving performance and cost

* Cachingis a technique to make future requests faster and reduce network throughput by temporarily storing data in an intermediary location between the requester and the permanent storage.

* In the anti-pattern example, no caching service is used. When anyone requests a file from one of the Amazon Simple Storage Service (Amazon S3) buckets, each request takes the same amount of time to complete, and each request costs the same.

* In the best-practice-pattern example, the infrastructure uses Amazon CloudFront in front of Amazon S3 to providing caching.In this scenario, the initial request checks for the file in Amazon CloudFront. If it is not found, CloudFront requests the file from Amazon S3. CloudFront then stores a copy of the file at an edge location close to the user, and sends a copy to the user who made the request. Subsequent requests for the file are retrieved from the (now closer) edge location in CloudFront instead of Amazon S3.

* This reduces latency and cost because, after the first request, you no longer pay for the file to be transferred out of Amazon S3

? 10. Secure your entire infrastructure
Build Security into every layer of your infrastructure

Things to consider:
   * Isolate parts of your infrastructure
   * Encrypt data in transit and at rest
   * Enforce access control granularly, using the principle of least privilege
   * Use multi-factor authentication (MFA)
   * Use managed services
   * Log access of resources
   * Automate your deployments to keep security consistent

* => For example, in Amazon EC2, you can create security groups that allow you to determine which ports on your instances can send and receive traffic. Security groups can also determine where that traffic can come from or go to.

! KEY
? As you design solutions, evaluate tradeoffs and base your decisions on empirical data
? Follow these best practices when builing solution on AWS
   * Enable scalability
   * automate your environment
   * treat resources as disposable
   * use loosely-coupled components
   * design services, not servers
   * choose the right database solution
   * avoid single points of failure
   * optimize for cost
   * use caching
   * secure your entire infrastructure

*/

/*
Trade-off merupakan usaha untuk meningkatkan kualitas suatu aspek dengan mengurangi kualitas dari aspek lainnya

disposable => sekali pakai
underlying => mendasari
decoupled => dipisahkan
tightly coupled =>  digabungkan dengan erat
breadth => luasnya
persistent => continuing to do something or to try to do something even though it is difficult or other people want you to stop
*/