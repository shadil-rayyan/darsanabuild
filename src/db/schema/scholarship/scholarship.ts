import {
  pgTable,
  serial,
  integer,
  text,
  timestamp,
  boolean,
  decimal,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// Consolidated scholarship table with document metadata
export const Scholarship_Table = pgTable(
  'scholarship',
  {
    id: serial('id').primaryKey(),
    name: text('name'),
    dateOfBirth: timestamp('date_of_birth'),
    gender: text('gender'),
    nationality: text('nationality'),
    category: text('category'),
    adharNumber: text('adhar_number'),
    fatherName: text('father_name'),
    fatherPhone: text('father_phone'),
    motherName: text('mother_name'),
    motherPhone: text('mother_phone'),
    income: integer('income'),
    fatherOccupation: text('father_occupation'),
    studentPhone: text('student_phone'),
    motherOccupation: text('mother_occupation'),
    address: text('address'),
    city: text('city'),
    state: text('state'),
    postalCode: text('postal_code'),
    houseOrApartmentName: text('house_apartment_name'),
    placeState: text('place_state'),
    postOffice: text('post_office'),
    country: text('country'),
    pincode: text('pincode'),
    district: text('district'),
    whatsappNumber: text('whatsapp_number'),
    studentEmail: text('student_email'),
    alternativeNumber: text('alternative_number'),
    highSchool: text('high_school'),
    highSchoolPercentage: decimal('high_school_percentage', { precision: 5, scale: 2 }).default('0'),
    intermediate: text('intermediate'),
    intermediatePercentage: decimal('intermediate_percentage', { precision: 5, scale: 2 }).default('0'),
    collegeName: text('college_name'),
    branch: text('branch'),
    semester: text('semester'),
    hostelResident: boolean('hostel_resident'),
    cgpa: decimal('cgpa', { precision: 3, scale: 2 }).default('0'),
    bankName: text('bank_name'),
    bankAccountNumber: text('bank_account_number'),
    bankIfscCode: text('bank_ifsc_code'),
    bankBranchName: text('bank_branch_name'),
    bankAccountHolderName: text('bank_account_holder_name'),

    // Document metadata
    photoUrl: text('photo_url'),
    chequeUrl: text('cheque_url'),
    aadharCardUrl: text('aadhar_card_url'),
    collegeIDUrl: text('college_id_url'),
    incomeCertificateUrl: text('income_certificate_url'),
     // size in KB

    status: text('status'),
    remarks: text('remarks'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => {
    return {
      semesterCheck: sql`CHECK (${table.semester} IN ('S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'))`,
      cgpaCheck: sql`CHECK (${table.cgpa} >= 0 AND ${table.cgpa} <= 10)`,
      highSchoolPercentageCheck: sql`CHECK (${table.highSchoolPercentage} >= 0 AND ${table.highSchoolPercentage} <= 100)`,
      intermediatePercentageCheck: sql`CHECK (${table.intermediatePercentage} >= 0 AND ${table.intermediatePercentage} <= 100)`,
    };
  }
);
