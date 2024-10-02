import startApp from "./start";
import connect from "../models/db";
import http from "http";

const start = async () => {
  try {
    await connect(process.env.MONGO_URL as string);
    const app = await startApp();
    const server = http.createServer(startApp);
    server.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

export default start;