const fs=require("fs");
const data=JSON.parse(fs.readFileSync("data.json","utf8"));
const updatedfile=data.filter(item=>item.status=='active').map(item=>{
    item.price=item.price*1.10;
    return item;
});
fs.writeFileSync("updated_data.json",JSON.stringify(updatedfile,null,2));
