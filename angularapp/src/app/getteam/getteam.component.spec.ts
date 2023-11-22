import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetteamComponent } from './getteam.component';

describe('GetteamComponent', () => {
  let component: GetteamComponent;
  let fixture: ComponentFixture<GetteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetteamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
