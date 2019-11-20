import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperatingExpensesPage } from './operating-expenses.page';

describe('OperatingExpensesPage', () => {
  let component: OperatingExpensesPage;
  let fixture: ComponentFixture<OperatingExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperatingExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
