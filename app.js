const users = [
	{ id: "1", email: "vbsjkdf@app.com", password: "vdvbdv" },
	{ id: "2", email: "vbsjf@app.com", password: "vvbdv" },
	{ id: "3", email: "vbskdf@app.com", password: "vd" },
];
const { log, error } = require("console");
const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 5;
const app = express();
const { v4: uuidv4 } = require("uuid");
const port = 3000;

app.get("/all-users", (req, res) => {
	res.json(users);
});

app.get("/all-users/:id", (req, res) => {
	res.json(users.filter((i) => i.id === req.params.id)[0]);
});

app.post("/all-users/new-user", express.json(), (req, res) => {
	bcrypt.hash(req.body.password, saltRounds).then((hash) => {
		const newUser = {
			id: uuidv4(),
			email: req.body.email,
			password: hash
		};
		users.push(newUser);

		res.json(users);
	});
	console.log(users);
});

app.put("/all-users/:id", express.json(), (req, res) => {
	const userId = req.params.id;
	const updatedUserData = req.body;

	for (let user of users) {
		if (user.id === userId) {
			Object.assign(user, updatedUserData);
			return res.json(users);
		}
	}

	res.status(404).json({ message: "User not found" });
});

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server is up and running on port:${port}`);
});

app.delete("/all-users/delete/:id", express.json(), (req, res) => {
	const userId = req.params.id;
	console.log(userId);
	let usersIndex = -1;
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == userId) {
			usersIndex = i;
			console.log(usersIndex);
			break;
		}
	}
	console.log(usersIndex);

	if (usersIndex !== -1) {
		users.splice(usersIndex, 1);
		res.json(users);
	} else {
		res.status(404).json({ message: "User not found" });
	}

	console.log(users);
});
app.post("/all-users/verify", express.json(), (req, res) => {
	const emailCheck = req.params.email;
    const passCheck = req.params.password;
	let emailExists = false;

	for (let i = 0; i < users.length; i++) {
		if (users[i].email === emailCheck) {
			emailExists = true;
            
			break;
		}
	}

	if (emailExists) {
		res.send("email exists");
	} else {
		res.send("not exist");
	}
});
