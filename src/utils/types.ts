export interface MenuTitle {
  id: number;
  label: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
}
export interface Option {
  label: string;
  value: string;
}
export interface FormEventControlItem {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  component: string;
}

export interface EventFormData {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  userid: string;
  userimage: string;
  comments: string[];
  image: string;
}
