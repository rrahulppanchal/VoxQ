-- CreateTable
CREATE TABLE "tbl_contact_address" (
    "id" SERIAL NOT NULL,
    "contact_id" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "other" TEXT,

    CONSTRAINT "tbl_contact_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_contact_address_contact_id_key" ON "tbl_contact_address"("contact_id");

-- CreateIndex
CREATE INDEX "tbl_contact_address_country_state_city_idx" ON "tbl_contact_address"("country", "state", "city");

-- CreateIndex
CREATE INDEX "tbl_contacts_email_phone_idx" ON "tbl_contacts"("email", "phone");

-- CreateIndex
CREATE INDEX "tbl_contacts_assigned_to_status_idx" ON "tbl_contacts"("assigned_to", "status");

-- CreateIndex
CREATE INDEX "tbl_contacts_logs_contact_id_created_at_idx" ON "tbl_contacts_logs"("contact_id", "created_at");

-- AddForeignKey
ALTER TABLE "tbl_contact_address" ADD CONSTRAINT "tbl_contact_address_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "tbl_contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
