import { axiosInstanceWithoutToken } from "../../services/axios-config";
import { ILoginForm } from "../../utils/interfaces/auth.interface";

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
}

const ServiceInstance = new APIServices();
export default ServiceInstance;
