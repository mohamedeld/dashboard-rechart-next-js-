import { registerValidation } from "@/libs/validations/authValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"


interface User{
  username:string;
  email:string;
  password:string;
}
interface IProps{
  toggleLogin:()=>void;
}
const RegisterForm = ({toggleLogin}:IProps) => {
  const { handleSubmit,register,formState:{errors,isSubmitting} } = useForm<User>({
    resolver:zodResolver(registerValidation),
    mode:'onChange'
  });
  const onSubmit = (values:User) =>{
    toggleLogin()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 ">
              First Name
            </label>

            <input
              type="text"
              id="User Name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2"
              {...register("username")}
            />
            {errors?.username && <span className="text-red-500">{errors?.username?.message}</span>}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              {...register("email")}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2"
            />
            {errors?.email && <span className="text-red-500">{errors?.email?.message}</span>}
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              {...register("password")}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-2"
            />
            {errors?.password && <span className="text-red-500">{errors?.password?.message}</span>}
          </div>
          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              type="submit"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="#" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
  )
}

export default RegisterForm