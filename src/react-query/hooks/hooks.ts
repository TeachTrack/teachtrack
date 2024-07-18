import { useMutation } from "@tanstack/react-query";
import { ILoginForm } from "../../utils/interfaces/auth.interface";
import APIServices from "../services/services";

const useLogin = () => {
  return useMutation({
    mutationFn: (loginValue: ILoginForm) => APIServices.login(loginValue),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.reload();
    },
  });
};

export { useLogin };
