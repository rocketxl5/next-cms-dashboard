/*
  Warnings:

  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isVerified` on the `User` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'PENDING', 'SUSPENDED');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
DROP COLUMN "isVerified",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'ACTIVE';
