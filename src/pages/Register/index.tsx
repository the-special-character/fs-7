import { useForm } from "react-hook-form";
import Input from "../../components/Input";

const wait = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        rules={{
          required: {
            value: true,
            message: "Name is Required..",
          },
        }}
        label="Name"
        id="name"
        autoComplete="name"
      />
      <Input
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is Required..",
          },
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Please Provide valid email address",
          },
        }}
        name="email"
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
      />
      <Input
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: "Password is Required..",
          },
        }}
        label="Password"
        id="password"
        type="password"
        autoComplete="new-password"
      />
      <Input
        control={control}
        name="confirmPassword"
        rules={{
          required: {
            value: true,
            message: "confirm Password is Required..",
            validate: (value) => {
              const { password } = getValues();
              return (
                value === password || "Password should match confirm password"
              );
            },
          },
        }}
        label="Confirm Password"
        id="confirmPassword"
        type="password"
        autoComplete="new-password"
      />

      <div>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Register;
