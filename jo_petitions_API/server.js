const express = require('express');
const cors = require('cors');
var knex = require('knex');
const db = knex({
    client: 'pg',
    version:7.2,
    connection: {
      host : '127.0.0.1',
      user : 'mhd.sad22',
      password : '',
      database : 'jo-petitions'
    }
   });
  
//--------------------------

const app = express();
app.use(cors());
app.use(express.json());
//--------------------------

//db('users').insert({'id':'1','firstName':'hasan','lastName':'qattam','email':'hasan@gmail.com','password':'12345'}).returning('id').then(console.log);

app.post('/register',(req,res)=>{
   const {firstName,lastName,email,password} =req.body;
   db('users').insert({'firstName':firstName,'lastName':lastName,'email':email,'password':password})
   .returning('*')
   .then(d=>{
       res.json(d);
       console.log(d)
   }).catch(err=>{res.status(400).json('unable to register this account')});
})
app.post('/signin',(req,res)=>{
   const {email, password}=req.body;
   db.select('*').table('users').where({'email':email , 'password':password}).then(data=>{
        if(data.length >0 ){
            res.json(data);

        }
        else{
            res.status(400).json("user not found");
        }

   }).catch(err=>{res.status(400).json("error in sign in")});

})
app.post('/postpet',(req,res)=>{
    const {title,text,user,type,photo}=req.body;
    db('petitions').insert({'title':title,'text':text,'user':user,'type':type,'photo':photo}).returning('*').then(data=>{
        res.json(data)
    }).catch(err=>{res.status(400).json("error  somewhere in posting ")})
   

})
app.post('/like',(req,res)=>{
    const {userID,petID}=req.body;
    db.transaction(trx=>{
        trx('supports').select('*').where({'userID':userID,'petID':petID}).then(data=>{
            if(data.length ===0){
                trx('petitions').where('id',petID).increment('supports',1).returning('*').then(data=>{
                    if(data.length>0){res.json("increment successfully")}
                }).catch(e=>{res.json("can't increment error!")});

                trx('supports').insert({'userID':userID,'petID':petID}).returning('*').then(data=>{
                    if(data.length>0){res.json("support added")}
                }).catch("error in add support ");
                
            }
            else{res.json("you can't support more than one time !")}
        }).catch(err =>{
            res.json("error within the select supports")})
        .then(trx.commit).catch(trx.rollback);
    })
})
app.get('/browsep',(req,res)=>{
   
    db.select('*').from('petitions').join('users',{'petitions.user':'users.id'}).orderBy('petitions.supports','desc').then(data=>{res.json(data)}).catch(error=>{res.json("error with popular..")})
});

app.get('/browser',(req,res)=>{
    db.select('*').from('petitions').join('users', {'petitions.user': 'users.id'}).orderBy('petitions.id','desc').then(d=>{res.json(d)})
    // db('petitions').select('*').orderBy('id','desc').then(data=>{
    //     res.json(data);
    // }).catch(error=>{res.json("error with recent..")})

})

app.post('/myp',(req,res)=>{
    const {userID}=req.body;
    db.select('*').from('petitions').join('users', {'petitions.user': 'users.id'}).where('petitions.user',userID).then(data=>{res.json(data)}).catch(e=>{res.json("erroooor")})
});
app.post('/mys',(req,res)=>{
    const {userID}=req.body;


    const sub = db('supports').select('petID').where('userID',userID);
    db.select('*').from('petitions').join('users', {'petitions.user': 'users.id'}).where('petitions.id','in',sub).then(data=>{
        res.json(data)
    }).catch(e=>{"error joining"});
//  db('petitions').select('*').where('id','in',sub).then(data=>{
//      res.json(data)
//  }).catch(e=>{"error joining"});
    
});

app.listen("5000");

 