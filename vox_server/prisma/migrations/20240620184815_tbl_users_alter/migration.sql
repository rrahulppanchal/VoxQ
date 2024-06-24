/*
  Warnings:

  - Added the required column `j_date` to the `tbl_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_users" ADD COLUMN     "description" TEXT,
ADD COLUMN     "j_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "l_date" TIMESTAMP(3),
ADD COLUMN     "phone" TEXT;
