const express = require("express");

const app = express();

app.use(express.json());

let currentUser = {
    name: "Jong Deep",
    age: 54,
    hairColor: "Black",
    hobbies: ["Swimming", "Bicycling", "Video games"],
  },
  users = [
    {
      name: "Jong Deep",
      age: 54,
      hairColor: "brown",
      hobbies: ["Swimming", "Bicycling", "Video games"],
    },
    {
      name: "Brenda Smith",
      age: 33,
      hairColor: "brown",
      hobbies: ["golf", "mathematics"],
    },
    {
      name: "Jane Garcia",
      age: 27,
      hairColor: "blonde",
      hobbies: ["biologi", "medicine", "gymnastics"],
    },
  ];

const products = [
  {
    name: "Flat-Screen Tv",
    price: "$300",
    description: "Hege LCD screen, great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "10$",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for the optimus",
    rating: 4.2,
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params,
    { user: updateUser } = req.body;

  // users = users.map((user) => user.id === id ? updateUser : )
  res.json(users.find((user) => user.id === id));
});

app.get("/users/", (req, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("Server is listening in port 8080");
});
