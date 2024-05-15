/*
  Warnings:

  - You are about to drop the column `Name` on the `category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "category_Name_key";

-- AlterTable
ALTER TABLE "category" DROP COLUMN "Name";
