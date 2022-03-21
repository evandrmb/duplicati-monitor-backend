-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastBackupDate" TIMESTAMP(3) NOT NULL,
    "bytesDownloaded" INTEGER NOT NULL,
    "backupName" VARCHAR(255) NOT NULL,
    "result" VARCHAR(10) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
