'use client';
import React, { useState, useEffect } from 'react';
import TilesCard from './TilesCard';
import Link from 'next/link';

const TilesCards = () => {
    const [tiles, setTiles] = useState([]);

    useEffect(() => {
        const fetchTiles = async () => {
            const res = await fetch("https://tiles-gallery-bd.vercel.app/db.json");
            const data = await res.json();
            setTiles(data);
        };
        fetchTiles();
    }, []);

   
    const displayedTiles = tiles.slice(0, 8);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-center font-bold text-3xl md:text-5xl my-10 uppercase tracking-tighter">
                Our Premium <span className="text-blue-600">Tiles</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayedTiles.map(tile => (
                    <TilesCard key={tile.id} tile={tile} />
                ))}
            </div>

            {/* See More Button - Eitao gallery page e niye jabe */}
            {tiles.length > 8 && (
                <div className="flex justify-center mt-12">
                    <Link href="/tiles-gallery">
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-blue-200"
                        >
                            See More Collection
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default TilesCards;