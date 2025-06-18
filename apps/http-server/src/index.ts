import express from "express";
import { client } from "@repo/db/client"
const app = express();

app.use(express.json())

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

  const user  = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        userID:user.id
    })

}) 

app.get("/" , (req,res)=>{

    res.send("hi there")
})

app.listen(3001)
