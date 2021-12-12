import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  ADMIN = 'Admin',
  MODERATOR = 'Moderator',
  USER = 'User',
}
registerEnumType(UserRole, {
  name: 'UserRole',
});


export enum AccessList {
  HOME = 'Home',
  ABOUT = 'About',
  CONTACT = 'Contact',
}
registerEnumType(AccessList, {
  name: 'AccessList',
});

