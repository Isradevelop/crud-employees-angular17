import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasInfoComponent } from './offcanvas-info.component';

describe('OffcanvasInfoComponent', () => {
  let component: OffcanvasInfoComponent;
  let fixture: ComponentFixture<OffcanvasInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffcanvasInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffcanvasInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
