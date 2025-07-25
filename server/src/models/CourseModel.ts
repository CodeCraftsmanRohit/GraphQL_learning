import mongoose, { Schema, Document, model } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: string;
  raatingsAverage: string;
  raatingsQuantity: string;
  price: number;
  caterogy: string;
  subCategory: string;
  level: string;
  language: string;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  isPublished: string;
  isFree: string;
  isApproved: string;
  isRejected: string;
  isFeatured: string;
  isTrending: string;
  isBestseller: string;
  coverImage: string;
  previewVideo: string;
  students: string[];
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: String, required: true },
    raatingsAverage: { type: String, default: "0" },
    raatingsQuantity: { type: String, default: "0" },
    price: { type: Number, required: true },
    caterogy: { type: String, required: true },
    subCategory: { type: String, required: true },
    level: { type: String, required: true },
    language: { type: String, required: true },
    whatYouWillLearn: { type: [String], default: [] },
    requirements: { type: [String], default: [] },
    targetAudience: { type: [String], default: [] },
    isPublished: { type: String, default: "false" },
    isFree: { type: String, default: "false" },
    isApproved: { type: String, default: "pending" },
    isRejected: { type: String, default: "false" },
    isFeatured: { type: String, default: "false" },
    isTrending: { type: String, default: "false" },
    isBestseller: { type: String, default: "false" },
    coverImage: { type: String },
    previewVideo: { type: String },
    students: { type: [String], default: [] },
  },
  { timestamps: true }
);

export const CourseModel =
  mongoose.models.Course || model<ICourse>('Course', courseSchema);
