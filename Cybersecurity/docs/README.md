# Cybersecurity Subcommittee

## Overview
The Cybersecurity Subcommittee is responsible for ensuring the security and integrity of the Smart Campus Management System (SCMS). This includes designing, implementing, and maintaining security features that protect the system from unauthorized access, data breaches, and other vulnerabilities. The team’s work is foundational to the entire SCMS as it safeguards the data and ensures trust in the system.

## Role in the SCMS
The Cybersecurity Subcommittee plays a crucial role in:
1. **User Authentication**:
   - Ensures that only authorized users can access the system.
   - Implements secure login systems using OAuth 2.0 and JWT to manage user sessions effectively.
   - Establishes role-based access controls (RBAC) to restrict actions based on user roles (e.g., student, admin).

2. **Data Protection**:
   - Encrypts sensitive data stored in the system using AES-256 to prevent unauthorized access.
   - Secures data transmitted between subsystems using TLS (HTTPS) to ensure communication remains confidential and tamper-proof.

3. **Threat Detection**:
   - Monitors the system for suspicious activity, such as failed login attempts or unusual data patterns, using an Intrusion Detection System (IDS) like Snort.
   - Creates rules and alerts to proactively identify and mitigate security risks.

4. **Incident Response**:
   - Develops protocols for handling potential security incidents, such as data breaches or unauthorized access attempts.
   - Logs and reports security events to enable timely responses and improvements.

5. **Collaboration**:
   - Works with the IT Subcommittee to secure server infrastructure and maintain TLS certificates.
   - Supports the Software Engineering Subcommittee by ensuring APIs are protected and data flows are secure.
   - Protects sensitive financial data for the Commerce Subcommittee, such as budgets and transactions.

---

## Timeline and Deliverables

### **Week 1-2: Initial Planning**
- **Define Security Requirements**:
  - Work with IT, Software Engineering, and Commerce subcommittees to identify potential security risks and dependencies.
- **Set Up Tools**:
  - Choose and set up tools for authentication (OAuth 2.0), encryption (AES-256), and monitoring (Snort).

### **Week 3-4: Authentication Implementation**
- **Develop Login System**:
  - Implement OAuth 2.0 with JWT for user authentication.
  - Test token-based authentication with sample APIs.
- **Role-Based Access Control (RBAC)**:
  - Define user roles and permissions (e.g., admin, student).
  - Integrate RBAC with the authentication middleware.

### **Week 5-6: Encryption Implementation**
- **Encrypt Sensitive Data**:
  - Apply AES-256 encryption to critical fields in the database (e.g., passwords, financial data).
  - Ensure seamless decryption for authorized users and APIs.
- **Secure Communication**:
  - Work with IT to enable HTTPS using TLS for all API endpoints.

### **Week 7-8: Intrusion Detection and Monitoring**
- **Install and Configure Snort**:
  - Set up Snort on the main server to monitor for threats.
  - Write custom rules to detect SQL injection, brute force attacks, and other common threats.
- **Test IDS**:
  - Simulate attacks to validate Snort’s detection capabilities.
  - Document test results and refine rules as needed.

### **Week 9: Integration and Testing**
- **System-Wide Security Testing**:
  - Conduct penetration testing across all subsystems (with Software Engineering and IT).
  - Verify secure communication between APIs and databases.
- **Review and Finalize**:
  - Ensure all deliverables meet the security requirements.
  - Prepare final documentation for handoff.

### **Week 10: Deployment and Reporting**
- **Deploy Security Features**:
  - Roll out authentication, encryption, and monitoring systems into the SCMS.
- **Submit Final Documentation**:
  - Provide detailed reports on implemented features, testing outcomes, and recommendations for future improvements.

---

## Dependencies with Other Subcommittees

### **1. IT Subcommittee**
The IT subcommittee provides the foundational infrastructure needed to implement security measures. The Cybersecurity subcommittee relies on IT to:
1. **Server Configuration**:
   - Ensure servers are properly configured to support TLS certificates for HTTPS.
   - Implement firewalls and Virtual Private Networks (VPNs) for secure system access.
2. **TLS Certificate Management**:
   - Generate and maintain SSL/TLS certificates using tools like Let’s Encrypt.
   - Work with the Cybersecurity team to ensure all API endpoints are accessible only via HTTPS.
3. **Monitoring Infrastructure**:
   - Deploy and configure Snort or equivalent IDS on servers.
   - Provide access to server logs for analyzing and configuring intrusion detection rules.

---

### **2. Software Engineering Subcommittee**
The Software Engineering subcommittee implements APIs and features that handle user data. The Cybersecurity subcommittee ensures these components are secure by:
1. **API Authentication**:
   - Provide guidelines for integrating JWT-based token authentication with APIs.
   - Work together to implement middleware for validating user sessions.
2. **Encryption Integration**:
   - Encrypt sensitive data fields (e.g., user credentials) in the database.
   - Ensure decryption mechanisms are accessible only to authorized API calls.
3. **Secure Data Flow**:
   - Validate that all data transmitted between frontend and backend is secured using HTTPS.
   - Provide input sanitization rules to prevent SQL injection and XSS attacks.

---

### **3. Commerce Subcommittee**
The Commerce subcommittee handles financial data, such as budget tracking and expense automation. The Cybersecurity subcommittee ensures this sensitive information is protected by:
1. **Data Encryption**:
   - Encrypt financial records and transactions stored in the database using AES-256.
   - Secure financial data exchanged with dashboards using TLS.
2. **Access Control**:
   - Restrict access to financial APIs to authorized roles (e.g., Treasurer, Admin).
   - Log and monitor financial activities to detect unusual patterns.
3. **Compliance**:
   - Ensure all financial systems comply with data protection regulations, such as GDPR or relevant local policies.

---

## Final Deliverables
1. A secure login system with OAuth 2.0 and JWT.
2. Fully encrypted sensitive data fields in the database.
3. An operational Intrusion Detection System with rules tailored to the SCMS.
4. Detailed security documentation and testing reports.
