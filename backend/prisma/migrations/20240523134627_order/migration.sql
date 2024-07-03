/*
  Warnings:

  - You are about to drop the column `items` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `totalpice` on the `order` table. All the data in the column will be lost.
  - Added the required column `Account` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Status` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('Pending', 'Paid');

-- CreateEnum
CREATE TYPE "Payment" AS ENUM ('Telesom', 'Edahab', 'Others');

-- AlterTable
ALTER TABLE "order" DROP COLUMN "items",
DROP COLUMN "totalpice",
ADD COLUMN     "Account" "Payment" NOT NULL,
ADD COLUMN     "Status" "PaymentType" NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
