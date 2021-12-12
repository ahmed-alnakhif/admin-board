import { Injectable, Logger } from "@nestjs/common";
// import { Firebase } from 'firebase';
import Firebase from "firebase";
import { UpdateUserInput } from "./dto/inputs/update-user.input";
import { CreateUserOutput } from "./dto/outputs/create-user-output";
import { User } from "./entities/user.entity";
import { AccessList, UserRole } from "./utils/enums";

@Injectable()
export class UserService {
  firebase = new Firebase();

  async createUser(
    uid: string,
    email: string
  ): Promise<CreateUserOutput> {
    try {
      await this.firebase.createDocWithId("users", uid, {
        email,
        userRole: UserRole.USER,
        accessList: [AccessList.HOME],
      });

      return {
        id: uid,
        email: email,
        userRole: UserRole.USER,
        accessList: [AccessList.HOME],
      };
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const usersCollection = await this.firebase.getAllDocs("users")
      const users: User[] = [];

      usersCollection.forEach((doc) => {
        const { name, email, userRole, accessList } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          userRole,
          accessList,
        });

        console.log(doc.id, "=>", doc.data());
      });

      return users;
    } catch (error) {
      Logger.error(error);
    }
  }

  async findOne(id: string) {
    const userDocument = await this.firebase.getDoc("users", id);

    console.log(userDocument.data());

    let user: User;

    if (userDocument.data()) {
      const { name, email, userRole, accessList } = userDocument.data();
      user = {
        id: userDocument.id,
        name,
        email,
        userRole,
        accessList,
      };
    }

    return user;
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
