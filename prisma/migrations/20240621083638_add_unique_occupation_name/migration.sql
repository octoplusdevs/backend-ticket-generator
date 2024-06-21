/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `occupations` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tickets" ALTER COLUMN "avatar" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "occupations_name_key" ON "occupations"("name");
