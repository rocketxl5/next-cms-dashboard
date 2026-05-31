/*
  Warnings:

  - You are about to drop the column `email` on the `OAuthAccount` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `OAuthAccount` table. All the data in the column will be lost.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OAuthAccount" DROP COLUMN "email",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;
