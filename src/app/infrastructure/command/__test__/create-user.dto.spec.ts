import { CreateUserCommand } from '../create-user.command';

describe('CreateUserCommand', () => {
  let createUserCommand: CreateUserCommand;

  beforeEach(() => {
    createUserCommand = new CreateUserCommand();
  });

  it('should be defined', () => {
    expect(createUserCommand).toBeDefined();
  });
});
