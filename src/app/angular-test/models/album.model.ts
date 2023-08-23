import { Song } from "./song.model";

export interface Album  
{
    name: string;
    picture: File;
    date: Date;
    songs: Song[];
}