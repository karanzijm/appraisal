import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyExpensesPage } from './family-expenses.page';

describe('FamilyExpensesPage', () => {
  let component: FamilyExpensesPage;
  let fixture: ComponentFixture<FamilyExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyExpensesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
