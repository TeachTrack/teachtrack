import axiosInstance, { axiosInstanceWithoutToken } from "../../services/axios-config";
import { ILoginForm } from "../../utils/interfaces/auth.interface";
import { IUser } from "../../utils/interfaces/user.interface";

class APIServices {
  /**
   *To Log in
   * @param loginValue
   * @returns
   */
  async login(loginValue: ILoginForm) {
    const res = await axiosInstanceWithoutToken.post("/auth/login/", loginValue);
    return res;
  }

  async getMe() {
    const res = await axiosInstance.get("/me");
    return res.data as IUser;
  }
}

const ServiceInstance = new APIServices();
export default ServiceInstance;
