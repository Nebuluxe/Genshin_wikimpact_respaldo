import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEscojerArmaPage } from './inventario-escojer-arma.page';

describe('InventarioEscojerArmaPage', () => {
  let component: InventarioEscojerArmaPage;
  let fixture: ComponentFixture<InventarioEscojerArmaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEscojerArmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEscojerArmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
