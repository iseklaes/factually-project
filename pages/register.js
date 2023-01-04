import { useRouter } from "next/router";

export default function Register() {

    const router = useRouter()
    return (      
         <>
            <section class="bg-gray-100 min-h-screen flex items-center justify-center">
                <div class="bg-gray-200 flex rounded-xl shadow-lg p-5">

                    <div class="md:block hidden w-1/2">
                        <img class="rounded-xl" src="logo.png" alt="" />
                    </div>
                
                    <div class="md:w-1/2 px-8 mt-16">
                        <h2 class="font-bold text-3xl text-[#1C3253]">Sign Up</h2>
                        <p class="mt-3 text-[#1C3253] font-medium"> Register below and join Factually today! </p>
                                        
                        <form action="" class="flex flex-col gap-4">
                            <div class="grid grid-cols-2 gap-4">
                                <input class = "p-2 mt-8 rounded-full border" type = "text" name = "firstname" placeholder = "First Name" />                            
                                <input class = "p-2 mt-8 rounded-full border" type = "text" name = "lastname" placeholder = "Last Name"  />
                            </div>                    
                            <input class = "p-2 rounded-full border" type="email" name="email" placeholder="Email" />
                            <input class = "p-2 rounded-full border" type="password" name="password" placeholder="Password" />  
                            <input class = "p-2 rounded-full border" type="password" name="confirmPass" placeholder="Confirm Password" />                                   
                            <button class="bg-[#CE4044] hover:bg-[#1C3253] rounded-full text-white py-2 mt-3"> Sign Up </button>
                        
                        </form>

                        <div class="mt-10 grid grid-cols-3 items-center text-gray-50">
                            <hr class="border-gray-500" />
                            <p class="text-center text-gray-500"> OR </p>
                            <hr class="border-gray-500" />
                        </div>

                        <p class="mt-5 text-[#1C3253] font-medium"> Already have an account? Sign in below! </p>

                        <button class="bg-[#CE4044] hover:bg-[#1C3253] border py-2 w-full rounded-full text-white mt-4"  onClick={() => router.push('/login')}>Sign In</button>
                        <hr class="border-gray-500 mt-10" />
                    </div>
                </div>
            
            </section>
        </>
    );
}