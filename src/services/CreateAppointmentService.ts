import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface IRequest {
  provider: string;
  date: Date;
}

class CreateAppointmentServices {
  public async execute({ date, provider }: IRequest): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppoitmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppoitmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentServices;
