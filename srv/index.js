"use-strict";

const Hapi = require("hapi");
const Joi = require("joi");
const inert = require("inert");
const vision = require("vision");
const HapiSwagger = require("hapi-swagger");
const Mongo = require("./Services/mongo");

const server = new Hapi.Server({ host: "localhost", port: 8000 });

(async () => {
  await server.register([
    inert,
    vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "API - Cadastro de veículos | Node JS + MongoDB",
          version: "1.0"
        }
      }
    }
  ]);
  server.route([
    {
      method: "GET",
      path: "/cars",
      config: {
        handler: async (request, reply) => {
          try {
            const database = new Mongo(await Mongo.connection());
            const retorno = await database.getVehicles();
            return retorno;
          } catch (error) {
            return error;
          }
        },
        description: "Listando Veículos Cadastrados",
        notes: "Todos os veículos salvos no banco de dados.",
        tags: ["api"]
      }
    },
    {
      method: "POST",
      path: "/cars",
      config: {
        handler: async (request, reply) => {
          try {
            const database = new Mongo(await Mongo.connection());
            const retorno = await database.insertVehicle(request.payload);
            return retorno;
          } catch (error) {
            console.log(error);
            return error;
          }
        },
        description: "Cadastro de Veículos",
        notes: "Cadastro de um veículo - Marca, Modelo & Versão",
        tags: ["api"],
        validate: {
          payload: {
            marca: Joi.string().required(),
            modelo: Joi.string().required(),
            versao: Joi.string().required()
          }
        }
      }
    },
    {
      method: "PUT",
      path: "/cars/{id}",
      config: {
        handler: async (request, reply) => {
          try {
            const database = new Mongo(await Mongo.connection());
            const retorno = await database.updateVehicle(
              request.params.id,
              request.payload
            );
            return retorno;
          } catch (error) {
            return error;
          }
        },
        description: "Listando Veículo Específico Cadastrado",
        notes: "Listagem de um veículo específico cadastrado.",
        tags: ["api"],
        validate: {
          params: {
            id: Joi.required().description(
              "O ID é um campo obrigatório para realizar a pesquisa"
            )
          },
          payload: {
            marca: Joi.string().required(),
            modelo: Joi.string().required(),
            versao: Joi.string().required()
          }
        }
      }
    },
    {
      method: "DELETE",
      path: "/cars/{id}",
      config: {
        handler: async (request, reply) => {
          try {
            const database = new Mongo(await Mongo.connection());
            const retorno = await database.deleteVehicle(request.params.id);
            return retorno;
          } catch (error) {
            return error;
          }
        },
        description: "Deletar Veículo Específico Cadastrado",
        notes: "Deleção de um veículo específico cadastrado.",
        tags: ["api"],
        validate: {
          params: {
            id: Joi.required().description(
              "O ID é um campo obrigatório para deletar um registro"
            )
          }
        }
      }
    }
  ]);

  await server.start();
  console.log("Servudor Rodando na Porta: 8000");
})();
