import app from "./src";
import db from "./src/db";
import "dotenv/config";

app.listen(process.env.PORT, () => {
  db();
  console.log(`Server listening on port ${process.env.PORT}`);
});
