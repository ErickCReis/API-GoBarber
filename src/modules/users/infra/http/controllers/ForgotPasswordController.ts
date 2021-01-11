import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPaswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswodController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPaswordEmailService,
    );

    await sendForgotPasswordEmail.execute({ email });

    return response.status(204).json();
  }
}
