import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InventarioEscogerArtefactosPage } from './inventario-escoger-artefactos.page';

describe('InventarioEscogerArtefactosPage', () => {
  let component: InventarioEscogerArtefactosPage;
  let fixture: ComponentFixture<InventarioEscogerArtefactosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioEscogerArtefactosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioEscogerArtefactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
