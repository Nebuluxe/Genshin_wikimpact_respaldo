import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEquipoEscojerPersonajePage } from './inventario-equipo-escojer-personaje.page';

describe('InventarioEquipoEscojerPersonajePage', () => {
  let component: InventarioEquipoEscojerPersonajePage;
  let fixture: ComponentFixture<InventarioEquipoEscojerPersonajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEquipoEscojerPersonajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEquipoEscojerPersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
