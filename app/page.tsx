'use client'
import Image from "next/image";
import Centro from './centro';
import Link from "next/link";

import React, { useState } from 'react';
export default function Home() {
  const contractText = "$ CONTRAKT: 36kkUBZZu7KAjctrf7Vk3LA4SqrER1NNWQp1eJ7QcE4X";
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractText);
      setCopySuccess(true);
    } catch (error) {
      console.error('Error copying to clipboard', error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-between items-center" style={{ backgroundImage: "url('/bg2-01.png')", border: 'none' }}>
      <header className="bg-blue-500 p-4 w-full text-white text-center">
        <h1 className="text-3xl font-bold">JAVIER MOLEI</h1>
        <div className="flex flex-row justify-center items-center gap-4" >

          <Link href="https://dexscreener.com/solana/c81rjwhzzjgcpbpgzmsirxzv8y2zzvfgcc9mpwdkayvv" target="_blank" >
            <button>
              BUY MOLEI
            </button>
          </Link>
          <Link href="https://twitter.com/javiermolei" target="_blank" >
            <button>
              X
            </button>
          </Link>
        </div>


      </header>

      {/* <Centro></Centro> */}

      <main className="flex-1 container mx-auto my-8 text-center">
        <div className="flex flex-col gap-2 bg-slate-50 bg-opacity-90 justify-center items-center">
          <h1 className="text-black text-4xl pt-2">WHAT IS JMOLEI</h1>
          <p className="text-black text-xl pt-2 mx-20">JMOLEI iS da ultimate Aostriam Ekonomiks Coin & is here 2 eat ol da other l3ft4rd shittin memes. If u luv fraedom and hate leftardios u wont miss JMOLEI before Milei makes it legal tender in Argentina!

            U kant giv SH3T L3FTARDS 1 inch!
            Far laft-weng, shiver!! fraedom advances!! LANG LIVE LOBERTY, DAMNIT!!!</p>
        <button className="text-black text-4xl pt-2 border-none" onClick={handleCopyToClipboard}>{contractText}</button>
        {copySuccess && <p className="text-black">Copied to clipboard!</p>}
          <img className="p-10" src="/inflation.png" width="60%"></img>

        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-50 bg-opacity-90">


          {/* Imágenes y frases bizarras */}
          {mileiData.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
              <img src={item.image} alt={`Milei ${index + 1}`} className="mb-4 rounded-md" />
              <p className="text-black">{item.quote}</p>
            </div>
          ))}
        </div>

      </main>

      <footer className="bg-blue-500 p-4 text-white text-center">
        <p>&copy; OL REVERSED 2024 JMOLEI REVERSED REVERSED </p>
      </footer>
    </div>
  );
}

// Datos de imágenes y frases de Milei
const mileiData = [
  {
    image: '/milei4.jpg',
    quote: 'hot gerlz.'
  },
  {
    image: '/milei5.jpg',
    quote: 'chain'
  },
  {
    image: '/milei6.jpg',
    quote: 'rumm rumm chain chain'
  },
  {
    image: '/milei7.jpg',
    quote: 'meik argentin grate again'
  },

];