import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <div>
<h4 className="bg-pink-500 font-bold text-center">Simple Resume:</h4>
<ul className="flex justify-center bg-purple-300">

  <Link href="/"><li className="inline-block m-3">Home</li></Link>
  <Link href="/information"><li className="inline-block m-3">Information</li></Link>
  <Link href="/education"><li className="inline-block m-3">Education</li></Link>
  <Link href="/skills"><li className="inline-block m-3">Skills</li></Link>
  <Link href="/experience"><li className="inline-block m-3">Experience</li></Link>
</ul>
<h3 className="text-center font-bold text-pink-600 p-4 bg-gray-300">HOME PAGE</h3>
<h1 className="pt-40 text-center font-bold text-blue-900 text-7x1">---WELCOME TO MY SIMPLE RESUME---</h1>
    <br/>
    <h2 className="text-center font-bold text-purple-900 text-7x1">Objective:</h2>
    <br/>  
    <p className="text-center text-purple-900 text-7x1">To utilize my skills in web development and project creation by building a comprehensive portfolio website,<br/>
    developing hackathon milestone projects, and creating innovative tools such as static interactive resumes,<br/>
    dynamic and editable resume builders, shareable resume platforms, and a simple calculator. I aim to deliver<br/>
     functional and user-friendly solutions that enhance user experience and showcase my technical abilities.</p>
    </div>
  );
  }