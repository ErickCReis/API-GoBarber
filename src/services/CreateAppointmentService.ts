import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface IRequest {
  provider: string;
  date: Date;
}

class CreateAppointmentServices {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: IRequest): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppoitmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppoitmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentServices;
