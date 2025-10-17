import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { LegoSetOverview } from './lego-set-overview';

describe('LegoSetOverview', () => {
  let component: LegoSetOverview;
  let fixture: ComponentFixture<LegoSetOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegoSetOverview],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(LegoSetOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
