"use client"
import  React,{ useState} from "react";
import axios from 'axios';


const CreateTask = () => {

    
    const [formData,setFormData] = useState({
        title:"",
        description:"",
        status:"",
        deadline:""
    })
     
    const handleChange = (event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    const handleSubmit=async(event)=>{
        event.preventDefault()
        if(formData.title && formData.description && formData.status && formData.deadline){
            try{
            const response = await axios.post("/api/createForm",formData);
            console.log("task created successfully",response.data);
        }catch(error){
          console.error("something went wrong",error)
        }
        }
        
      }

      
  return (
    <div className="text-start align-center w-2/3 mb-10" >
        <form className="mt-10" onSubmit={handleSubmit}>
            <div className="w-full mb-3" >
                <label>
                    Title
                </label><br/>
                <input name="title" className="w-full" type="text" />
            </div>

            <div className="mb-3" >
                <label>
                    Description
                </label><br/>
                <textarea name="description" className='w-full' rows={4}></textarea>
            </div>

            <div className='flex'>
            <div className="mx-3 mb-3" >
                <label>
                    status
                </label><br/>
                <select name='status' onChange={handleChange} className='w-full'>
                    <option selected>select status</option>
                    <option value="todo">TODO</option>
                    <option value="in_progress">In progress</option>
                    <option value="done">Done</option>
                </select>
            </div>

            {/* <div className="mx-3 mb-3" >
                <label>
                    Assigned User
                </label><br/>
                <select name='status' onChange={handleChange} className='w-full'>
                     <option>select user </option>
                     {userList?.map((item)=>{
                       return(
                        <div>
                             <option key={item._id} value={item._id}>
                                name:{item.name}
                             </option>
                        </div> 
                            
                        
                     )    
                     }
                    )
                     }
                </select>
            </div> */}

            <div className='mb-3 mx-5'>
              <label htmlFor="deadline">Deadline</label>
              <input onChange={handleChange} type="date" name='deadline' className='w-full' min={new Date().toISOString().split("T")[0]}/>
             
           </div>
            </div>

            <button className='bg-green-900 w-40 rounded h-8' type='submit'>Create New Task</button>
        </form>
    </div>
  )
}

export default CreateTask;