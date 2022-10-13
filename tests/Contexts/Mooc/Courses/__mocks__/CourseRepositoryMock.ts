import { IProductRepository } from '../../../../../src/contexts/products/domain/contracts/IProductRepository';
import { Product } from '../../../../../src/contexts/products/domain/entities/Product';

export class CourseRepositoryMock implements IProductRepository {
  private mockSave = jest.fn();

  async save(course: Product): Promise<void> {
    this.mockSave(course);
  }

  assertLastSavedCourseIs(expected: Product): void {
    const mock = this.mockSave.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as Product;
    expect(lastSavedCourse).toBeInstanceOf(Product);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }

}
