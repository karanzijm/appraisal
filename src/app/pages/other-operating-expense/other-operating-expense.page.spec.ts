import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherOperatingExpensePage } from './other-operating-expense.page';

describe('OtherOperatingExpensePage', () => {
  let component: OtherOperatingExpensePage;
  let fixture: ComponentFixture<OtherOperatingExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOperatingExpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherOperatingExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
