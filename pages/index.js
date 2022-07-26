import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("../components/home/HomePage"));
const Header = dynamic(() => import("../components/home/Header"));
import styled from "styled-components";

const IndexContainer = styled.div`
    width: 100%;
    background: linear-gradient(rgb(0 0 0 / 62%),rgb(0 0 0)) ,url(https://i.pinimg.com/originals/fb/66/f3/fb66f302df4d89b9b34a7ed21469e559.jpg)no-repeat fixed;
    background-position: center top;
    background-size: cover;
   
}
  
    
  }
`;

export default function Home() {
  return (
    <IndexContainer>
      <Header />

      <HomePage />
    </IndexContainer>
  );
}
