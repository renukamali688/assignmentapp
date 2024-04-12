import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSearchComponent } from './space-search.component';

describe('SpaceSearchComponent', () => {
  let component: SpaceSearchComponent;
  let fixture: ComponentFixture<SpaceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
