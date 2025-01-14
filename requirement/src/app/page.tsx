import Image from "next/image";
import JobDescription from "./components/JobDescription";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
      <JobDescription
        title="Associate"
        description="We are seeking motivated Associates to join our growing team at [Society Name]. As an Associate, you will be part of one of our subcommittees (Cybersecurity, IT, Software Engineering, or Commerce), contributing to impactful real-world projects that directly benefit Macquarie University."
        additionalInfo="Join us and shape the future by driving innovation, building professional networks, and honing your skills in a collaborative environment."
        location="Macquarie University"
        jobType="Part-time"
        department="Software Engineering"
        responsibilities={[
          {
            bold: "Project Contribution:",
            normal:
              " Collaborate closely with your subcommittee to plan, develop, and execute specific tasks that address [Society Name]’s overarching goals. Your work will directly tackle challenges and opportunities at Macquarie University, resulting in real-world impact and tangible outcomes."
          },
          {
            bold: "Teamwork & Collaboration:",
            normal:
              " Work hand-in-hand with subcommittee leaders, peers, and cross-functional teams to ensure project deliverables are completed on time and meet quality standards. Effective communication and a supportive mindset will be crucial to each initiative’s success."
          },
          {
            bold: "Skill Development:",
            normal:
              " Grow your technical expertise by engaging in research, coding, testing, and other development tasks, while refining your communication skills through regular presentations, peer review, and stakeholder interactions."
          },
          {
            bold: "Quality Assurance:",
            normal:
              " Participate in routine check-ins, code reviews, and collaborative feedback sessions to maintain high-quality deliverables. You will help uphold the society’s standards, ensuring each project meets or exceeds expectations."
          }
        ]}
        backgroundPoints={[
          {
            bold: "Current Student:",
            normal:
              " You’re currently enrolled at Macquarie University in a relevant field (e.g., Software Engineering, Cybersecurity, Commerce) and are eager to apply theoretical knowledge to real-world projects."
          },
          {
            bold: "Problem-Solving Mindset:",
            normal:
              " You thrive on tackling complex challenges and possess the initiative to explore and propose innovative solutions."
          },
          {
            bold: "Organized & Detail-Oriented:",
            normal:
              " You excel at prioritizing tasks and meeting deadlines in a fast-paced environment, without compromising on quality or accuracy."
          },
          {
            bold: "Enthusiastic Learner:",
            normal:
              " You embrace feedback, actively seek out growth opportunities, and keep current with industry trends and best practices."
          }
        ]}
        backgroundClosingStatement={`By joining [Society Name], you’ll gain practical experience, build professional networks, and contribute to projects that make a real impact. We celebrate diversity and are committed to creating an inclusive environment where everyone can thrive.If this sounds like the right opportunity for you, we encourage you to apply and help us shape the future at Macquarie University!`}
        team={[
          { role: 'Engineering Leader', name: 'engineering-leader' },
          { role: 'Cyber Leader', name: 'it-cyber-leader' },
          { role: 'IT Leader', name: 'commerce-leader' },
          { role: 'President', name: 'president' },

        ]}
        benefits={[
          {
            title: "Real-World Impact",
            description: "Contribute to projects that directly benefit Macquarie University."
          },
          {
            title: "Skill Development",
            description: "Grow your technical expertise, communication skills, and teamwork capabilities."
          },
          {
            title: "Professional Networks",
            description: "Build connections with industry professionals, alumni, and like-minded peers."
          },
          {
            title: "Inclusive Environment",
            description: "Join a diverse and supportive community that values your unique perspectives and contributions."
          }
        ]}
      />
    
    </>
  );
}
