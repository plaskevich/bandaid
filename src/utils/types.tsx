export type User = {
  id: string;
  email: string;
  name: string;
  pictureURL: string;
};

export type RootTabParamList = {
  Discover: undefined;
  Match: undefined;
  Chats: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
};
