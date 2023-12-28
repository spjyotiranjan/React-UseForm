import "./UseForm.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormHooks = () => {
  const { register, handleSubmit,formState: {errors,isSubmitSuccessful,isSubmitted},reset } = useForm();

//   console.log(errors);

  const formSubmitHandler =()=>{
    toast.success('Form submitted Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  return (
    <>
      <ToastContainer />
      <div className="form">
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          {isSubmitSuccessful && <div className="success">
            <p>Registration Successful</p>
          </div>}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              {...register("firstName",{required : "Enter First Name", minLength:{value:4,message:"Minimum 4 characters required"}})}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              {...register("lastName",{required : "Enter Last Name", minLength:{value:4,message:"Minimum 4 characters required"}})}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              {...register("email",{required : "Enter Email",pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email not valid"
              }})}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              {...register("password",{required : "Enter Password", minLength:{value:8,message:"Password should be 8 characters long"},pattern:{
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
                message: "Password not valid"
              }})}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <input type="submit" value={"Register"} className="button" />
          <button className="reset" onClick={()=>{reset()}}>Reset</button>
        </form>
      </div>
    </>
  );
};

export default FormHooks;
