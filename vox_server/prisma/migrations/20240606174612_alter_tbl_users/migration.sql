/*
  Warnings:

  - You are about to drop the column `access_token` on the `tbl_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tbl_users" DROP COLUMN "access_token",
ADD COLUMN     "refresh_token" TEXT,
ALTER COLUMN "last_name" DROP NOT NULL;
