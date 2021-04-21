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

const postFile = (fileData) => {
  return fetch("http://localhost:3001/upload", {
    method: "POST",
    body: fileData,
  })
    .then(res => res)
    .catch(err => err);
};

export { updateFile, postFile };