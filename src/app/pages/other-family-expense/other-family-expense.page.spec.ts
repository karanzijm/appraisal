import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherFamilyExpensePage } from './other-family-expense.page';

describe('OtherFamilyExpensePage', () => {
  let component: OtherFamilyExpensePage;
  let fixture: ComponentFixture<OtherFamilyExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherFamilyExpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherFamilyExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
