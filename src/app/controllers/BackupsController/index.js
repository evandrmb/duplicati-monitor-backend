const BackupsRepository = require('../../repositories/BackupsRepository');

class BackupsController {
  async store(request, response) {
    const { name } = request.body;

    const backup = await BackupsRepository.create({ name });

    response.send(backup);
  }

  async index(request, response) {
    const backups = await BackupsRepository.findAll();

    response.send({
      backups,
    });
  }
}

module.exports = new BackupsController();
