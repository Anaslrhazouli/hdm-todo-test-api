/* eslint-disable prettier/prettier */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const tasks = [
    { name: 'Task 1' },
    { name: 'Task 2' },
    { name: 'Task 3' },
    { name: 'Task 4' },
    { name: 'Task 5' },
  ];

  for (const task of tasks) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log('Tasks seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
