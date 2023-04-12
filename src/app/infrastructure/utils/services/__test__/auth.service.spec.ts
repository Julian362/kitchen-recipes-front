// import { JwtService } from '@nestjs/jwt';
// import { Test, TestingModule } from '@nestjs/testing';
// import { mockResponse, token, userMock } from '../__mocks__/auth.mock';
// import { AuthService } from '../auth.service';

// describe('AuthService', () => {
//   let service: AuthService;
//   let jwtService: JwtService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         AuthService,
//         {
//           provide: JwtService,
//           useValue: {
//             sign: jest.fn(() => token),
//           },
//         },
//       ],
//     }).compile();

//     service = module.get<AuthService>(AuthService);
//     jwtService = module.get<JwtService>(JwtService);
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('generateAuthResponse', () => {
//     it('should return an Observable of IUserResponse', (done) => {
//       // Arrange
//       jest.spyOn(jwtService, 'sign').mockReturnValueOnce(token);
//       // Act
//       const result = service.generateToken(userMock);

//       // Assert
//       result.subscribe({
//         next: (result) => {
//           expect(result).toEqual(mockResponse);
//           done();
//         },
//       });
//     });

//     it('should call jwtService sign method with user._id', (done) => {
//       // Arrange
//       jest.spyOn(jwtService, 'sign').mockReturnValueOnce(token);

//       // Act
//       const result = service.generateToken(userMock);

//       // Assert
//       expect(jwtService.sign).toHaveBeenCalledWith({
//         email: userMock.email,
//         name: userMock.name,
//       });
//       result.subscribe({
//         next: (result) => {
//           expect(jwtService.sign).toHaveBeenCalledWith({
//             email: userMock.email,
//             name: userMock.name,
//           });
//           expect(result).toEqual(mockResponse);
//           expect(result.data).toEqual(userMock);
//           expect(result.token).toEqual(token);
//           done();
//         },
//       });
//     });
//   });
// });
