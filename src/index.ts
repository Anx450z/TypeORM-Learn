import { DataSource } from "typeorm";

const main = async () => {
  try {
    const dataSource = new DataSource({
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      username: "postgres",
      password: "ankur",
      database: "typeorm",
    });

    let connection = await dataSource.initialize();
    console.log("connected successfully to Postgres 😊")
  } catch (error) {
    console.log("🤔 something went wrong")
    console.log(error);
  }


  // connection.manager./* your stuff...*/
};

main();
