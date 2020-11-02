import { Doctor } from './doctor';
import { Patient } from './Patient';

export interface DoctorPatient {
    DoctorId: number;
    PatientId: number;
    Doctor: Doctor[];
    Patient: Patient[];
}
