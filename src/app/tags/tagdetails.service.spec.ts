import { TestBed } from "@angular/core/testing";

import { TagdetailsService } from "./tagdetails.service";

describe("TagdetailsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TagdetailsService = TestBed.get(TagdetailsService);
    expect(service).toBeTruthy();
  });
});
