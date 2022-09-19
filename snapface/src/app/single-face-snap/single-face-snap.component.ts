import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap-models';
import { FaceSnapsService } from '../services/face-snaps-services';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

	faceSnap!: FaceSnap;
	buttonText!: string;

	constructor(private faceSnapsService : FaceSnapsService,
				private route : ActivatedRoute) {}

	ngOnInit() {
		this.buttonText = 'Swag ?';
		const faceSnapId = Number(this.route.snapshot.paramMap.get('id'));
		this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
