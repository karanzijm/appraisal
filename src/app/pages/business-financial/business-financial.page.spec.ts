import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessFinancialPage } from './business-financial.page';

describe('BusinessFinancialPage', () => {
  let component: BusinessFinancialPage;
  let fixture: ComponentFixture<BusinessFinancialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFinancialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessFinancialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
