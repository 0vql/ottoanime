import Container from "../components/card/Container";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Discover } from "../utils/data";
import Image from "next/image";
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import HomePage from "../components/home/HomePage";
import Header from "../components/home/Header";



export default function Home() {
  return (
    <div className="w-full">
      <Header />
      
      
        <HomePage />
      
    </div>
  );
}
