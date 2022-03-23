const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class TestResultsRepository {
  async create(TestResults) {
    const statistics = TestResults.BackendStatistics;

    const result = await prisma.testResult.create({
      data: {
        beginTime: new Date(statistics.BeginTime),
        endTime: new Date(statistics.EndTime),
        verificationsActualLength: TestResults.VerificationsActualLength,
        bytesDownloaded: statistics.BytesDownloaded,
        filesUploaded: statistics.FilesUploaded,
        filesDownloaded: statistics.FilesDownloaded,
        filesDeleted: statistics.FilesDeleted,
        result: statistics.ParsedResult,
      },
    });

    return result;
  }
}

module.exports = new TestResultsRepository();
