import { container } from 'tsyringe';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);