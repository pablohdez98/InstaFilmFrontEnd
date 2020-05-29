import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series/series.service';
import {Series} from '../../services/series/series';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series: Series[];
  public favs: number[];
  public iconHeart = faHeart;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSerieses().subscribe(data => {
      this.series = data;
    });
    this.seriesService.getFavorite().subscribe( data => {
      this.favs = data.map(series => series.id);
    });
  }

  addFavorite(id) {
    if (this.favs.includes(id)) {
      this.seriesService.deleteFavorite(id).subscribe(() => {
        this.favs = this.favs.filter(fav => fav !== id);
      });
    } else {
      this.seriesService.addFavorite({seriesId: id}).subscribe(() => {
        this.favs.push(id);
      });
    }
  }
}
