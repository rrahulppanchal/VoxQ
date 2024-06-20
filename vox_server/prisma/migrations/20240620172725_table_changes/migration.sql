/*
  Warnings:

  - The primary key for the `tbl_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `refresh_token` on the `tbl_users` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `tbl_users` table. All the data in the column will be lost.
  - The `user_role` column on the `tbl_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbl_user_role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbl_user_tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MODERATOR', 'ADMIN');

-- AlterTable
ALTER TABLE "tbl_users" DROP CONSTRAINT "tbl_users_pkey",
DROP COLUMN "refresh_token",
DROP COLUMN "user_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "user_role",
ADD COLUMN     "user_role" "Role" NOT NULL DEFAULT 'USER',
ADD CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "tbl_user_role";

-- DropTable
DROP TABLE "tbl_user_tokens";
