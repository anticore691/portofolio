CREATE TABLE "anticore_project" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text,
	"project_url" text,
	"github_url" text,
	"category" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
