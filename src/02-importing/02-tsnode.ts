import { photos } from "../../data/photos.json";
import { Photo } from "./types/photo";
// tsc --init
// resolveJsonModule: true  ~~~ l 38

const photo: Photo = photos[0];
console.log(photo, typeof photo);