import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQuoteComponent } from './card-quote.component';

describe('CardQuoteComponent', () => {
  let component: CardQuoteComponent;
  let fixture: ComponentFixture<CardQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
