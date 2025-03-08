import supertest from "supertest";

const port = process.env.port || 4000;

const requester = supertest(`http://localhost:${port}/api`);

export { requester };
