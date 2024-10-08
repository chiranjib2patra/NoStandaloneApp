import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevbarComponent } from './navbar.component';

describe('NevbarComponent', () => {
  let component: NevbarComponent;
  let fixture: ComponentFixture<NevbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NevbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NevbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
