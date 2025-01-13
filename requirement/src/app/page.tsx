import Image from "next/image";
import JobDescription from "./components/JobDescription";
import ReusableBulletList from "./components/ReusableBulletList";

export default function Home() {
  const responsibilities = [
    {
      bold: "Join our product engineering team.",
      normal: " You’ll be a crucial part of our product team, working closely with your engineering manager, product designer, and other engineers."
    },
    {
      bold: "Deliver high-quality software design.",
      normal: " You’ll help identify, define, design, and implement technical solutions for our web product."
    },
    {
      bold: "Collaborate with peers.",
      normal: " You’ll participate in code reviews, pair programming, and design critiques to ensure top-notch quality."
    },
    {
      bold: "Foster a culture of pragmatism.",
      normal: " You’ll help create and follow best practices for software development, ensuring efficiency and scalability."
    },
  ];
  return (
    
    <>
    
      <JobDescription
        title="Software Engineer"
        description="Dovetail is the world’s leading customer insights hub, helping thousands of teams build better products. From user feedback and customer interviews to support tickets and sales calls, Dovetail helps you uncover insights fast—no matter the method."
        additionalInfo="Driven by ambition and innovation, the Dovetail team is customer-obsessed and on a mission to help the world improve the quality of every thing. Join the ranks of Atlassian, The New York Times, Spotify, Universal, Porsche, Starbucks, and thousands more as they put their customer first with Dovetail and improve the quality of their thing. Founded in 2017 by Benjamin Humphrey and Bradley Ayers, Dovetail has 100+ employees across offices in Sydney and San Francisco."
        location="Sydney, Australia"
        jobType="Full time"
        department="Engineering"
        responsibilities={responsibilities}
      />
    </>
  );
}
