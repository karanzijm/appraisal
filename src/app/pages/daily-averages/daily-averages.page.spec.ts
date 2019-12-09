import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyAveragesPage } from './daily-averages.page';

describe('DailyAveragesPage', () => {
  let component: DailyAveragesPage;
  let fixture: ComponentFixture<DailyAveragesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyAveragesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyAveragesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
