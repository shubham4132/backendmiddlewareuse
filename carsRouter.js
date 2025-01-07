const express = require("express");
const carRouter = express.Router();
const cars = require("./data");

const responseHeaderMiddleware = (req, res, next) => {
  res.setHeader("X-App-Version", "1.0");
  next();
};

carRouter.use(responseHeaderMiddleware);

carRouter.get("/", (req, res) => {
  res.json(cars);
});
const validationMiddleware = (req, res, next) => {
  const validateParam = req.query.validate;
  if (validateParam === "true") {
    next();
  } else {
    res.status(403).json({ error: "validation failed" });
  }
};
carRouter.get("/:id", validationMiddleware, (req, res) => {
  const carId = parseInt(req.params.id);
  const car = cars.find((car) => car.id === carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: "car not found" });
  }
});
module.exports = carRouter;
