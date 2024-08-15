/*
  Warnings:

  - You are about to drop the column `name` on the `Creator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Watched" ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 0;
