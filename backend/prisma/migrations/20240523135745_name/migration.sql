/*
  Warnings:

  - You are about to drop the column `name` on the `order` table. All the data in the column will be lost.
  - Added the required column `Name` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" DROP COLUMN "name",
ADD COLUMN     "Name" TEXT NOT NULL;
