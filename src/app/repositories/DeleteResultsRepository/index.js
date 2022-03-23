const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class DeleteResultsRepository {
  async create(DeleteResults) {
    const statistics = DeleteResults.BackendStatistics;

    const result = await prisma.deleteResult.create({
      data: {
        beginTime: new Date(statistics.BeginTime),
        endTime: new Date(statistics.EndTime),
        version: statistics.Version,
        bytesDownloaded: statistics.BytesDownloaded,
        knownFileCount: statistics.KnownFileCount,
        knownFileSize: statistics.KnownFileSize,
        totalQuotaSpace: statistics.TotalQuotaSpace,
        freeQuotaSpace: statistics.FreeQuotaSpace,
        filesDeleted: statistics.FilesDeleted,
      },
    });

    return result;
  }
}

module.exports = new DeleteResultsRepository();
