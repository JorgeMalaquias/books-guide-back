/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Authors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Publishers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Authors_name_key" ON "Authors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Publishers_name_key" ON "Publishers"("name");
