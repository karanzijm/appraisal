import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockValuationPage } from './stock-valuation.page';

describe('StockValuationPage', () => {
  let component: StockValuationPage;
  let fixture: ComponentFixture<StockValuationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockValuationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockValuationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
