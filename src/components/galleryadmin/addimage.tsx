'use client'
import React, { useState } from 'react';

const ImageUploadForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [chapter, setChapter] = useState('');
  const [category, setCategory] = useState('');
  const [uploadDate, setUploadDate] = useState(new Date());
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file && fileName) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', fileName);
      formData.append('title', title);
      formData.append('chapter', chapter);
      formData.append('category', category);
      formData.append('uploadDate', uploadDate.toISOString()); // Send date as ISO string

      try {
        // This is where the API endpoint is called
        const response = await fetch('/api/gallery/addgallery', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const result = await response.json();
          console.log('File uploaded and data saved successfully:', result);
        } else {
          console.error('Upload failed:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={chapter}
        onChange={(e) => setChapter(e.target.value)}
        placeholder="Chapter"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="date"
        value={uploadDate.toISOString().substring(0, 10)} // Convert to 'YYYY-MM-DD'
        onChange={(e) => setUploadDate(new Date(e.target.value))}
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageUploadForm;
