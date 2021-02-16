import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormPageComponent } from './post-form-page.component';

describe('PostFormPageComponent', () => {
  let component: PostFormPageComponent;
  let fixture: ComponentFixture<PostFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
