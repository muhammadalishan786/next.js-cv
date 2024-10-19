import React from "react"
import Link from "next/link"

export default function Education() {
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
<h3 className="text-center font-bold text-pink-600 p-4 bg-gray-300">EDUCATION</h3>
<div className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">

    <li>Matriculation "Science" from Karachi Board.</li>
    <li>FSC from Karachi Board.</li>
    <li>DAE (CIT) Sindh Technical Board</li>
    <li>BA from University of Karachi.</li>
    
</div>
    </div>
  );
}