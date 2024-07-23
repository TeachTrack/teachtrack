export interface ISchool {
  readonly _id: string;
  name: string;
  phoneNumber: string;
  address: string;
  subdomain: string;
  status: string;
  directorId: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  studentsCount: number;
  coursesCount: number;
  teachersCount: number;
  staffsCount: number;
}
