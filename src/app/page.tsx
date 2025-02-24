"use client"
import { useState } from "react";

export default function Home() {
  const [name,setName]=useState('solei')
  return (
     <div>
       <h1>ccc</h1>
       <div className="text-center">
         text vide
       </div>
       <div className="text-center text-2xl text-red-500 my-3">
         {process.env.NEXT_PUBLIC_DEFAULT_NAME}
       </div>
       <div className="text-center text-2xl text-red-500">
        {process.env.NEXT_PUBLIC_KEY}
       </div>
       <div className="text-center text-2xl text-black">
         <h2 className="my-1">{name}</h2>
         <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="border"
          type="text" />
       </div>

     </div>
  );
}
