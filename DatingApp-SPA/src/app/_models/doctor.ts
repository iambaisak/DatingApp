import { DoctorPatient } from './DoctorPatient';
import { Patient } from './Patient';

export interface Doctor {
    DoctorId: number;
    Name: string;
    Gender: string;
    Age: number;
    City: string;
    Department: string;
    PhotoUrl: string;
    doctorPatient: DoctorPatient[];
}
