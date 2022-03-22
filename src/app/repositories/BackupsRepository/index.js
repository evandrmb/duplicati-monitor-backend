const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class BackupsRepository {
  async findAll() {
    const backups = await prisma.backup.findMany();

    return backups;
  }

  async create({ name }) {
    const backup = await prisma.backup.create({
      data: {
        backupName: name,
      },
    });

    return backup;
  }
}

module.exports = new BackupsRepository();
