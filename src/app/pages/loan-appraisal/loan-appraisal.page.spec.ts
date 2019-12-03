import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanAppraisalPage } from './loan-appraisal.page';

describe('LoanAppraisalPage', () => {
  let component: LoanAppraisalPage;
  let fixture: ComponentFixture<LoanAppraisalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAppraisalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanAppraisalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
