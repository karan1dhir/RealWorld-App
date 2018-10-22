import { TestBed } from "@angular/core/testing";

import { ProfiledetailsService } from "./profiledetails.service";

describe("ProfiledetailsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ProfiledetailsService = TestBed.get(ProfiledetailsService);
    expect(service).toBeTruthy();
  });
});
