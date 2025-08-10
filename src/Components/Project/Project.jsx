import React from 'react'
import { Element } from 'react-scroll'
import Projectdesc from '../ProjectDescription/Projectdesc'
import './Project.css'
import bmi from './../../assets/bmi.png'
import chatbot from './../../assets/chatbot.png';
import counter from './../../assets/counter.png';
import expense from './../../assets/expense.png';
import rps from './../../assets/rps.png';
import stopwatch from './../../assets/stopwatch.png';
import textspeech from './../../assets/textspeech.png';
import todo from './../../assets/todo.png';
const Project = () => {
    const client_projects=[
        {
            img:bmi,
            title:"BMI CALCULATOR",
            Description:"Simple and accurate BMI calculator. Just enter your height and weight to get your BMI and find out if you're underweight, healthy, overweight, or obese.",
            link:"https://github.com/Nagarajan-2003/BMI-CALCULATOR",
        },
        {
            img:counter,
            title:"COUNTER",
            Description:"A basic and functional counter app. Use it to keep a tally of anything you need. Add, subtract, or reset the count with simple button controls.",
            link:"https://github.com/Nagarajan-2003/COUNTER",
        },
        {
            img:expense,
            title:"EXPENSE TRACKER",
            Description:"Track your finances with ease. This simple app helps you monitor your income and expenses, providing a clear overview of your balance. See a detailed history of your transactions and add new ones with just a few taps.",
            link:"https://github.com/Nagarajan-2003/Expense-Tracker",
        },
        {
            img:stopwatch,
            title:"STOPWATCH",
            Description:"A clean and simple stopwatch. Start, stop, and reset the timer with ease. Perfect for timing workouts, cooking, or any activity where precision is key.",
            link:"https://github.com/Nagarajan-2003/STOP-WATCH",
        },
        {
            img:textspeech,
            title:"TEXT TO SPEECH CONVERTOR",
            Description:"Convert text into speech with this handy app. Simply type or paste your text, adjust the speech rate, and listen to it being read aloud.",
            link:"https://github.com/Nagarajan-2003/TEXT-SPEECH-APP",
        },
        {
            img:todo,
            title:"TO DO LIST",
            Description:"Organize your tasks and boost your productivity with this straightforward to-do list app. Add new tasks, and keep track of everything you need to get done.",
            link:"https://github.com/Nagarajan-2003/TODO-LIST",
        },
        {
            img:chatbot,
            title:"STATIC AI CHATBOT",
            Description:"Interact with an intelligent chatbot. Ask your questions, and receive instant, helpful responses. This app is designed to provide quick and accurate information on a variety of topics, making it a great tool for learning and exploration.",
            link:"https://github.com/Nagarajan-2003/CHATBOT",
        },
        {
            img:rps,
            title:"ROCK PAPER SCISSOR",
            Description:"Play the classic game of Rock Paper Scissors against the computer. Choose your move and see who wins in real-time. Keep track of your score and challenge yourself to beat the computer.",
            link:"https://github.com/Nagarajan-2003/ROCK-PAPER-SCISSOR",
        },
    ];
  return (
    <Element className='projectcontainer' id='projects'>
        <h1>PROJECTS</h1>
        <p>Here are some of REACT projects which i had done for making life of people easy</p>
        <div className="projectcontainer__projects">
           { client_projects.map((project,index)=>{
                return(
                    <Projectdesc key={index}img={project.img}title={project.title} Description={project.Description}link={project.link}/>
                )
            })}
        </div>
    </Element>
  )
}

export default Project