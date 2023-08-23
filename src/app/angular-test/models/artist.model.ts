import { Album } from "./album.model";

export interface Artist {
    firstName: string;
    lastName: string;
    dob?: Date;
    email: string;
    phoneNumber: string;
    profilePicture?: File;
    stageName?: string;
    backstory?: string;
    startingDate?: Date;
    albums?: Album[];
  }