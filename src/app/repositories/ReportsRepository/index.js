const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ReportsRepository {
  async findAll() {
    const reports = await prisma.report.findMany();

    return reports;
  }

  async findByBackupId(backupId) {
    const reports = await prisma.report.findMany({
      where: {
        backupId,
      },
    });

    return reports;
  }

  async store({
    backupId,
    deleteResultId,
    testResultId,
    // lastBackupDate,
    // bytesDownloaded,
    result,
    examinedFiles,
    openedFiles,
    addedFiles,
    addedFolders,
    tooLargeFiles,
    filesWithError,
    partialBackup,
    mainOperation,
    beginTime,
    endTime,
    version,
  }) {
    const report = await prisma.report.create({
      data: {
        backupId,
        deleteResultId,
        testResultId,
        // lastBackupDate,
        // bytesDownloaded,
        result,
        examinedFiles,
        openedFiles,
        addedFiles,
        addedFolders,
        tooLargeFiles,
        filesWithError,
        partialBackup,
        mainOperation,
        beginTime,
        endTime,
        version,
      },
    });

    return report;
  }

  async deleteAll() {
    const rows = await prisma.report.deleteMany();

    return rows;
  }
}

module.exports = new ReportsRepository();
