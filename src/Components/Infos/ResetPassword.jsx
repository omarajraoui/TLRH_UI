import React,{useState} from 'react'

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center h-screen w-full">
        
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
      <span className="block w-full text-xl uppercase font-bold mb-4 text-center pb-8 text-[#289672]">Reset Password</span>  
      <div className="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1 pb-5">Please provide your Email</label>
            <input 
            value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
            className="w-full border rounded p-2 outline-none focus:shadow-outline"
             type="email"
              name="email"
               id="email"
                placeholder="Enter your email" />
      </div>
          <button className="bg-[#7ec0aa] hover:bg-[#289672] text-white uppercase text-sm font-semibold px-4 py-2 rounded">Send Recovery Password</button>


      </div>
        
    </div>
  )
}

export default ResetPassword