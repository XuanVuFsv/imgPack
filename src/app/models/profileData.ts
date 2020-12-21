export interface IProfileData {
    collections: ICollection[];
}

export interface ICollection {
    id: any;
    title: string;
    date: string;
    scr: string[];
    preview: string;
}