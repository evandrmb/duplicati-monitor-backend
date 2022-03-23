const ReportsRepository = require('../../repositories/ReportsRepository');
// const BackupsRepository = require('../../repositories/BackupsRepository');
const DeleteResultsRepository = require('../../repositories/DeleteResultsRepository');
const TestResultsRepository = require('../../repositories/TestResultsRepository');

class ReportsController {
  async index(request, response) {
    const { backupId } = request.params;

    const reports = await ReportsRepository.findByBackupId(backupId);

    response.send({ reports });
  }

  async store(request, response) {
    const { backupId } = request.params;
    const data = request.body.Data;

    const [statistics] = [data.BackendStatistics];

    // const backup = await BackupsRepository.findById({ backupId });
    const deleteResult = await DeleteResultsRepository.create(data.DeleteResults);
    const testResult = await TestResultsRepository.create(data.TestResults);

    const report = await ReportsRepository.store({
      // lastBackupDate: statistics.LastBackupDate,
      // bytesDownloaded: statistics.BytesDownloaded,
      result: statistics.ParsedResult,
      backupId,
      deleteResultId: deleteResult.id,
      testResultId: testResult.id,
      examinedFiles: data.ExaminedFiles,
      openedFiles: data.OpenedFiles,
      addedFiles: data.AddedFiles,
      addedFolders: data.AddedFolders,
      tooLargeFiles: data.TooLargeFiles,
      filesWithError: data.FilesWithError,
      partialBackup: data.PartialBackup,
      mainOperation: data.MainOperation,
      beginTime: data.BeginTime,
      endTime: data.EndTime,
      duration: data.Duration,
      version: data.Version,
    });

    response.send({ report });
  }

  async deleteAll(request, response) {
    const rows = await ReportsRepository.deleteAll();

    response.send(rows);
  }
}

module.exports = new ReportsController();
