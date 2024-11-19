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
      .populate("cart")
      .exec();
    // console.log("values", values);
    return values;
  }

  async findById(userId: string): Promise<IUser | null> {
    try {
      const fullUser = await MongooseUser.findById(userId)
        .populate({
          path: "profile",
          populate: {
            path: "delivery",
            model: "Delivery",
          },
        })
        .populate({
          path: "inquiries",
          populate: {
            path: "author",
            populate: {
              path: "profile",
            },
          },
        })
        .populate({
          path: "orders",
          populate: [
            {
              path: "userInfo", // userInfo를 포함
            },
            {
              path: "orderItem", // orderItem을 포함
              populate: {
                path: "product", // orderItem 내 product를 포함
              },
            },
          ],
        })
        .populate({
          path: "cart",
          populate: {
            path: "cartItem",
            populate: {
              path: "product",
            },
          },
        })
        .exec();
      console.log("Full 유저:", fullUser);
      return fullUser;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
    //   const findUser = await MongooseUser.findById(userId).populate(
    //     "profile",
    //     // "cart",
    //     // "orders"
    //   );

    // return findUser ?? null;
  }
  async findByLoginId(loginId: string): Promise<IUser | null> {
    const findUser = await MongooseUser.findOne({loginId});

    console.log(findUser)

    return findUser ?? null;
  }
  async findByEmail(email: string): Promise<IUser | null> {
    const findUser = await MongooseUser.findOne({email});

    console.log(findUser)

    return findUser ?? null;    
  }
  async update(userId: string, updateUserInfo: Partial<IUser>): Promise<void> {
    await MongooseUser.findByIdAndUpdate(userId, updateUserInfo).populate(
      "profile"
    );

    return;
  }
  async delete(userId: string): Promise<void> {
    await MongooseUser.deleteOne({ _id: userId });

    return;
  }
}
