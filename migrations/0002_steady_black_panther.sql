ALTER TABLE "scholarship" ALTER COLUMN "cgpa" SET DEFAULT '0';--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "father_phone" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "mother_phone" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "student_phone" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "address" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "city" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "state" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "postal_code" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "house_apartment_name" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "place_state" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "country" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "pincode" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "district" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "whatsapp_number" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "student_email" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "alternative_number" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "high_school" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "high_school_percentage" numeric(5, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "intermediate" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "intermediate_percentage" numeric(5, 2) DEFAULT '0';--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "bank_branch_name" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "bank_account_holder_name" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "photo_url" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "cheque_url" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "aadhar_card_url" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "college_id_url" text;--> statement-breakpoint
ALTER TABLE "scholarship" ADD COLUMN "income_certificate_url" text;--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "application_number";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "phone_number";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "house_number";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "pin_code";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "bank_branch";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "bank_account_holder";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "photo";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "cheque";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "aadhar_card";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "college_id";--> statement-breakpoint
ALTER TABLE "scholarship" DROP COLUMN IF EXISTS "income_certificate";