import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasEditComponent } from './offcanvas-edit.component';

describe('OffcanvasEditComponent', () => {
  let component: OffcanvasEditComponent;
  let fixture: ComponentFixture<OffcanvasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
