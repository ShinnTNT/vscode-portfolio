import HomeLottie from "@/components/lottie/HomeLottie";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex items-center">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[500px] pl-4 h-[500px] flex flex-col justify-center items-start">
          <p className="text-accentColor font-semibold text-[14px]">
            Hello, my name is
          </p>
          <p className="text-white h-[30px] mt-4 font-semibold text-[28px] leading-[1px]">
            Shinn Thant.
          </p>
          <p className="mt-3 h-[30px] text-gray-500 font-semibold text-[30px] leading-[1px]">
            I love exploring new things!
          </p>
          <p className="mt-[4px] text-[14px] tracking-[1px]  text-gray-500 ">
            🚀 &#160;&#160; I specialize in transforming ideas into
            pixel-perfect, user-friendly websites that not only look stunning
            but also function flawlessly. With a strong foundation in HTML, CSS,
            and JavaScript, I bring creativity and technical expertise to every
            project.
          </p>
          <p className="mt-[6px] text-[14px] text-gray-500">
            I enjoy learning new skills and implementing them in real life.
          </p>
          <Link
            href="/contact"
            className="transition-all mt-[50px] group hover:bg-accentColor rounded-sm border-2 border-accentColor w-[120px] h-[30px] flex justify-center items-center bg-transparent p-[20px] cursor-pointer"
          >
            <div className="text-sm group-hover:text-white text-accentColor">
              Get In Touch
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center pl-12 w-full h-full">
        <HomeLottie />
      </div>
    </main>
  );
}
