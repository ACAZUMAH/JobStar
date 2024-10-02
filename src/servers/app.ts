import createApp from "./createExpressApp";
import connect from "../models/db";
import http from "http";

const start = async () => {
  await connect(process.env.MONGO_URL as string);
  const app = await createApp();
  const server = http.createServer(app);
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

export default start;
