import { TestBed } from '@angular/core/testing';

import { PostarticleService } from './postarticle.service';

describe('PostarticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostarticleService = TestBed.get(PostarticleService);
    expect(service).toBeTruthy();
  });
});
