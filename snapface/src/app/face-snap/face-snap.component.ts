import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap-models';
import { FaceSnapsService } from '../services/face-snaps-services';

@Component({
	selector: 'app-face-snap',
	templateUrl: './face-snap.component.html',
	styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

	@Input() faceSnap!: FaceSnap;
	buttonText!: string;

	constructor(private faceSnapsService : FaceSnapsService,
				private router : Router) {}

	ngOnInit() {
		this.buttonText = 'Swag ?'
  	}

	clickSnaps() {
		if(this.buttonText === 'Swag ?') {
			this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
			this.buttonText = 'C\'est validé par la street !';
		} else {
			this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
			this.buttonText = 'Swag ?';
		}
	}

	onViewFaceSnap() {
		this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
	}
}
