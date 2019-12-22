import { Component, OnInit } from '@angular/core';
import { SuiteContextService } from '../services/suite-context.service';
import { Country } from '@model/country.model';
import { CountryService } from '../services/country.service';

@Component({
  selector:    'app-replay-subject-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls:   ['./sample-component.component.scss']
})
export class ReplaySubjectSampleComponentComponent implements OnInit {

  public cards: Array<string> = [];
  private lastComponentId = 1;
  public selectedOption: string;

  public countries: Array<Country>;

  constructor(private countryService: CountryService, private context: SuiteContextService) {
  }

  private getComponentId(): string {
    return '' + this.lastComponentId++;
  }

  public ngOnInit(): void {
    this.countryService.getCountries()
      .subscribe((countries) => this.countries = countries);
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
  }

  public doSetCountry() {
    this.countryService.getCountry(this.selectedOption)
      .subscribe(country => this.context.setCurrentCountry(country),
        (error) => console.log('error'),
        () => console.log('complete'));
  }

  public doAddCard(): void {
    this.cards.push(this.getComponentId());
  }

  public doRemoveCard(id: string): void {
    const index = this.cards.indexOf(id, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
}
