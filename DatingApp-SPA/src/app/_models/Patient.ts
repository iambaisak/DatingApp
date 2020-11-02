import { Doctor } from './doctor';
import { DoctorPatient } from './DoctorPatient';

export interface Patient {
    PatientId: number;
    Name: string;
    Gender: string;
    Age: number;
    City: string;
    doctorPatient: DoctorPatient[];
}
