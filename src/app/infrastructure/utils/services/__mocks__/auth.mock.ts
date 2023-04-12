import { UserDomainModel } from '@domain/models';

export const userMock: UserDomainModel = {
  email: 'mockEmail',
  googleId: 'mockGoogleId',
  name: 'mockName',
  photoUrl: 'mockPhotoUrl',
};

export const token = 'mockToken';

export const mockResponse = {
  data: userMock,
  token,
};
