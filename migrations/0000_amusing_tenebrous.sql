CREATE TABLE IF NOT EXISTS "contact_detail_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"subject" text NOT NULL,
	"message" text NOT NULL,
	"privacypolicy" boolean NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
