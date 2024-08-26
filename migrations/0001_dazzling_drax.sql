CREATE TABLE IF NOT EXISTS "upcoming_events_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"category" text,
	"chapter" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hero_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"image_url" text,
	"category" text,
	"chapter" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"upload_date" date,
	"category" text,
	"chapter" text,
	"photo_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "conversation_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"date" date NOT NULL,
	"category" text,
	"chapter" text,
	"image_url" text[],
	"is_archived" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "program_details_with_reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"heading" text,
	"full_name" text,
	"date" date,
	"image_url" text,
	"description" text,
	"chapter" text,
	"category" text,
	"reviewer_name_1" text,
	"reviewer_title_1" text,
	"review_photo_url_1" text,
	"review_content_1" text,
	"reviewer_name_2" text,
	"reviewer_title_2" text,
	"review_photo_url_2" text,
	"review_content_2" text,
	"reviewer_name_3" text,
	"reviewer_title_3" text,
	"review_photo_url_3" text,
	"review_content_3" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" text,
	"category" varchar(100),
	"type_value_pairs" jsonb,
	"first_name" varchar(100),
	"company_name" varchar(255),
	"email" varchar(255),
	"phone_number" varchar(20),
	"city" varchar(100),
	"state" varchar(100),
	"country" varchar(100)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "scholarship" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_number" integer,
	"name" text,
	"gender" text,
	"category" text,
	"father_name" text,
	"mother_name" text,
	"income" integer,
	"phone_number" text,
	"date_of_birth" timestamp,
	"nationality" text,
	"adhar_number" text,
	"father_occupation" text,
	"mother_occupation" text,
	"house_number" text,
	"post_office" text,
	"pin_code" text,
	"bank_ifsc_code" text,
	"bank_name" text,
	"bank_branch" text,
	"bank_account_number" text,
	"bank_account_holder" text,
	"photo" text,
	"cheque" text,
	"aadhar_card" text,
	"college_id" text,
	"income_certificate" text,
	"college_name" text,
	"branch" text,
	"semester" text,
	"hostel_resident" boolean,
	"cgpa" numeric(3, 2),
	"status" text,
	"remarks" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
