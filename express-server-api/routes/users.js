const express = require('express');
const router = express.Router();

const User = require('../Models/User')
/* GET users listing. */
router.get('/', (req, res) => {
  return res.json({data:'Received a GET HTTP method users'});
});

router.get('/:id', (req, res) => {
  return res.json({});
});

router.post('/', async(req, res) => {
  try{
    const user = await User.create(req.body)
    res.json({user})
    
  }catch(err){
    res.json({err});
  }
});

router.post("/login", async(req,res)=>{


  try{
    const foundUser = await User.find({name:req.body.name})
    console.log
    res.json({
      data:foundUser,
      status:200,
      success: true
    })
  }catch(err){
    res.json(err)
  }

})
router.post("/register", async(req,res)=>{
  console.log('hit this');
  //its going to decrypt the password here

  const userDbEntry       = {};
  userDbEntry.email       = req.body.username;
  userDbEntry.firstName   = req.body.firstName;
  userDbEntry.lastName    = req.body.lastName;
  userDbEntry.password    = req.body.password;

  console.log(userDbEntry);

  try {
      const createdUser = await User.create(userDbEntry);
      console.log(createdUser,"this is the created");
      res.json({
        data:createdUser,
        status:200,
        success: true
      })
      res.locals.user = createdUser

  } catch(err){
      res.send(err)
  }

})
router.put('/', (req, res) => {
  return res.json({data:'Received a PUT HTTP method user'});
});

router.delete('/', (req, res) => {
  return res.json({data:'Received a DELETE HTTP method user'});
});

module.exports = router;
``