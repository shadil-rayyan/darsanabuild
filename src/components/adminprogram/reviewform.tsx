"use client";
import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [profilePicture, setProfilePicture] = useState<File | null>(null);



    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePicture(e.target.files[0]);
        }
    };

    return (
        <form  className="max-w-md mx-auto p-6 rounded-lg shadow-md bg-white">
           

            <div className="mb-4">
                <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review:</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your review..."
                />
            </div>

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role/Position:</label>
                <input
                    id="role"
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your role or position"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture:</label>
                <input
                    id="profilePicture"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                />
            </div>

            
        </form>
    );
};

export default ReviewForm;
