const userDetail = {
    id: 1,
    name: "foo",
    job: "Noob developer",
    place: "Mars"
  };
  
  function getUser(user) {
    console.log("in the api");
    console.log(user);
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (user === "foo") return resolve(userDetail);
        return reject("No such user");
      }, 2000)
    );
  }
  
  export default getUser;
  