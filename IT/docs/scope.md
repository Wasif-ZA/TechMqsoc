# Subcommittee Scope: IT

## Purpose
The IT Subcommittee is responsible for providing the foundational infrastructure necessary to support the Smart Campus Management System (SCMS). This includes managing cloud environments, provisioning databases, setting up secure networks, and implementing monitoring tools to ensure the system operates reliably and efficiently.

---

## Scope of Responsibilities

### **1. Cloud Infrastructure**
- **Objective**: Set up and maintain a scalable cloud environment.
- **Tasks**:
  - Choose a cloud provider (AWS, Azure, or GCP) for hosting SCMS.
  - Configure virtual machines, load balancers, and auto-scaling policies.
  - Set up virtual private networks (VPNs) for secure internal communication.
- **Deliverables**:
  - Fully configured cloud environment with documentation for deployment.

---

### **2. Database Management**
- **Objective**: Provision and optimize relational databases to store SCMS data securely and efficiently.
- **Tasks**:
  - Install and configure PostgreSQL or MySQL for structured data.
  - Automate database backups and validate recovery processes.
  - Set up database indexing to optimize query performance.
- **Deliverables**:
  - Operational database with schema setup.
  - Automated backup and recovery scripts.

---

### **3. Network Management**
- **Objective**: Establish a secure and reliable network for internal communication and external access.
- **Tasks**:
  - Configure firewalls to restrict unauthorized access.
  - Segment the network to isolate sensitive resources (e.g., databases).
  - Implement network monitoring tools like Prometheus and Grafana.
- **Deliverables**:
  - Secure and monitored network infrastructure.

---

### **4. System Monitoring**
- **Objective**: Monitor the health and performance of SCMS infrastructure.
- **Tasks**:
  - Set up real-time dashboards using tools like Grafana or CloudWatch.
  - Implement alerting systems for critical issues (e.g., server downtime).
  - Collect and centralize logs using ELK Stack or equivalent tools.
- **Deliverables**:
  - Monitoring dashboards with real-time performance metrics.
  - Configured alerting system for key infrastructure components.

---

## Out of Scope
- Implementation of API-level security or application logic (handled by the Software Engineering and Cybersecurity subcommittees).
- Frontend hosting or UI/UX design (handled by the Software Engineering subcommittee).
- Financial data visualization (handled by the Commerce subcommittee).

---

## Dependencies and Collaboration

### **1. Cybersecurity Subcommittee**
- **TLS Certificates**: Install and maintain SSL/TLS certificates for secure communication.
- **Firewall Rules**: Implement configurations to meet Cybersecurity requirements.

### **2. Software Engineering Subcommittee**
- **Database Access**: Provide secure database connections and ensure APIs are optimized for database queries.
- **Backend Hosting**: Host backend services in the cloud environment.

### **3. Commerce Subcommittee**
- **Data Backups**: Automate backups for financial dashboards and ensure recovery options.
- **Hosting Dashboards**: Provide the infrastructure for hosting financial dashboards securely.

---

## Deliverables Checklist
1. Cloud Infrastructure:
   - [ ] Virtual machines and load balancers configured.
   - [ ] VPNs set up for secure communication.

2. Database Management:
   - [ ] Relational database installed and configured.
   - [ ] Backup and recovery scripts operational.

3. Network Management:
   - [ ] Firewalls configured and network segmented.
   - [ ] Monitoring tools deployed.

4. System Monitoring:
   - [ ] Real-time dashboards with performance metrics.
   - [ ] Alerts for critical system issues.

---

## Risks and Mitigation

### **Risk**: Cloud environment misconfiguration.
- **Mitigation**: Use Infrastructure as Code (IaC) tools like Terraform for consistent deployments.

### **Risk**: Database outages or data loss.
- **Mitigation**: Automate backups and test recovery processes monthly.

### **Risk**: Network vulnerabilities.
- **Mitigation**: Work with Cybersecurity to review and test firewall rules and VPN configurations.

---

## Success Metrics
1. Cloud infrastructure supports a 10x increase in user load without downtime.
2. All databases are backed up daily and recoverable within 30 minutes.
3. Network monitoring detects 95% of anomalies in real-time.
4. Infrastructure issues are resolved within 24 hours of detection.

---

## Final Notes
The IT Subcommittee plays a critical role in building and maintaining the infrastructure for the SCMS. By following this scope, the subcommittee ensures that all technical components are reliable, secure, and scalable for future needs.
