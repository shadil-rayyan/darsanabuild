"use client";
import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';
import Filter from '@/components/filter/filterc';
import Bangalorechapter from "../../../assets/chapter/bangalorechapterheroimage.png";
import palkkadchapter from "../../../assets/chapter/palkkadchapterheroimage.png";

interface Gallery {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
  chapter: string;
}

// Month name to number mapping
const monthMap: { [key: string]: string } = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12'
};

const initialGalleryItems: Gallery[] = [
  {
    id: 1,
    image: palkkadchapter.src,
    title: 'Sample Title 1',
    category: 'Support',
    date: '2024-08-25',
    chapter: 'Palakkad',
  },
  {
    id: 2,
    image: Bangalorechapter.src,
    title: 'Sample Title 2',
    category: 'Scholarship',
    date: '2023-08-26',
    chapter: 'Bengaluru',
  },
  // Add more gallery items as needed
];

const GalleryTable: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<Gallery[]>(initialGalleryItems);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    month: '',
    year: '',
    category: '',
    search: '',
    chapter: '',
  });

  const handleViewImage = (image: string) => {
    setExpandedImage(image);
  };

  const handleDeleteRow = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  // Filter the data based on the selected filters
  const filteredData = galleryItems.filter((item) => {
    // Extract year and month from the date
    const [year, month] = item.date.split('-').slice(0, 2);

    // Convert month name to number if month is provided in filters
    const filterMonth = monthMap[filters.month] || '';
    const dateMatch = filterMonth ? month === filterMonth : true;
    const yearMatch = filters.year ? year === filters.year : true;
    const categoryMatch = filters.category ? item.category.toLowerCase() === filters.category.toLowerCase() : true;
    const searchMatch = filters.search ? item.title.toLowerCase().includes(filters.search.toLowerCase()) : true;
    const chapterMatch = filters.chapter ? item.chapter.toLowerCase() === filters.chapter.toLowerCase() : true;

    return dateMatch && yearMatch && categoryMatch && searchMatch && chapterMatch;
  });

  return (
    <div className="container mx-auto px-4 sm:px-8 mt-8 max-w-6xl">
      {/* Filter Component */}
      <Filter onFilterChange={(newFilters) => setFilters(newFilters)} />
      <div className="py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Sl.No.</th>
                <th className="px-6 py-3 text-left font-medium">Image</th>
                <th className="px-6 py-3 text-left font-medium">Title</th>
                <th className="px-6 py-3 text-left font-medium">Category</th>
                <th className="px-6 py-3 text-left font-medium">Date</th>
                <th className="px-6 py-3 text-left font-medium">Chapter</th>
                <th className="px-6 py-3 text-center font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-12 h-12 object-cover rounded-lg shadow-md cursor-pointer" 
                      onClick={() => handleViewImage(item.image)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.chapter}</td>
                  <td className="px-6 py-4 h-full flex justify-center items-center space-x-3 my-2">
                    <button 
                      className="text-blue-600 hover:text-blue-800" 
                      onClick={() => handleViewImage(item.image)} 
                      title="View"
                    >
                      <FaEye size={24} />
                    </button>
                    <button 
                      className="text-green-600 hover:text-green-800"  
                      title="Edit"
                    >
                      <FaEdit size={22} />
                    </button>
                    <button 
                      className="text-red-600 hover:text-red-800" 
                      onClick={() => handleDeleteRow(item.id)} 
                      title="Delete"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Modal for displaying full-size image */}
        {expandedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <img src={expandedImage} alt="Full Size" className="max-w-full max-h-full" />
              <button
                className="absolute top-0 right-0 text-white text-3xl p-2"
                onClick={handleCloseImage}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryTable;
