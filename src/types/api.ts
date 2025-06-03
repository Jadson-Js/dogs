export interface IHooksApiTokenPost {
  username: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
}

export interface IHooksApiPhotosGet {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  peso: string;
  idade: string;
  acessos: string;
  total_comments: string;
}

export interface IHooksApiUserPost {
  username: string | FormDataEntryValue;
  email: string | FormDataEntryValue;
  password: string | FormDataEntryValue;
}
