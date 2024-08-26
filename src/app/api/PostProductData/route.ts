import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/db';  // Ensure you have a proper DB connection
import { gallery } from '@/db/schema/Activites/gallery';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, selectedDate, selectedChapter, fileUrl, category } = req.body;

      // Create an object matching the gallery schema
      const galleryData = {
        name: title,
        uploadDate: selectedDate,
        chapter: selectedChapter,
        photoUrl: fileUrl,
        category: category,
      };

      // Insert the data using Drizzle ORM
      const result = await db.insert(gallery).values(galleryData).returning();

      return res.status(201).json({ message: 'Image metadata saved successfully', data: result[0] });
    } catch (error: unknown) {
      console.error('Error saving image metadata:', error);
      if (error instanceof Error) {
        return res.status(500).json({ message: 'Failed to save image metadata', error: error.message });
      }
      return res.status(500).json({ message: 'Failed to save image metadata', error: 'An unknown error occurred' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
