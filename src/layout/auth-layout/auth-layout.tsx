import { ReactNode } from "react";

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <div className="bg-gray200 p-6 h-screen flex flex-col justify-center ">
      <p className="text-2xl font-playwrite mb-4">TeachTrack</p>
      <div className="flex justify-center items-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
