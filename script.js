const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: " ", 
  password: " ", 
  database: " ", 
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to database: ", err);
    return;
  }
  console.log("Connected to database!");
});

//onclick custom functions

function addId1() {
   const item = {
     name: "Nike Swift Run 3",
     price: 5999,
   };

  fetch("http://localhost:5500/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      console.log("Data inserted into database!");
    })
    .catch((error) => {
      console.error("Error inserting data into database:", error);
    });
}

function addId2() {
  const item = {
    name: "Galaxy S23 Ultra",
    price: 124990,
  };

  fetch("http://localhost:5500/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      console.log("Data inserted into database!");
    })
    .catch((error) => {
      console.error("Error inserting data into database:", error);
    });
}

function addId3() {
  const item = {
    name: "Fire-Bolt SmartWatch",
    price: 3200,
  };

  fetch("http://localhost:5500/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      console.log("Data inserted into database!");
    })
    .catch((error) => {
      console.error("Error inserting data into database:", error);
    });
}

function addId4() {
  const item = {
    name: "OnePlus Nord Buds 2",
    price: 8400,
  };

  fetch("http://localhost:5500/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      console.log("Data inserted into database!");
    })
    .catch((error) => {
      console.error("Error inserting data into database:", error);
    });
}

// server routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  con.query(
    "INSERT INTO data_table (name, price) VALUES (?, ?)",
    [name, price],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into database:", err);
        res.sendStatus(500);
      } else {
        console.log("Data inserted into database!");
        res.sendStatus(200);
      }
    }
  );
});

// app.post("/", (req, res) => {
//   console.log(req.body);
//   const name = req.body.product;
//   const price = req.body.price;
//   // const { name, price } = req.body;
//   const sql = "INSERT INTO sampletable  VALUES (?, ?)";
//   const values = [name, price];

//   con.query(sql, values, (err, result) => {
//     if (err) {
//       console.error("Error inserting user: ", err);
//       res.status(500).send("Error creating user");
//       return;
//     }
//     console.log("1 record inserted");
//     res.send("User created successfully!");
//   });

// });

const port = 5500;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

process.on("SIGINT", () => {
  con.end((err) => {
    if (err) {
      console.error("Error ending database connection: ", err);
      process.exit(1);
    }
    console.log("Database connection ended");
    process.exit(0);
  });
});

