import { UserRepository } from "@/api/users/repository/user/user.repository";
import { MongooseUser } from "@/api/users/model/user.schema";

export class MongooseUserRepository implements UserRepository {
  async save(user: Omit<IUser, "userId">): Promise<IUser> {
    const newUser = new MongooseUser(user);

    await newUser.save();

    return newUser;
  }
  async findAll(): Promise<IUser[]> {
    const values = await MongooseUser.find().populate("profile");
    return values;
  }

  async findById(id: string): Promise<IUser | null> {
    try {
      const findUser = await MongooseUser.findById(id)
        .populate("profile");

      return findUser;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }
  async findByLoginId(loginId: string): Promise<IUser | null> {
    const findUser = await MongooseUser.findOne({ loginId });

    return findUser ?? null;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const findUser = await MongooseUser.findOne({ email });

    return findUser ?? null;
  }
  async update(id: string, updateUserInfo: Partial<IUser>): Promise<void> {
    await MongooseUser.findByIdAndUpdate(id, updateUserInfo).populate(
      "profile",
    );

    return;
  }
  async delete(id: string): Promise<void> {
    await MongooseUser.deleteOne({ _id: id });

    return;
  }
}
