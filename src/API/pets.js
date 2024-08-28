import instance from ".";

const getAllPets = async () => {
  const response = await instance.get("/pets");
  return response.data;
};

const getPetById = async (id) => {
  const response = await instance.get(`/pets/${id}`);
  return response.data;
};

const postPet = async (name, type, image, available) => {
  const response = await instance.post("pets/", {
    name: name,
    type: type,
    image: image,
    adopted: available,
  });
  return response.data;
};

export { getAllPets, getPetById, postPet };
