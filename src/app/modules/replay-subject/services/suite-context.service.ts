import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Organization } from '@model/organization.model';

@Injectable({providedIn: 'root'})
export class SuiteContextService {
  private readonly currentOrgSubject = new ReplaySubject<Organization>(1);

  public readonly currentOrg$ = this.currentOrgSubject.asObservable();

  public setCurrentOrg(org: Organization): void {
    this.currentOrgSubject.next(org);
  }
}
