export interface Client {
    _id: number;
    source: string;
    description: string;
    collectionId: string;
    author: {
        avatar: string;
        _id: string;
        username: string
    };
    isSave: any;
}
