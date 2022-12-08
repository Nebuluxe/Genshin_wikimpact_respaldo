import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioArtefactosPersonajePage } from './inventario-artefactos-personaje.page';

describe('InventarioArtefactosPersonajePage', () => {
  let component: InventarioArtefactosPersonajePage;
  let fixture: ComponentFixture<InventarioArtefactosPersonajePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioArtefactosPersonajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioArtefactosPersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
