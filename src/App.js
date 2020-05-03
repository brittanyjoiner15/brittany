import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { SkillsHtml } from "./components/skillshtml";
import { SkillsJs } from "./components/skillsjs";
import { Stack } from "./components/stack";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(" +
          "https://trello-attachments.s3.amazonaws.com/5c3174bfd2f31c356736c742/5eadcb13c82db90ac430e6ba/01b4a924b1c60e0662e9f72421588ae3/cool-background.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <Hero />
      <SkillsHtml />
      <SkillsJs />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
