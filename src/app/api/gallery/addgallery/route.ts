import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';
import { gallery } from '@/db/schema/Activites/gallery'; // Adjust the import path as needed

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { title, selectedDate, selectedChapter, fileUrl, category } = req.body;

      // Insert the data into the gallery table
      const result = await sql`
        INSERT INTO gallery (name, upload_date, chapter, photo_url, category)
        VALUES (${title}, ${selectedDate}, ${selectedChapter}, ${fileUrl}, ${category})
        RETURNING *
      `;

      return res.status(200).json({ message: 'Image metadata saved successfully', data: result });
    } catch (error) {
      console.error('Error saving image metadata:', error);
      return res.status(500).json({ message: 'Failed to save image metadata', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
