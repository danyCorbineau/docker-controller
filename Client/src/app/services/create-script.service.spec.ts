import { TestBed } from '@angular/core/testing';

import { CreateScriptService } from './create-script.service';

describe('CreateScriptService', () => {
  let service: CreateScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
