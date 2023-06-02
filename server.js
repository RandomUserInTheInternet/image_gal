import mysql from "mysql2/promise";

const client = await mysql.createConnection({
  host: 'psedge.global',
  port: parseInt(process.env.POLYSCALE_GALLERY_PORT),
  user: process.env.POLYSCALE_GALLERY_USERNAME,
  password: process.env.POLYSCALE_GALLERY_PASSWORD,
  database: process.env.POLYSCALE_GALLERY_DATABASE,
  ssl: {
    rejectUnauthorized: true,
  },
});
