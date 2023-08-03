import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRegistration } from 'src/app/core/models/registration.model';
import { RegisterService } from '../../services/register.service';
import { first } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  user: IRegistration = {
    username: '',
    email: '',
    password: ''
  }
  registerDisabled = false;

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IRegistration,
    private snackBar: MatSnackBar,
    private registerService: RegisterService
  ) {
    dialogRef.disableClose = true;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 1000
    });
  }

  register(): void {
    this.registerDisabled = true;
    this.registerService.register(this.user).pipe(first()).subscribe(res => {
      this.registerDisabled = false;
      if (res.error) {
        this.openSnackBar(res.error);
        return;
      }

      this.openSnackBar(res.message);
      this.dialogRef.close();
    });
  }
}
