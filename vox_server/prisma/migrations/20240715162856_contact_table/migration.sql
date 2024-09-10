-- CreateTable
CREATE TABLE "tbl_contacts" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "phone" TEXT NOT NULL,
    "assigned_to" INTEGER NOT NULL,
    "assigned_by" INTEGER NOT NULL,
    "verified_by" INTEGER NOT NULL,
    "created_by" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_contacts_logs" (
    "id" SERIAL NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "action_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_contacts_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_contacts_logs" ADD CONSTRAINT "tbl_contacts_logs_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "tbl_contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
