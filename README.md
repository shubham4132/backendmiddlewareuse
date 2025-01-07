# Car Router API

This is a simple Express.js application that demonstrates the use of middleware and routes to handle HTTP requests.

## Features

- **Global Middleware:** Logs all incoming requests.
- **Custom Middleware:** Adds headers and performs validation for specific routes.
- **Car API:**
  - `GET /cars`: Returns a list of cars.
  - `GET /cars/:id`: Fetches a car by its ID (requires `validate=true` query parameter).
- **Secure Action Route:** Implements authentication middleware to verify API requests.
