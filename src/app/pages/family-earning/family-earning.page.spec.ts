import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FamilyEarningPage } from './family-earning.page';

describe('FamilyEarningPage', () => {
  let component: FamilyEarningPage;
  let fixture: ComponentFixture<FamilyEarningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyEarningPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FamilyEarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
