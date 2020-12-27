export class ILibrary{
  _id:string;
  source:string;
  description: string;
  author: {
    avatar: string;
    _id: string;
    username: string;
  };
}
