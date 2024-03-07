import React from 'react'

export default function Centro() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md p-4 bg-white shadow-md rounded-md">
                {/* Imagen con efecto raro */}
                <div className="relative mb-4 overflow-hidden rounded-md">
                    <img
                        src={"/inflation.png"}
                        alt="Milei Inflation"
                        className="w-full h-auto transform hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Frase bizarra */}
                <p className="text-center text-gray-800 text-lg font-semibold">
                    "¡Molei, la criptomoneda que desafía la inflación!"
                </p>
            </div>
        </div>
    )
}
