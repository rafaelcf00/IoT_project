const Hapi = require("@hapi/hapi");
const Inert = require("@hapi/inert");
const HapiCors = require("hapi-cors");
const Vision = require("@hapi/vision");
const hapiJWT = require("hapi-auth-jwt2");
const HapiSwagger = require("hapi-swagger");
const routes = require("./config/routes.js");
const config = require("./config/env-config.js");
const { findUser, login } = require("./api/v1/auth/auth.repository.js");

const server = Hapi.server({
  port: config.port,
  host: config.host,
  routes: {
    cors: {
      origin: [
        "http://localhost:3001",
        "https://frontend-labiotech.vercel.app",
      ],
    },
  },
});

const swaggerPlugin = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: {
      documentationPath: "/docs",
      info: {
        title: "Api Arduino",
        version: "1.0.0",
        description:
          "API for analyzing and recording ph and temperature of liquid samples in the laboratory ",
        termsOfService: "http://swagger.io/terms/",
        license: {
          name: "MIT license",
          url: "https://opensource.org/license/mit/",
        },
      },
      schemes: ["http", "https"],
    },
  },
];

const plugins = [
  {
    plugin: routes,
    options: {
      cors: true,
      routesBaseDir: "./api",
    },
  },
];

const validate = async (decoded, _, h) => {
  return {
    isValid: true,
    credencials: decoded,
  };
};
const getKey = (decoded) => {
  return {
    key: decoded.key,
  };
};

if (config.jwt.enable === "true") {
  server.register(hapiJWT);
  server.auth.strategy("jwt", "jwt", {
    key: getKey,
    validate,
  });
}

plugins.push(...swaggerPlugin);

module.exports = {
  server,
  plugins,
};
