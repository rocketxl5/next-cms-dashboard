/*
  Warnings:

  - Added the required column `updatedAt` to the `OAuthAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OAuthAccount" ADD COLUMN     "email" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "OAuthAccount_provider_providerAccountId_idx" ON "OAuthAccount"("provider", "providerAccountId");
