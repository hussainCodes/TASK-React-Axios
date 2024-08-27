import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  console.log(response.data);
  return response.data;
};

// const getPetById = async () => {
//   const response = await instance.get(`/pets/${id}`);
//   return response.data.find((petObject) => response.data.map(pet => pet) == id);
// };

export { getAllPets };
