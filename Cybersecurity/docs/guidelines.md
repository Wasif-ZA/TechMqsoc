# Cybersecurity Subcommittee Guidelines

## Purpose
These guidelines provide a framework for the Cybersecurity Subcommittee to carry out its responsibilities effectively and align its efforts with the broader goals of the Smart Campus Management System (SCMS) project.

---

## General Principles
1. **Security by Design**:
   - Integrate security measures at every stage of development rather than treating them as an afterthought.
   - Ensure all features undergo a security review before implementation.

2. **Collaborative Approach**:
   - Actively coordinate with other subcommittees to address cross-functional security needs.
   - Share findings, logs, and documentation to enhance transparency and understanding.

3. **Continuous Improvement**:
   - Regularly evaluate the system's security measures and adapt to emerging threats.
   - Learn from penetration testing and incident response to refine protocols.

---

## Coding Standards
1. **Use Industry-Standard Libraries**:
   - Authentication: Use robust OAuth 2.0 libraries.
   - Encryption: Implement AES-256 for sensitive data using well-documented libraries like `Crypto` (Node.js) or `PyCryptodome` (Python).

2. **Avoid Hardcoding Sensitive Data**:
   - Never store passwords, keys, or tokens in source code.
   - Use environment variables or secure vaults for managing secrets.

3. **Input Validation**:
   - Sanitize and validate all user inputs to prevent SQL injection, XSS, and other attacks.
   - Define strict schemas for API requests and responses.

---

## Security Testing
1. **Penetration Testing**:
   - Use tools like **Kali Linux** or **Burp Suite** to simulate attacks.
   - Document vulnerabilities and collaborate with other subcommittees to address them.

2. **Intrusion Detection**:
   - Regularly update Snort rules to detect evolving threats.
   - Monitor logs for suspicious activity patterns and respond immediately.

3. **Automation**:
   - Schedule periodic scans of the system using automated tools (e.g., OWASP ZAP).
   - Set up alerts for critical vulnerabilities.

---

## Communication and Documentation
1. **Communication Channels**:
   - Use Slack or Microsoft Teams for real-time collaboration and updates.
   - Share progress reports during weekly cross-subcommittee meetings.

2. **Documentation Requirements**:
   - Maintain a central repository for security policies, configurations, and incident response plans.
   - Provide clear and concise explanations of implemented measures for easier onboarding of new members.

3. **Reporting Incidents**:
   - Use a predefined template to log security incidents, including the nature of the issue, steps taken, and resolution time.
   - Escalate unresolved issues to the IT subcommittee and project leads.

---

## Collaboration Guidelines

### **1. IT Subcommittee**
- Provide security requirements for server configurations (e.g., firewalls, TLS certificates).
- Validate TLS and HTTPS setups after deployment.

### **2. Software Engineering Subcommittee**
- Review API designs to ensure proper authentication and data encryption.
- Test and validate middleware for token-based security.

### **3. Commerce Subcommittee**
- Assist in defining access control for financial systems.
- Ensure secure handling of budget and transaction data.

---

## Best Practices
1. **Regular Updates**:
   - Always use the latest stable versions of security libraries and tools.
   - Patch vulnerabilities in third-party dependencies promptly.

2. **Separation of Concerns**:
   - Divide tasks into manageable units (e.g., authentication, encryption, IDS) to ensure focus and accountability.
   - Avoid combining critical functions into a single component to reduce the risk of failure.

3. **Backup and Recovery**:
   - Test backup and recovery procedures regularly to ensure data integrity in case of security incidents.
   - Encrypt all backup data and restrict access to authorized personnel only.

---

## Checklist for Security Reviews
- [ ] Authentication and token validation tested and documented.
- [ ] All sensitive data encrypted in the database.
- [ ] HTTPS enabled for all API endpoints.
- [ ] Intrusion detection system (IDS) configured and tested.
- [ ] Incident response plan finalized and shared with stakeholders.
- [ ] Logs reviewed regularly for anomalies.

---

## Expectations for Members
- Contribute to tasks based on your assigned responsibilities and expertise.
- Adhere to these guidelines and maintain high standards of accountability.
- Report progress, challenges, and any identified risks promptly.

---

## Final Note
By adhering to these guidelines, the Cybersecurity Subcommittee will ensure the SCMS project remains secure, scalable, and trustworthy. These principles should be reviewed and updated periodically to remain aligned with evolving project needs and industry standards.
