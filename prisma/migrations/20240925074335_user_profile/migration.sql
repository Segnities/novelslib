/*
  Warnings:

  - You are about to drop the column `provider` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "provider";

-- DropEnum
DROP TYPE "Provider";