-- CreateTable
CREATE TABLE "Backup" (
    "id" TEXT NOT NULL,
    "backupName" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Backup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "backupId" TEXT NOT NULL,
    "deleteResultId" TEXT NOT NULL,
    "testResultId" TEXT NOT NULL,
    "examinedFiles" INTEGER NOT NULL,
    "openedFiles" INTEGER NOT NULL,
    "addedFiles" INTEGER NOT NULL,
    "addedFolders" INTEGER NOT NULL,
    "tooLargeFiles" INTEGER NOT NULL,
    "filesWithError" INTEGER NOT NULL,
    "partialBackup" BOOLEAN NOT NULL,
    "mainOperation" VARCHAR(30) NOT NULL,
    "result" VARCHAR(15) NOT NULL,
    "beginTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "version" VARCHAR(30) NOT NULL,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeleteResult" (
    "id" TEXT NOT NULL,
    "beginTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "version" VARCHAR(30) NOT NULL,
    "bytesDownloaded" INTEGER NOT NULL,
    "knownFileCount" INTEGER NOT NULL,
    "knownFileSize" INTEGER NOT NULL,
    "totalQuotaSpace" INTEGER NOT NULL,
    "freeQuotaSpace" INTEGER NOT NULL,
    "filesDeleted" INTEGER NOT NULL,

    CONSTRAINT "DeleteResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestResult" (
    "id" TEXT NOT NULL,
    "verificationsActualLength" INTEGER NOT NULL,
    "result" VARCHAR(15) NOT NULL,
    "beginTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "bytesDownloaded" INTEGER NOT NULL,
    "filesUploaded" INTEGER NOT NULL,
    "filesDownloaded" INTEGER NOT NULL,
    "filesDeleted" INTEGER NOT NULL,

    CONSTRAINT "TestResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_backupId_fkey" FOREIGN KEY ("backupId") REFERENCES "Backup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_deleteResultId_fkey" FOREIGN KEY ("deleteResultId") REFERENCES "DeleteResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_testResultId_fkey" FOREIGN KEY ("testResultId") REFERENCES "TestResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
