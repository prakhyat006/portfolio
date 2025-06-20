import React, { useEffect, useState } from 'react'
import { projectsData,projectsNav } from './Data';
import WorksItem from './WorksItem';
const Works = () => {
    const[item,setitem] =useState({name:"all"});
    const [projects,setprojects] =useState([]);
    const [active,setactive] = useState(0);
    useEffect(()=>{
        if(item.name==='all'){
            setprojects(projectsData);
        }
        else{
            const newproject =projectsData.filter((project)=>{
                return project.category === item.name;
            });
            setprojects(newproject);
        }
    },[item]);

    const handleClick= (e,index)=>{
        setitem({name:e.target.textContent});
        setactive(index)
    }
  return (
    <div>
        <div className="work__filters">
        {projectsNav.map((item,index)=>{
            return (
                <span onClick={(e)=>{
                    handleClick(e,index);
                }} className={`${active === index ? 'active-work' : ""} work__item`} key={index}>{item.name}</span>
            )
        }) }
    </div>

    <div className="work__container container grid">
  {projects.map((item)=>(
    <WorksItem item={item} key={item.id} git={item.git}/>
  ))}
</div>
    </div>
  )
}

export default Works
