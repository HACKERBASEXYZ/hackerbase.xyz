import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { useSupabase } from "@/context/UserAuthenticationContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  const { supabase } = useSupabase();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formSignup, setFormSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [forgotPassEmail, setForgotPassEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const [errors, setErrors] = useState({
    errorSignup: "",
    errorSignin: "",
    errorForgotPassword: "",
  });
  const [forgotPass, setForgotPass] = useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      setForm({
        email: "",
        password: "",
      });
      setFormSignup({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
      setErrors({
        errorForgotPassword: "",
        errorSignin: "",
        errorSignup: "",
      });
      setForgotPass(false);
      setIsLoading(false);
      setSignupForm(false);
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickLogin = async () => {
    setIsLoading(true);
    const response = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (response.error) {
      setIsLoading(false);
      return setErrors({
        ...errors,
        errorSignin: response.error.message,
      });
    }

    setIsLoading(false);
    router.refresh();
    onClose();
    console.log("AQ");
  };

  const handleClickSignup = async () => {
    setIsLoading(true);
    setErrors({
      ...errors,
      errorSignup: "",
    });

    const getUser = await supabase
      .from("users")
      .select("*")
      .eq("email", formSignup.email);

    // error to fetch the user
    if (getUser.status !== 200) {
      setIsLoading(false);
      return setErrors({
        ...errors,
        errorSignup: "Error on signup",
      });
    }

    if (getUser.data) {
      if (getUser.data.length > 0) {
        setIsLoading(false);
        return setErrors({
          ...errors,
          errorSignup: "User already exists",
        });
      }
    }

    const addUser = await supabase.from("users").insert({
      email: formSignup.email,
      lastName: formSignup.lastName,
      firstName: formSignup.firstName,
    });

    if (addUser.error) {
      setIsLoading(false);
      return setErrors({
        ...errors,
        errorSignup: "Error on signup",
      });
    }

    const response = await supabase.auth.signUp({
      email: formSignup.email,
      password: formSignup.password,
    });

    if (response.error) {
      setIsLoading(false);
      return setErrors({
        ...errors,
        errorSignup: response.error.message,
      });
    }

    setSignupForm(false);
    setErrors({ ...errors, errorSignup: "" });
    setIsLoading(false);
  };

  const handleClickForgotPassword = async () => {
    setIsLoading(true);
    const response = await supabase.auth.resetPasswordForEmail(
      forgotPassEmail
    );

    if (response.error) {
      setIsLoading(false);
      return setErrors({
        ...errors,
        errorForgotPassword: response.error.message,
      });
    }

    setIsLoading(false);
    console.log("Forgot password", response);
  };

  return (
    <div
      className={`flex fixed z-10 inset-0 overflow-y-auto transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex w-full h-full bg-black absolute top-0 opacity-40" />
      <div
        ref={modalRef}
        className="flex flex-col relative justify-center h-[800px] items-center bg-white rounded-lg w-full md:w-4/6 md:max-w-full m-auto shadow-2xl transition-transform duration-300 transform ${
              isOpen ? 'scale-100' : 'scale-90 pointer-events-none'
            }"
      >
        <button
          className="bg-btn w-[40px] text-black font-bold h-[40px] rounded absolute top-5 right-5"
          onClick={() => onClose()}
        >
          X
        </button>
        {signupForm ? (
          <div className="flex w-full justify-center items-center mb-10 flex-col">
            <div className="p-6 h-full w-full text-start flex flex-col text-black justify-center gap-5 items-center">
              <h1 className="text-[24px] font-[600]">HACKERBASE</h1>
              {errors.errorSignup.length > 0 && (
                <h1 className="text-[14px] text-red-500">
                  {errors.errorSignup}
                </h1>
              )}
              <input
                type="text"
                placeholder="Email"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={formSignup.email}
                onChange={(e) =>
                  setFormSignup({
                    ...formSignup,
                    email: e.target.value,
                  })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={formSignup.password}
                onChange={(e) =>
                  setFormSignup({
                    ...formSignup,
                    password: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="First Name"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={formSignup.firstName}
                onChange={(e) =>
                  setFormSignup({
                    ...formSignup,
                    firstName: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={formSignup.lastName}
                onChange={(e) =>
                  setFormSignup({
                    ...formSignup,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <button
                onClick={() => handleClickSignup()}
                className="bg-orange-500 flex justify-center border w-[200px] m-auto rounded-full px-4 py-2 font-bold text-white"
              >
                {isLoading ? (
                  <div className="animate-spin h-[30px] w-[30px] border-t-2 border-b-2 border-gray-900 rounded-full"></div>
                ) : (
                  "Sign Up"
                )}
              </button>
              <h1
                className="text-[14px] underline cursor-pointer"
                onClick={() => setSignupForm(false)}
              >
                Signin
              </h1>
            </div>
          </div>
        ) : forgotPass ? (
          <div className="flex w-full justify-center items-center mb-10 flex-col">
            <div className="p-6 h-full w-full text-start flex flex-col text-black justify-center gap-5 items-center">
              <h1 className="text-[24px] font-[600]">HACKERBASE</h1>
              {errors.errorForgotPassword.length > 0 && (
                <h1 className="text-[14px] text-red-500">
                  {errors.errorForgotPassword}
                </h1>
              )}
              <input
                type="text"
                placeholder="Email"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={forgotPassEmail}
                onChange={(e) => setForgotPassEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <button
                onClick={() => handleClickForgotPassword()}
                className="bg-orange-500 border justify-center flex w-[200px] m-auto rounded-full px-4 py-2 font-bold text-white"
              >
                {isLoading ? (
                  <div className="animate-spin h-[30px] w-[30px] border-t-2 border-b-2 border-gray-900 rounded-full"></div>
                ) : (
                  "Reset Password"
                )}
              </button>
              <h1
                className="text-[14px] underline cursor-pointer"
                onClick={() => setForgotPass(false)}
              >
                Signin
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-center items-center mb-10 flex-col">
            <div className="p-6 h-full w-full text-start flex flex-col text-black justify-center gap-5 items-center">
              <h1 className="text-[24px] font-[600]">HACKERBASE</h1>
              {errors.errorSignin.length > 0 && (
                <h1 className="text-[14px] text-red-500">
                  {errors.errorSignin}
                </h1>
              )}
              <input
                type="text"
                placeholder="Email"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Password"
                className="rounded-lg p-2 focus:outline-none bg-gray-200"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>
            <div className="flex gap-2 justify-center items-center flex-col">
              <button
                onClick={() => handleClickLogin()}
                className="bg-orange-500 border justify-center flex w-[200px] m-auto rounded-full px-4 py-2 font-bold text-white"
              >
                {isLoading ? (
                  <div className="animate-spin h-[30px] w-[30px] border-t-2 border-b-2 border-gray-900 rounded-full"></div>
                ) : (
                  "Login"
                )}
              </button>
              <h1
                className="text-[14px] underline cursor-pointer"
                onClick={() => setForgotPass(true)}
              >
                Forgot my password
              </h1>
              <h1
                className="text-[14px] underline cursor-pointer"
                onClick={() => setSignupForm(true)}
              >
                Signup
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
