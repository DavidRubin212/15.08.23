const express = require("express");

const app = express();

const port = 3000;

app.get("/all-users", (req, res) => {
	res.json(users);
});

app.get("/all-users/:id", (req, res) => {
	res.json(users.filter((i) => i.id === req.params.id)[0]);
});

app.put("all-users/new-user/:id", (req, res) => {
    const newUsername = req.params.id;
    const userData = req.body;
    res.send(newUsername)
    res.send(userData)

});

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server is up and running on port:${port}`);
});

const users = [
	{ id: "1", email: "vbsjkdf@app.com", password: "vdvbdv" },
	{ id: "2", email: "vbsjf@app.com", password: "vvbdv" },
	{ id: "3", email: "vbskdf@app.com", password: "vd" },
];
