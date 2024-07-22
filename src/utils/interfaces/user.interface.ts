import { UserRoles, UserStatus, UserGender } from "../enums/enums";

export interface IUser {
  fullName: string;
  phoneNumber: string;
  role: UserRoles;
  status?: UserStatus;
  gender: UserGender;
  password: string;
  guardianName?: string;
  guardianPhoneNumber?: string;
  schoolId: string;
  courseIds?: string;
  address?: string;
  salary?: number;
  birthday?: Date;
}
