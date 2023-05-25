/*
! What is cloud architecting
what is cloud architecture? Cloud architecture is the practice of applying cloud characteristics to a solution that uses cloud services and features to meet an organization’s technical needs and business use cases. A solution is similar to a blueprint for a building.

Software systems require architects to manage their size and complexity.

Cloud Architect:
   * Engage with decision makers to identify the business goals and the capabilities that need improvemen
   * Ensure alignment between technology deliverables of a solution and the business goals
   * Work with delivery teams that are implementing the solution to ensure that the technology features are appropriate

! The AWS Well Architected Framework
   * Operational Excellence
   * security
   * reliability
   * performance efficiency
   * Cost optimization 
   * sustainability

* => The AWS Well-Architected Framework is a guide that provides a consistent approach to evaluate cloud architectures, and guidance to help implement designs.

* It documents a set of foundational questions and best practices that enable you to understand if a specific architecture aligns well with cloud best practices. AWS developed this framework after reviewing thousands of customer architectures on AWS.

? Security pillar
   * identity foundation
   * Traceability
   * Security at all layers
   * Risk assessment and mitigation strategies

* => The Security pillar addresses the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies. Your architecture will present a much stronger security presenceif you implement a strong identity foundation, enable traceability, apply security at all layers, automate security best practices, and protect data in transit and at rest
https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/welcome.html

? operational Excellence Pillar
* the ability to run and monitor systems
* To continuously improve supporting process and procesures
   * deployed
   * updated
   * operated

* => The Operational Excellence pillar addresses the ability to run systems and gain insight into their operations to deliver business value. It also addresses the ability to continuously improve supporting processes and procedures.

* When you design a workload for operations, you must be aware of how it will be deployed, updated, and operated. Implement engineering practices that align with defect reductions and quick, safe fixes. Enable observation with logging, instrumentation, and business and technical metrics so that you can gain insight into what is happening inside your architecture.

* In AWS, you can view your entire workload (applications, infrastructure, policy, governance, and operations) as code. It can all be defined in and updated using code. This means that you can apply the same engineering discipline that you use for application code to every element of your stack.
https://d1.awsstatic.com/whitepapers/architecture/AWS-Operational-Excellence-Pillar.pdf

? Reliability pillar
   * Recover quickly from infrastructure or service disruptions
   * dynamically acquire computing resources to meet demand
   * mitigate disruptions such as:
      * misconfiguration
      * transient network issues.

* => The Reliability pillar addresses the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand. It also addresses the ability of a system to mitigate disruptions such as misconfigurations or transient network issues.

* It can be difficult to ensurereliability in a traditional environment. Issues arise from single points of failure, lack of automation, and lack of elasticity. By applying the best practices outlined in the Reliability pillar, you can prevent many of these issues. It will help you and your customers to have a properly designed architecture with respect to high availability, fault tolerance, and overall redundancy.
https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf


? Performance efficiency pillar
   * Choose efficient resources and maintain their efficiency as demand changes
   * democreatize advanced technologies
   * employ mechanical sympathy

* => When you consider performance, you want to maximize your performance by using computation resources efficiently. You also want to maintain that efficiency as the demand changes.

* It is also important to democratize advanced technologies. In situations where technology is difficult to implement yourself,consider using a vendor. By implementing the technology for you, the vendor handles the complexity and the knowledge, freeing your team to focus on more value-added work.

* Mechanical sympathy is when you use a tool or system with an understanding of how it operates best. Use the technology approach that aligns best to what you are trying to achieve. For example, consider data access patterns when you select database or storage approaches.
https://d1.awsstatic.com/whitepapers/architecture/AWS-Performance-Efficiency-Pillar.pdf

? Cost Optimization Pillar
   * Measure efficiency
   * Eliminate unneeded expense
   * Consider using managed services

*=> Cost optimization is an ongoing requirement of any good architectural design. The process is iterative, and it should be refined and improved throughout your production lifetime. Understanding how efficient your current architecture is in relation to your goals can remove unneeded expense. Consider using managed services because they operate at cloud scale, and they can offer a lower cost per transaction or service.
https://d1.awsstatic.com/whitepapers/architecture/AWS-Cost-Optimization-Pillar.pdf

? Sustainability pillar
   * Understand your impact
   * Establish sustainability goals
   * Maximize utilization
   * Anticipate and adopt new, mor efficient hardware and software offerings
   * reduce the downstream impact of your cloud workloads

*=> The Sustainability pillar addresses the ability to build architectures that maximize efficiency and reduce waste.

* Sustainability in the cloud is a continuous effort focused primarily on energy reduction and efficiency across all components of a workload by achieving the maximum benefit from the resources provisioned and minimizing the total resources required. 

* This effort can range from the initial selection of an efficient programming language, adoption of modern algorithms, use of efficient data storage techniques, deploying to correctly sized and efficient compute infrastructure, and minimizing requirements for high-powered end-user hardware

https://docs.aws.amazon.com/wellarchitected/latest/sustainability-pillar/sustainability-pillar.html

? The AWS Well-architected Tool
   * Helps you review the state of your workloads and compares them to the latest AWS architectural best practices
   * Gives you access to knowledge and best practices used by AWS architects, when you need it
   * Delivers an action plan with step-by-step guidance on how to build better workloads for the cloud
   * Provides a consistent process for you to review and measure your cloud architectures


*/


/*
Robust => kokoh, sekuat
traceability =>  ketertelurusan
prevent => mencegah
*/