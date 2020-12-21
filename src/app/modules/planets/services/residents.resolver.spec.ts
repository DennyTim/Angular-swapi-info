import { TestBed } from '@angular/core/testing';

import { ResidentsResolver } from './residents.resolver';

describe('UserResolver', () => {
  let resolver: ResidentsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResidentsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
