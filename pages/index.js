import HomePage from "../components/home/HomePage";
import Header from "../components/home/Header";
import Link from "next/link"


export default function Home() {
  return (
    <div className="w-full">
      <Header />
      
      
        <HomePage />

      
    </div>
  );
}
