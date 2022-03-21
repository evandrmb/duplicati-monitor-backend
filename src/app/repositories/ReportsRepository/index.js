const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class ReportsRepository {
  async findAll() {
    const reports = await prisma.report.findMany();

    return reports;
  }

  async store({
    lastBackupDate, bytesDownloaded, backupName, result,
  }) {
    const report = await prisma.report.create({
      data: {
        lastBackupDate,
        bytesDownloaded,
        backupName,
        result,
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
