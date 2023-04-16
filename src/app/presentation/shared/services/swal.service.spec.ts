import { TestBed } from '@angular/core/testing';
import Swal from 'sweetalert2';
import { SwalService } from './swal.service';

describe('SwalService', () => {
  let service: SwalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalService],
    });
    service = TestBed.inject(SwalService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('toFire', () => {
    it('should call Swal.fire with the correct parameters', () => {
      // Arrange
      const mockTitle = 'Test Title';
      const mockMessage = 'Test Message';
      const mockType = 'success';
      const SwalSpy = jest.spyOn(Swal, 'fire').mockImplementation();

      // Act
      service.toFire(mockTitle, mockMessage, mockType);

      // Assert
      expect(SwalSpy).toHaveBeenCalledWith({
        color: '#96C0B7',
        title: mockTitle,
        text: mockMessage,
        icon: mockType,
        showConfirmButton: false,
        position: 'top-end',
        timer: 1500,
      });
    });
  });
});
