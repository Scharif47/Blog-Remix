const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({
        data: post,
      });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Remix is awesome",
      body: "Remix is a new framework for building full-stack web apps. It is built on top of React and React Router and is designed to make it easy to build data-driven applications.",
    },
    {
      title: "Remix is fast",
      body: "Remix is built on top of React and React Router. It allows you to build your app with the same tools you already know.",
    },
    {
      title: "SQL is a great database",
      body: "SQL is a relational database that is easy to use. It enables you to create relationships between data.",
    },
    {
      title: "Prisma is a great ORM",
      body: "Prisma is an ORM that makes it easy to work with SQL databases. It is built on top of the Prisma Client, which is a type-safe database client.",
    },
  ];
}
