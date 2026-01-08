import T1 from "../../assets/team/team1.png";
import T2 from "../../assets/team/team2.png";
import T3 from "../../assets/team/team3.png";
import T4 from "../../assets/team/team4.png";
import T5 from "../../assets/team/team5.png";
import T6 from "../../assets/team/team6.png";
import T7 from "../../assets/team/team7.png";
import T8 from "../../assets/team/team8.png";
import T9 from "../../assets/team/team9.png";
import TeamPageCard from "./TeamPageCard";

const TeamData = [
  {
    id: 1,
    name: "John Anderson",
    title: "CEO & Founder",
    image: T1,
  },
  {
    id: 2,
    name: "Sarah Williams",
    title: "Product Manager",
    image: T2,
  },
  {
    id: 3,
    name: "Michael Brown",
    title: "Lead Developer",
    image: T3,
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    image: T4,
  },
  {
    id: 5,
    name: "David Wilson",
    title: "Marketing Strategist",
    image: T5,
  },
  {
    id: 6,
    name: "Olivia Taylor",
    title: "Content Manager",
    image: T6,
  },
  {
    id: 7,
    name: "James Moore",
    title: "Business Analyst",
    image: T7,
  },
  {
    id: 8,
    name: "Sophia Martin",
    title: "HR Manager",
    image: T8,
  },
  {
    id: 9,
    name: "Sophia Martin",
    title: "HR Manager",
    image: T9,
  },
];

export default function TeamPage() {
  return (
    <div className="bg-bg">
      <div className="Container grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
        {TeamData?.map((team) => (
          <TeamPageCard team={team} />
        ))}
      </div>
    </div>
  );
}
