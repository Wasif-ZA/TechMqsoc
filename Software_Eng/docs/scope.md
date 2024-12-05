# Subcommittee Scope: Software Engineering

## Purpose
The Software Engineering Subcommittee is responsible for designing, implementing, and maintaining the core application logic of the Smart Campus Management System (SCMS). This includes creating responsive frontend interfaces, developing efficient backend systems, and ensuring seamless integration of APIs and databases.

---

## Scope of Responsibilities

### **1. Frontend Development**
- **Objective**: Create user-friendly and responsive interfaces for SCMS users.
- **Tasks**:
  - Use **Next.js** to build highly performant web applications with server-side rendering (SSR) and static site generation (SSG).
  - Style components using **Tailwind CSS** for a consistent and scalable design system.
  - Implement key features such as room booking, dashboards, and attendance tracking interfaces.
- **Deliverables**:
  - Fully responsive and accessible web interfaces.
  - Tailwind CSS design system with reusable utility classes.

---

### **2. Backend Development**
- **Objective**: Implement and manage backend systems using **Supabase** for seamless data storage and retrieval.
- **Tasks**:
  - Use Supabase for database provisioning (PostgreSQL) and authentication (OAuth 2.0).
  - Develop and deploy **GraphQL APIs** for data access, query flexibility, and integration with the frontend.
  - Optimize APIs to handle large datasets efficiently and ensure scalability.
- **Deliverables**:
  - Supabase-configured backend with secured authentication.
  - GraphQL API endpoints integrated with frontend applications.

---

### **3. API Integration**
- **Objective**: Ensure seamless interaction between frontend, backend, and database layers.
- **Tasks**:
  - Integrate GraphQL APIs with the frontend using libraries like Apollo Client or URQL.
  - Test API queries and mutations for accuracy, efficiency, and security.
  - Collaborate with the IT Subcommittee to ensure database connections and server stability.
- **Deliverables**:
  - Fully functional frontend-backend integration.
  - Documentation of API endpoints and usage.

---

## Out of Scope
- Cloud hosting and server infrastructure (handled by the IT Subcommittee).
- Security measures like intrusion detection or advanced encryption (handled by the Cybersecurity Subcommittee).
- Financial data management and visualization (handled by the Commerce Subcommittee).

---

## Dependencies and Collaboration

### **1. IT Subcommittee**
- **Database Integration**: Use Supabase as the primary database platform, set up by IT.
- **Hosting**: Ensure Next.js frontend and backend are deployed on stable hosting platforms.

### **2. Cybersecurity Subcommittee**
- **Authentication**: Implement secure token-based authentication using Supabase's OAuth 2.0 system.
- **API Security**: Validate GraphQL queries against SQL injection and other common vulnerabilities.

### **3. Commerce Subcommittee**
- **Dashboard Development**: Collaborate on creating financial dashboards for real-time analytics.
- **Data Integration**: Fetch and display financial records via GraphQL APIs.

---

## Deliverables Checklist
1. **Frontend Development**:
   - [ ] Fully responsive Next.js components.
   - [ ] Tailwind CSS design system implemented.

2. **Backend Development**:
   - [ ] Supabase-configured backend with PostgreSQL.
   - [ ] GraphQL APIs designed and deployed.

3. **API Integration**:
   - [ ] Fully functional connection between frontend and backend.
   - [ ] GraphQL queries and mutations tested.

4. **Documentation**:
   - [ ] Clear instructions for API usage and frontend integration.
   - [ ] End-to-end testing results logged.

---

## Risks and Mitigation

### **Risk**: Inefficient GraphQL queries causing latency.
- **Mitigation**: Optimize query structure and enable caching at the API level.

### **Risk**: Supabase downtime or misconfigurations.
- **Mitigation**: Work closely with IT to test and validate database configurations regularly.

### **Risk**: Integration issues between frontend and backend.
- **Mitigation**: Conduct weekly sync meetings with IT and Cybersecurity teams to align development efforts.

---

## Success Metrics
1. Fully functional SCMS web application deployed with 99.9% uptime.
2. All APIs return accurate data with latency under 500ms for 95% of requests.
3. At least 90% of user interactions validated through end-to-end testing.
4. Complete and accessible documentation for developers and end users.

---

## Final Notes
The Software Engineering Subcommittee plays a critical role in bringing the SCMS to life. By adhering to this scope and collaborating with other subcommittees, we ensure that the system is functional, scalable, and user-friendly.
