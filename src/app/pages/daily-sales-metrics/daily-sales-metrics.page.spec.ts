import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailySalesMetricsPage } from './daily-sales-metrics.page';

describe('DailySalesMetricsPage', () => {
  let component: DailySalesMetricsPage;
  let fixture: ComponentFixture<DailySalesMetricsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySalesMetricsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailySalesMetricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
