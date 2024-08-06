/*
  Warnings:

  - You are about to drop the `tbl_contact_address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbl_contact_address" DROP CONSTRAINT "tbl_contact_address_contact_id_fkey";

-- AlterTable
ALTER TABLE "tbl_contacts" ALTER COLUMN "pincode" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "tbl_contact_address";
