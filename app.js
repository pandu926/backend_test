require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/config/swagger");
const userRoute = require("./src/user/route.user");
const authRoute = require("./src/auth/route.auth");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(userRoute);
app.use(authRoute);
app.listen(port, () => {
  console.log("website listen in port " + port);
});
