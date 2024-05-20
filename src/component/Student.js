import react,{useState,useEffect}from 'react'
function Student(){
const [count,setcount]=useState(0)
useEffect(()=>{
console.log('counting')
},[count]);
return(
<>
<h1>counting:{count}</h1>
<button onClick={()=>setcount(count+1)}>Add</button>
<button onClick={()=>setcount(count-1)}>subtact</button>
</>
)

}
export default Student