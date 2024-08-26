import { sql } from '@vercel/postgres';
import {
  serial,
  text,
  date,
  pgTable,
} from 'drizzle-orm/pg-core';

// Define the gallery table
export const gallery = pgTable('gallery', {
  id: serial('id').primaryKey(),
  name: text('name'),
  uploadDate: date('upload_date'),
  category: text('category'),
  chapter: text('chapter'),
  photoUrl: text('photo_url'),  // Store URL or path to the image
});
