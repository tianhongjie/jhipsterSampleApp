import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleAppRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterSampleAppCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterSampleAppLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterSampleAppDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterSampleAppTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterSampleAppEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterSampleAppJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterSampleAppJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleAppRegionMySuffixModule,
        JhipsterSampleAppCountryMySuffixModule,
        JhipsterSampleAppLocationMySuffixModule,
        JhipsterSampleAppDepartmentMySuffixModule,
        JhipsterSampleAppTaskMySuffixModule,
        JhipsterSampleAppEmployeeMySuffixModule,
        JhipsterSampleAppJobMySuffixModule,
        JhipsterSampleAppJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleAppEntityModule {}
