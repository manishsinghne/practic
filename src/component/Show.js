import React,{useState} from 'react'

function Show() {
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [number,setnumber]=useState()
    const [password,setpassword]=useState()
    const [country,setcountry]=useState()
    function submits(e){
      e.preventDefault()
let obj={
  uname:name,
  uemail:email,
  unumber:number,
  upass:password,
  ucountry:country
}
console.log(obj)
    }
  return (
    <div>
        {/* <h1>{name} {email}{number}{password}{country}</h1> */}
        <form onSubmit={submits}>
        <h1>React Form</h1>

            <div>
        <label>name  :</label>
        <input type='text' onChange={(e)=>setname(e.target.value)} />
        </div>
        <div>

        <label>email  :</label>
        <input type='email' onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div>

        <label>mobile no  :</label>
        <input type='number'  onChange={(e)=>setnumber(e.target.value)}/>
        </div>
        <div>

        <label>password  :</label>
        <input type='password'  onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <label>password  :</label>
        <label>password</label>

       <select        onChange={(e)=>setcountry(e.target.value)}
> country  :
        <option>india</option>
        <option>china</option>
        <option>china</option>
        <option>china</option>
        <option>china</option>
        </select>
        <div>
        <button >submit</button>
        </div>
        </form>

    </div>
  )
}

export default Show