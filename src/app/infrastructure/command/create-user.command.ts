import { ICreateUserCommand } from '@domain/command';

export class CreateUserCommand implements ICreateUserCommand {
  name!: string;
  email!: string;
  photoUrl!: string;
  googleId!: string;
}
