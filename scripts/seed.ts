const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Marketing and Branding"},
        { name: "Sales and Business Development"},
        { name: "Financial Management and Funding"},
        { name: "Product Development and Innovation"},
        { name: "Leadership and Team Building"},
        { name: "Technology and IT Infrastructure"},
        { name: "Customer Experience and Support"},
        { name: "Operations and Process Optimization"},
        { name: "Networking and Relationship Building"},
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();