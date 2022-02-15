const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const Date=require(__dirname+"/date.js")




app.set("view engine", "ejs");
app.use(express.static('public'))

const items=[];
const workitems=[];

app.use(bodyParser.urlencoded({ extended: true }));

// for root directory
app.get("/", function (req, res) {

  const day=Date.getDate();
res.render('list',{listTitle:day,newlistitems:items})
});


app.post("/",function(request,response)
{
  const item=request.body.newitem;
  if (request.body.list==="Work") {

    workitems.push(item);
    response.redirect("/work");
  }


  else
  {
    if(item==="")
    {
        response.redirect("/");
    }
    else
    {
        items.push(item)
        response.redirect("/");
        
    }
  }
   
    
})
// for work directory
app.get("/work",function (req,res) {
  res.render("list",{listTitle:"Work List",newlistitems:workitems})  
})
app.get("/about",function (req,res) {
  res.render("about")  
})



app.listen(process.env.PORT || 3000, function () {
  console.log("SERVER LISTING ON 3000");
});
