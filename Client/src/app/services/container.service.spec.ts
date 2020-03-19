import { TestBed } from '@angular/core/testing';

import { ContainerService } from './container.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContainerService', () => {
  let service: ContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    });
    service = TestBed.inject(ContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
