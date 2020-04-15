import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentFileViewComponent} from './student-file-view/student-file-view';
import { StudentSearchViewComponent } from './student-search-view/student-search-view.component';
import { FileStudentComponent } from './student-file-view/file-student/file-student.component';
import { ExerciseModalComponent } from './student-file-view/exercise-modal/exercise-modal.component';
import { ExercisesComponent } from './student-file-view/exercises/exercises.component';
import { TablesComponent } from './student-file-view/tables/tables.component';
import { TimeBarComponent } from './student-file-view/time-bar/time-bar.component';
import { SharedModule } from '../../Shared/shared.module';
import { StudentFileRoutingModule } from './student-file-routing.module';

/* services*/
import { StudentSearchService } from '../../Services/student-search.service';
import { AlumnoService } from '../../Services/alumno.service';
import { ExerciseService } from '../../Services/exercise.service';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    StudentFileViewComponent,
    FileStudentComponent,
    ExerciseModalComponent,
    ExercisesComponent,
    TablesComponent,
    TimeBarComponent,
    StudentSearchViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    StudentFileRoutingModule,
    SharedModule
  ],
  providers: [
    StudentSearchService,
    AlumnoService,
    ExerciseService
  ]
})
export class StudentFileModule { }
