const express = require("express");
const app = express();
const carRouter = require("./carsRouter");

app.use(express.json());

const loggerMiddleware = (req, res, next) => {
  console.log("Incomming Request at:", new Date().toISOString());
  next();
};
app.use(loggerMiddleware);
app.get("/", (req, res) => {
  res.send("hello, Express!");
});

app.use("/cars", carRouter);

function checkAuthentication(req) {
  return req.headers.authorization === "Bearer validAuthToken";
}

const authenticateMiddleware = (req, res, next) => {
  const isAuthenticated = checkAuthentication(req);

  if (isAuthenticated) {
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on the Port ${PORT}`);
});
