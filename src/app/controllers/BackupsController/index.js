const BackupsRepository = require('../../repositories/BackupsRepository');

class BackupsController {
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const backup = await BackupsRepository.create({ name });

    response.status(202).json(backup);
  }

  async index(request, response) {
    const backups = await BackupsRepository.findAll();

    response.send({
      backups,
    });
  }
}

module.exports = new BackupsController();
