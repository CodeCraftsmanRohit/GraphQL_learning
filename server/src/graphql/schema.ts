export const schema = `#graphql

type User{

_id:ID!
name:String!
email:String!
password:String!
googleId:String!
role:String!
avatar:String!
verified:String!
createdAt:String!
updatedAt:String!

}

type Course{

_id:ID!
title:String!
description:String!
instructor:String!
raatingsAverage:String!
raatingsQuantity:String!
price:Int!
caterogy:String!
subCategory:String!
level:String!
language:String!
whatYouWillLearn:[String!]!
requirements:[String!]!
targetAudience:[String!]!
isPublished:String!
isFree:String!
isApproved:String!
isRejected:String!
isFeatured:String!
isTrending:String!
isBestseller:String!
coverImage:String!
previewVideo:String!
students:[String!]!
createdAt:String!
updatedAt:String!


}

# abhi koi logic nhi lika ja rha h , bas bataya j rha h apoolo server ko

type Todo{
    userId:Int!
    id:Int!
    title:String!
    completed:Boolean!
    user:User
}
 type User {
    id: Int!
    name: String!
    email: String!
  }

type Query{  # kuch b lena h to Query


hello:String
wow:String
getAllUsers: [User!]!
    getUser(id: ID!): User
getTodos:[Todo!]!
users:[User]
courses:[Course]
# sections:[Section]
# lectures:[Lecture]

}





`;
