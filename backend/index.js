const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 6005;

const Private_key="manoj76512765"

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://manojkumarp2705:manoj12345@samsung.ypojxmq.mongodb.net/?retryWrites=true&w=majority&appName=samsung";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const devicedata = client.db("samsungdata").collection("devices");

    app.get("/", (req, res) => {
      res.send("hello world");
    });

    app.post("/upload", async (req, res) => {
      const data = req.body;
      const result = await devicedata.insertOne(data);
      res.json({ success: true, result: result });
    });
    app.get("/alldevices", async (req, res) => {
      const data = devicedata.find();
      const result = await data.toArray();
      res.send(result);
    });

    app.delete("/delete/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await devicedata.findOneAndDelete(filter);
      res.send(result);
    });

    app.get("/getone/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await devicedata.findOne(filter);
      res.send(result);
    });
    app.patch("/update/:id", async (req, res) => {
      const id = req.params.id;
      const updatedata = req.body;
      const filter = { _id: new ObjectId(id) };

      const updatedoc = {
        $set: {
          ...updatedata,
        },
      };
      const options = { upsert: true };
      const result = await devicedata.updateOne(filter, updatedoc, options);
      console.log(result);
      res.json({ result: result });
    });

    const users = client.db("samsungdata").collection("users");

    app.post("/register", async (req, res) => {
      try {
        const { username, email, password } = req.body;
        const hashedPassword =await bcrypt.hash(password,10);
        const result = await users.insertOne({ username, email,password:hashedPassword });
        console.log("user registered", username);
        console.log(hashedPassword);

        res.json({ success: true, result });
      } catch (error) {
        res.json({ success: false, error: error.message });
      }
    });

    app.post("/login",async(req,res)=>{
      try {
        const {email,password}=req.body
        const alluser= users.find().toArray()
      const user=(await alluser).find((item)=>item.email===email)
      console.log(user);
      
      if(user){
        const ispassvalid=await bcrypt.compare(password,user.password)
        if(ispassvalid){
          const token=jwt.sign({email},Private_key,{expiresIn:"1h"})
          res.json({result:"valid password",token})
        }
        else{
          res.json({resullt:"invalid password"})
        }
      }else{
        res.json({result:"not registered ,please register"})
      }
      
      } catch (error) {
        res.json({result:false,error:error.message})
      }
      
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log("mongodb connected successfully http://localhost:" + PORT);
});
