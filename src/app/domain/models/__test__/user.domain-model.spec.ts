import { mockUserDomainModel } from '../__mocks__/domain-model.mock';
import { UserDomainModel } from '../user.domain-model';

describe('UserDomainModel', () => {
  let userDomainModel: UserDomainModel;

  beforeEach(() => {
    userDomainModel = new UserDomainModel();
    userDomainModel.email = mockUserDomainModel.email;
    userDomainModel.googleId = mockUserDomainModel.googleId;
    userDomainModel.mealPlannerId = mockUserDomainModel.mealPlannerId;
    userDomainModel.name = mockUserDomainModel.name;
    userDomainModel.photoUrl = mockUserDomainModel.photoUrl;
  });

  describe('should be defined and is a instance of UserDomainModel', () => {
    it('should be defined and is a instance of UserDomainModel', () => {
      // Assert
      expect(userDomainModel).toBeDefined();
      expect(userDomainModel).toBeInstanceOf(UserDomainModel);
    });
  });

  describe('should have the required properties', () => {
    it('should have the required properties', () => {
      // Assert
      expect(userDomainModel.email).toBeDefined();
      expect(userDomainModel.googleId).toBeDefined();
      expect(userDomainModel.mealPlannerId).toBeDefined();
      expect(userDomainModel.name).toBeDefined();
      expect(userDomainModel.photoUrl).toBeDefined();
    });
  });
});
