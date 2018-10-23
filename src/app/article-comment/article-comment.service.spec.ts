import { TestBed } from '@angular/core/testing';

import { ArticleCommentService } from './article-comment.service';

describe('ArticleCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleCommentService = TestBed.get(ArticleCommentService);
    expect(service).toBeTruthy();
  });
});
