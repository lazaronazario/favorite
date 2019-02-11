import { TestBed } from '@angular/core/testing';

import { FilmesService } from './filme.service';

describe('FilmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmesService = TestBed.get(FilmesService);
    expect(service).toBeTruthy();
  });
});
