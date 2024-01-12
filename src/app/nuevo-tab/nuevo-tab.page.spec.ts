import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoTabPage } from './nuevo-tab.page';

describe('NuevoTabPage', () => {
  let component: NuevoTabPage;
  let fixture: ComponentFixture<NuevoTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
