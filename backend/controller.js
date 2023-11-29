import schema from './emp.model.js'
export async function addTask(req,res){
    const {Name,Address,Email,Empid,Phone,Designation,Salary,Photo}=req.body
    res.status(201).send(schema.create({Name,Address,Email,Empid,Phone,Designation,Salary,Photo}));
}

export async function getTask(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}

export function delTask(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}

export async function getfullData(req,res){
    const{id}=req.params;
    console.log(id);
    let task=await schema.findOne({_id:id})
    console.log(task);
    res.status(200).send(task)
}
export function delEmployee(req,res)
{
    const{id}=req.params;
    const data=schema.deleteOne({_id:id})
    data.then((resp)=>{
        res.status(200).send(resp)
    }).catch((error)=>{
        res.status(404).send(error)
    })
}
export async function editEmployee(req,res)
{
    const{id}=req.params;
    // const{task}=req.body;
    try {
        const updatedData=req.body;
      const value=await schema.updateOne({_id:id},{$set:updatedData});
       res.status(201).send(value);

    } catch (error) {
        res.status(404).send(error)
    }
  
}


