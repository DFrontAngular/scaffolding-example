import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeature1Component } from './page-feature-1.component';

describe('PageFeature1Component', () => {
  let component: PageFeature1Component;
  let fixture: ComponentFixture<PageFeature1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageFeature1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
