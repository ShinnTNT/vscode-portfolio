"use client";

// Library
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// Form Stuff
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const schema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  message: z.string(),
});

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function onSubmit() {
    if (!form.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_6kfqhss",
        "template_ofnfp3g",
        form.current || "",
        "3dDjAKQOtTvGImqan"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setIsLoading(false);
            reset();
            toast("Your message has been sent.", {
              hideProgressBar: true,
              autoClose: 2000,
              type: "success",
              position: "bottom-right",
            });
          }
        },
        (error) => {
          setIsLoading(false);
          toast("Something went wrong!", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
            position: "bottom-right",
          });
        }
      );
  }

  return (
    <>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-400 text-sm ">
            Name
          </label>
          <input
            {...register("user_name")}
            id="name"
            type="text"
            autoComplete="off"
            className={cn(
              "block mt-2 tracking-[1px] px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0",
              errors.user_name ? "border-accentColor" : ""
            )}
            placeholder="Enter Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-gray-400 text-sm ">
            Email
          </label>
          <input
            {...register("user_email")}
            id="email"
            type="email"
            autoComplete="off"
            className={cn(
              "block tracking-[1px] mt-2 px-3 py-2 w-full text-sm text-gray-400 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer",
              errors.user_email ? "border-accentColor" : ""
            )}
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="text-gray-400 text-sm ">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            autoComplete="off"
            className={cn(
              "mt-3 block p-3 tracking-[1px] h-20 w-full text-sm bg-transparent rounded-md border text-gray-400 leading-tight border-gray-300 focus:outline-none peer",
              errors.message ? "border-accentColor" : ""
            )}
            placeholder="Enter message"
          />
        </div>

        <button
          type="submit"
          className="mt-2 flex justify-center items-center cursor-pointer w-full h-10 bg-accentColor backdrop-contrast-200 font-semibold tracking-[1px] rounded-md text-white"
        >
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Send</div>
          )}
        </button>
      </form>
      <ToastContainer />
    </>
  );
}
