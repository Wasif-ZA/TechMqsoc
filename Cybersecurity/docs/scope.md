# Subcommittee Scope: Cybersecurity

## Purpose
The Cybersecurity Subcommittee is tasked with ensuring that the Smart Campus Management System (SCMS) operates securely and protects sensitive data from unauthorized access, breaches, and other vulnerabilities. By implementing robust security measures, the subcommittee contributes to the overall reliability and trustworthiness of the system.

---

## Scope of Responsibilities

### **1. Authentication**
- **Objective**: Ensure only authorized users can access the system.  
- **Tasks**:
  - Implement OAuth 2.0 with JWT for secure login.
  - Set up Role-Based Access Control (RBAC) to manage permissions based on user roles.
- **Deliverables**:
  - A functional login system using OAuth 2.0.
  - Middleware for token validation and role verification.

---

### **2. Encryption**
- **Objective**: Protect sensitive data stored in the system and secure communication between subsystems.  
- **Tasks**:
  - Encrypt critical fields in the database using AES-256.
  - Implement HTTPS for all API communication using TLS.
- **Deliverables**:
  - Encrypted database fields (e.g., passwords, financial records).
  - Fully secure API endpoints.

---

### **3. Threat Detection**
- **Objective**: Monitor the system for suspicious activities and proactively mitigate risks.  
- **Tasks**:
  - Deploy Snort as an Intrusion Detection System (IDS).
  - Create custom rules to detect common attack vectors like SQL injection or brute force attacks.
- **Deliverables**:
  - A configured IDS monitoring server traffic.
  - Documented logs and alerts for all monitored activities.

---

### **4. Incident Response**
- **Objective**: Develop and implement protocols for handling security incidents.  
- **Tasks**:
  - Create a logging system for tracking and reporting incidents.
  - Define automated responses to common threats (e.g., lockout after failed login attempts).
- **Deliverables**:
  - An incident response protocol document.
  - Automated security measures for real-time response.

---

## Out of Scope
- Physical security of campus facilities.
- Data analytics or visualization tools (these are handled by Commerce and IT subcommittees).
- Non-security-related API development or database optimization (Software Engineering's domain).

---

## Dependencies and Collaboration

### **IT Subcommittee**
- **Server Security**: TLS certificates and firewalls for HTTPS implementation.
- **Infrastructure**: Deployment of Snort and logging tools on secure servers.

### **Software Engineering Subcommittee**
- **API Protection**: Integration of token-based authentication.
- **Encryption Workflow**: Ensuring compatibility between API encryption and decryption mechanisms.

### **Commerce Subcommittee**
- **Financial Data Security**: Encrypting sensitive financial records.
- **Access Control**: Securing financial dashboards and restricting access based on roles.

---

## Deliverables Checklist
1. Authentication System:
   - OAuth 2.0 with JWT.
   - Role-Based Access Control (RBAC).

2. Encryption:
   - AES-256 for sensitive database fields.
   - HTTPS for all data transmission.

3. Threat Detection:
   - Intrusion Detection System (IDS) configured with Snort.
   - Documented alerts and logs.

4. Incident Response:
   - Defined protocols for managing security incidents.
   - Automated measures to handle common threats.

---

## Risks and Mitigation

### **Risk**: Insufficient integration with other subsystems.
- **Mitigation**: Hold bi-weekly sync meetings with other subcommittees to ensure alignment.

### **Risk**: Delays in receiving server configurations or TLS certificates.
- **Mitigation**: Communicate clear deadlines with the IT subcommittee and escalate issues promptly.

### **Risk**: Over-complexity in the authentication system.
- **Mitigation**: Start with a simple OAuth 2.0 implementation and expand as needed.

---

## Success Metrics
- Secure authentication with a <1% error rate in user access validation.
- All sensitive database fields encrypted with no unauthorized access detected during testing.
- At least 90% of simulated attacks successfully detected by the IDS.
- Incident response time under 5 minutes for critical alerts.

