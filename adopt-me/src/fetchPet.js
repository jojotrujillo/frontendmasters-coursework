const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  // react-query specific error handling. fetch doesn't always throw an error but react-query
  // needs to know if the fetch was successful or not.
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  // react-query expects a promise to be returned which any async function will do, so no need to await .json() here
  return apiRes.json();
};

export default fetchPet;
