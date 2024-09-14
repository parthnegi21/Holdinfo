-- CreateTable
CREATE TABLE "Data" (
    "last" INTEGER NOT NULL,
    "sell" INTEGER NOT NULL,
    "buy" INTEGER NOT NULL,
    "Volume" INTEGER NOT NULL,
    "base_unit" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Data_name_key" ON "Data"("name");
