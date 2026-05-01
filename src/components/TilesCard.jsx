'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaExpand, FaLayerGroup, FaArrowRight } from 'react-icons/fa'; 
import { AiOutlineCloseCircle } from 'react-icons/ai'; 
import Link from 'next/link'; // Link import korlam

const TilesCard = ({ tile }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white border border-gray-100 rounded-[2rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative group"
    >
      
      {/* 1. Image Section */}
      <div className="relative mb-5 overflow-hidden rounded-[1.5rem]">
        <div className="absolute top-3 left-3 z-10 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
            {tile.category}
          </span>
        </div>

        {!tile.inStock && (
          <div className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
            <div className="bg-red-500 text-white px-4 py-1 rounded-lg flex items-center gap-2 font-bold text-xs uppercase tracking-tighter">
              <AiOutlineCloseCircle size={16} /> Sold Out
            </div>
          </div>
        )}

        <div className="aspect-square">
          <motion.img 
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            src={tile.image}
            alt={tile.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="px-1 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-extrabold text-gray-900 text-xl tracking-tight line-clamp-1">
            {tile.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black text-gray-400">USD</span>
            <span className="text-xl font-black text-blue-600 leading-none">
              ${tile.price}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-xs mb-5 line-clamp-2 leading-relaxed">
          {tile.description}
        </p>

        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2 group/icon">
            <div className="p-2 bg-blue-50 rounded-lg group-hover/icon:bg-blue-600 transition-colors">
              <FaExpand size={12} className="text-blue-600 group-hover/icon:text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">{tile.dimensions}</span>
          </div>
          
          <div className="flex items-center gap-2 group/icon">
            <div className="p-2 bg-blue-50 rounded-lg group-hover/icon:bg-blue-600 transition-colors">
              <FaLayerGroup size={12} className="text-blue-600 group-hover/icon:text-white" />
            </div>
            <span className="text-[11px] font-bold text-gray-600">{tile.material}</span>
          </div>
        </div>
      </div>

      {/* 4. Action Button (Redirect to Gallery) */}
      <div className="mt-auto">
        {tile.inStock ? (
          <Link href="/tiles-gallery"> {/* Click korle tiles-gallery page e jabe */}
            <motion.button 
              whileTap={{ scale: 0.96 }}
              className="w-full bg-[#0f172a] hover:bg-blue-600 text-white py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-blue-200"
            >
              Explore Collection 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        ) : (
          <button className="w-full bg-gray-100 text-gray-400 py-4 rounded-2xl font-bold text-sm cursor-not-allowed border border-dashed border-gray-200">
            Currently Unavailable
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TilesCard;