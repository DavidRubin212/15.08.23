const express = require("express");

const app = express();

const port = 3000;

app.get("/all-users", (req, res) => {
	res.json(users);
});

app.get("/all-users/:id", (req, res) => {
	res.json(users.filter((i) => i.id === req.params.id)[0]);
});

app.post("/all-users/new-user", express.json(), (req, res) => {
    const newUser = {
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
    };
    users.push(newUser);

    // Send the updated users array as a JSON response
    res.json(users);

    console.log(newUser, users);
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

const users = [
	{ id: "1", email: "vbsjkdf@app.com", password: "vdvbdv" },
	{ id: "2", email: "vbsjf@app.com", password: "vvbdv" },
	{ id: "3", email: "vbskdf@app.com", password: "vd" },
];
