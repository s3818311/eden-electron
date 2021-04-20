const updateFile = (fileName, data) => {
  return fetch("http://localhost:3001/update/" + fileName, {
    method: "PATCH",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res)
    .catch(err => err);
};

export default updateFile;