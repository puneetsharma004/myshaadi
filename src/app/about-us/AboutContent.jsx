"use client"
import React, { useState } from "react";

const sections = [
  {
    title: "About Us",
    content: `Welcome to Shaadi Center, where meaningful connections turn into lifelong commitments. We are more than just a matchmaking platform — we are a bridge between hearts, families, and futures. Rooted deeply in cultural traditions yet open to the evolving dynamics of modern relationships, Shaadi Center was founded with a simple yet powerful mission: to help people find love, companionship, and a true partner for life.

We understand that the search for a life partner is one of the most important journeys you’ll ever embark on. That’s why we approach it with care, respect, and a genuine desire to make that experience as smooth and fulfilling as possible. Our platform is thoughtfully designed to bring together individuals who are serious about marriage, guided by compatibility, shared values, and mutual respect.

At Shaadi Center, we blend time-honored matchmaking traditions with today’s technology. Whether you prefer the involvement of your family in the process or wish to explore matches independently, we offer a flexible and personalized experience tailored to your comfort. Our team is here to support you at every step — from profile creation to shortlisting, and even through the initial conversations — ensuring that every match is approached with sincerity and attention.

We take pride in serving a diverse community, welcoming people from all walks of life, cultures, and backgrounds. From traditional arranged marriages to modern love-based unions, we honor your preferences and values. We believe that a successful marriage is built not only on compatibility but also on trust, communication, and shared dreams — and we’re here to help you find someone who aligns with yours.

Over the years, Shaadi Center has grown into a trusted name, thanks to the faith of thousands of families and individuals who found their match with us. Every success story inspires us to keep doing what we do — bringing people together with integrity, warmth, and a heartfelt understanding of what marriage truly means.

Your story begins here, with Shaadi Center — where finding the right one isn’t just a possibility, it’s a promise.`,
    image: "/assets/abt1.png",
    reverse: false,
  },
  {
    title: "Our Mission",
    content: `At Shaadi Center, our mission is to bring together individuals and families in the pursuit of finding compatible life partners through a respectful, thoughtful, and personalized approach. We believe that marriage is not just a social contract, but a meaningful journey built on mutual respect, shared values, and emotional connection. That’s why we focus on creating genuine opportunities for people to meet, interact, and build relationships that stand the test of time.

Our platform is designed to honor cultural values while respecting personal choice, creating an inclusive space for diverse communities. We strive to simplify the matchmaking process through a blend of traditional practices and modern tools, empowering users to make informed and heartfelt decisions. With every match we facilitate, our goal is to nurture trust, honesty, and a deep sense of belonging — because at Shaadi Center, we don’t just help you find a partner, we help you begin a future.`,
    image: "/assets/abt2.png",
    reverse: true,
  },
  {
    title: "Our Vision",
    content: `Our vision is to become the most trusted and influential matchmaking platform, recognized globally for building strong, lasting unions that celebrate both tradition and progress. We aspire to reshape the narrative around arranged and love-based marriages by making the process more accessible, transparent, and personalized for the modern world.

Shaadi Center envisions a world where finding the right partner is not bound by pressure or chance, but guided by purpose, compatibility, and clarity. We aim to continue evolving our services with the times — embracing digital innovation, user-centered design, and cultural sensitivity — so we can empower the next generation to pursue meaningful relationships with confidence and grace. Ultimately, we hope to inspire a global community that values love, understanding, and commitment as the foundation of every successful marriage.`,
    image: "/assets/abt3.png",
    reverse: false,
  },
];

export default function AboutContent() {
    let [read, setRead] =  useState(false);
    let readHandler=()=>{
        setRead(!read)
        console.log("clicked btn read more")
    }
  return (
    <section className="py-16 px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        {sections.map(({ title, content, image, reverse }, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              reverse ? "lg:flex-row-reverse" : ""
            } gap-8 items-center`}
          >
            {/* Text */}
            <div className="flex-1 bg-gradient-to-br from-rose-50 to-white p-6 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-rose-600 mb-4">{title}</h2> 
              <p className={`text-gray-700 whitespace-pre-line text-sm leading-relaxed ${read?" ":"line-clamp-[10]"}`}>
                {content}
              </p>
              <button className="bg-rose-600 text-white p-2 text-[16px] rounded-2xl mt-4 cursor-pointer" onClick={readHandler}>Read More</button>
            </div>

            {/* Image */}
            <div className="flex-1 ">
              <img
                src={image}
                alt={title}
                className="rounded-2xl w-full h-auto shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
