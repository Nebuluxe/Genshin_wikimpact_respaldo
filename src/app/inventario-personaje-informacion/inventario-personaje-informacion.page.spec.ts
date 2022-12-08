import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioPersonajeInformacionPage } from './inventario-personaje-informacion.page';

describe('InventarioPersonajeInformacionPage', () => {
  let component: InventarioPersonajeInformacionPage;
  let fixture: ComponentFixture<InventarioPersonajeInformacionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioPersonajeInformacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioPersonajeInformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
