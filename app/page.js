"use client"
import  React,{ useState } from "react";
import TaskCard from './component/TaskCard';
import Link from 'next/link';

export default function Home() {
  const[taskList,setTaskList] = useState([{todo:"",in_progress:"",done:""}]);

  return (
    <main >
      <div className="flex">
         <div className="col-span-3 mx-3">
               <div className="bg-blue-900 w-60 px-3 py-2 rounded">TODO</div>
               <div>
                {taskList.map((tak)=>(
                  <div>
                      <TaskCard>{tak.todo}</TaskCard>
                  </div>
                )
                )
                }
               </div>
         </div>
        
         <div className="col-span-3 mx-3">
               <div className="bg-yellow-500 w-60 px-3 py-2 rounded">In Progress</div>
               <div>
               {taskList.map((tak)=>(
                  <div>
                      <TaskCard>{tak.in_progress}</TaskCard>
                  </div>
                )
                )
                }
               </div>
         </div>

         <div className=" col-span-3 mx-3">
              <div className="bg-green-900 w-60 px-3 py-2 rounded">Done</div>
              <div>
              {taskList.map((tak)=>(
                  <div>
                      <TaskCard>{tak.done}</TaskCard>
                  </div>
                )
                )
                }
              </div>
         </div>

         <div className='col-span-3 mx-3 mt-2'>
             <Link href={'/tasks/create'} className='rounded w-40 bg-black text-white px-3 py-2'>add new task + </Link>
         </div>
      </div>
    </main>
  );
}
