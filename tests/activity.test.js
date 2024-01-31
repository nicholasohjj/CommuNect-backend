const request = require("supertest");
const app = require("../app");

const api = request(app);

describe("Activity API", () => {
  let activityId;

  test("should return all activities", async () => {
    await api
      .get("/activities")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("should add a new activity", async () => {
    const response = await api
      .post("/activities")
      .send({ name: "Orcaella" })
      .expect(201)
      .expect("Content-Type", /application\/json/);

    console.log(response.body); // Log the response body to debug
    activityId = response.body.activity_id;
  });

  test("should update a activity", async () => {
    await api
      .put(`/activities/${activityId}`) // Use the captured activityId
      .send({
        name: "OkayLah",
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("should delete a activity", async () => {
    await api
      .delete(`/activities/${activityId}`) // Use the captured activityId
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});
