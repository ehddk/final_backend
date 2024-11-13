import { UserRepository } from "@/api/users/repository/user/user.repository";
import { MongooseUser } from "@/api/users/model/user.schema";

export class MongooseUserRepository implements UserRepository {
  async save(user: Omit<IUser, "userId">): Promise<IUser> {
    const newUser = new MongooseUser(user);

    await newUser.save();

    return newUser;
  }
  async findAll(): Promise<IUser[]> {
    const values = await MongooseUser.find()
      .populate({
        path: "profile",
        populate: {
          path: "delivery",
          model: "Delivery",
        },
      })
      .exec();
    console.log("values", values);
    return values;
  }

  async findById(userId: string): Promise<IUser | null> {
    try {
      console.log('기본 userId:', userId); 
      const basicUser = await MongooseUser.findById(userId);
      console.log('populate없이', basicUser);

      const findUser = await MongooseUser.findById(userId)
        .populate('profile')
            // .populate('delivery')
            // .populate('cart')
            // .populate('orders')
            .exec();

      console.log('Found user:', findUser);
      const fullUser = await MongooseUser.findById(userId)
      .populate({
        path:'profile',
        populate:{
          path: 'delivery',
          model: 'Delivery' 
        }
    })
      // .populate('cart')
      // .populate('orders')
      .exec();
  //console.log('Full 유저:', fullUser);
      return fullUser;
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
      "cart",
      "orders"
    );

    return;
  }
  async delete(id: string): Promise<void> {
    await MongooseUser.deleteOne({ _id: id });

    return;
  }
}
