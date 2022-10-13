import { ProductManager } from '../../../../../src/contexts/products/application/ProductManager';
import { Product } from '../../../../../src/contexts/products/domain/entities/Product';
import { CourseRepositoryMock } from '../__mocks__/CourseRepositoryMock';

let repository: CourseRepositoryMock;
let creator: ProductManager;

beforeEach(() => {
  repository = new CourseRepositoryMock();
  creator = new ProductManager(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = 'some-id';
    const name = 'some-name';
    const duration = 'some-duration';

    const course = new Product({id, name, duration});

    await creator.run(id, name, duration);

    repository.assertLastSavedCourseIs(course);
  });
});
