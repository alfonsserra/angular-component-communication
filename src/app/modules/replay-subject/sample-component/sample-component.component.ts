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
    this.countries = this.countryService.getCountries();
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
    this.cards.push(this.getComponentId());
  }

  public doSetCountry() {
    const country = this.countryService.getCountry(this.selectedOption);
    this.context.setCurrentCountry(country);
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
