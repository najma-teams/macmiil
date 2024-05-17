/*
  Warnings:

  - You are about to drop the column `image` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "category" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "stock";
