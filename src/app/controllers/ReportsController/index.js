const ReportsRepository = require('../../repositories/ReportsRepository');

class ReportsController {
  async index(request, response) {
    const reports = await ReportsRepository.findAll();

    response.send(reports);
  }

  async store(request, response) {
    const data = request.body.Data;
    const extra = request.body.Extra;

    const [statistics, backupName] = [data.BackendStatistics, extra['backup-name']];

    const report = await ReportsRepository.store({
      lastBackupDate: statistics.LastBackupDate,
      bytesDownloaded: statistics.BytesDownloaded,
      backupName,
      result: statistics.ParsedResult,
    });

    response.send({ report });
  }
}

module.exports = new ReportsController();
