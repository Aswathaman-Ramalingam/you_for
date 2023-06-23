"use client"

import React from 'react';
import { useState } from 'react';

export default function Tpye({ name } : { name:string } ) {
    const [effect, setEffect] = useState(false);
    return (
        <div 
            className={`${
                effect && " border-blue-400"
            } bg-white h-56 w-56 rounded-lg flex justify-center items-center font-mono font-bold text-2xl border-transparent border-8 mx-4 my-2 `}
            onClick={() => {
                setEffect(!effect);
            }}
        >
            {name}
        </div>
    );
}

