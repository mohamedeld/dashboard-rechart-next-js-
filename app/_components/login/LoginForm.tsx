import { loginValidation, registerValidation } from "@/libs/validations/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";


interface User {
  email: string;
  password: string;
}
interface IProps {
  toggleLogin: () => void;
}
const LoginForm = ({ toggleLogin }: IProps) => {
  const router = useRouter();
  const { handleSubmit,reset, register, formState: { errors, isSubmitting } } = useForm<User>({
    resolver: zodResolver(loginValidation),
    mode: 'onChange'
  });
  const onSubmit = async (values: User) => {
    try{
      const result = await signIn("credentials",{
        email:values.email,
        password:values.password,
        redirect:false,
      })
      if(result?.error){
        toast.error(result?.error);
      }else{

        toast.success("logined successfully");
        router.replace("/")
      }
     
    }catch(error:unknown){
      console.log(error);
    }
    reset({
      email:'',
      password:''
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
      <div className="col-span-12">
        <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

        <input
          type="email"
          id="Email"
          {...register("email")}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-2"
        />
        {errors?.email && <span className="text-red-500">{errors?.email?.message}</span>}
      </div>

      <div className="col-span-12">
        <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

        <input
          type="password"
          id="Password"
          {...register("password")}
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2 px-2"
        />
        {errors?.password && <span className="text-red-500">{errors?.password?.message}</span>}
      </div>
      <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
        <button
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
          type="submit"
        >
          {isSubmitting ? 'Loginning...':'Login'}
        </button>

        <p className="mt-4 text-sm text-gray-500 sm:mt-0">
          Do not have an account yet?{" "}
          <span onClick={toggleLogin} className="text-gray-700 cursor-pointer hover:underline">Register</span>.
        </p>
      </div>
    </form>
  )
}

export default LoginForm