const supertest = require("supertest");
const app = require("./server");
const db = require("./database");

const request = supertest(app);

beforeAll(async () => {
    await db.query("TRUNCATE TABLE test");
});

describe("server tests", () => {
    it("should create a new user", async () => {
        const { status, type, body } = await request
            .post("/api/users/test")
            .send({ name: "John Doe", email: "john.doe@mail.com" });

        expect(status).toBe(201);
        expect(type).toBe("application/json");
        expect(body.name).toBe("John Doe");
        expect(body.email).toBe("john.doe@mail.com");
        expect(body.message).toBeDefined();
        expect(body.message).toBeNull();
    });

    it("should return an error for a non-unique email", async () => {
        const { status, type, body } = await request
            .post("/api/users/test")
            .send({ name: "James Doe", email: "john.doe@mail.com" });

        expect(status).toBe(500);
        expect(type).toBe("application/json");
        expect(body.message).toBe("Something went wrong");
    });

    it("should return an error for missing required fields", async () => {
        const { status, type, body } = await request
            .post("/api/users/test")
            .send({ name: "Jane Doe", emal: "jane.doe@mail.com" });

        expect(status).toBe(400);
        expect(type).toBe("application/json");
        expect(body.message).toBe("Please include name and email field");
    });
});
