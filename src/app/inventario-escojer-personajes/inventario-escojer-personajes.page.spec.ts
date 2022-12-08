import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEscojerPersonajesPage } from './inventario-escojer-personajes.page';

describe('InventarioEscojerPersonajesPage', () => {
  let component: InventarioEscojerPersonajesPage;
  let fixture: ComponentFixture<InventarioEscojerPersonajesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEscojerPersonajesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEscojerPersonajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
