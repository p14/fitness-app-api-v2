/* eslint-disable no-unused-vars */
import { model, Schema } from 'mongoose';
import { ExerciseCategory } from './exercise.model';

export enum WorkoutCategory {
  CHEST = 'CHEST',
  BACK = 'BACK',
  ARMS = 'ARMS',
  SHOULDERS = 'SHOULDERS',
  LEGS = 'LEGS',
  PUSH = 'PUSH',
  PULL = 'PULL',
  UPPER = 'UPPER',
  LOWER = 'LOWER',
  FULL_BODY = 'FULL_BODY',
  HIIT = 'HIIT',
}

export type Categories = WorkoutCategory | ExerciseCategory;

export interface Workout {
  title: string
  category: WorkoutCategory
  exercises: Schema.Types.ObjectId[]
}

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: WorkoutCategory,
    required: true,
  },
  exercises: {
    type: [Schema.Types.ObjectId],
    default: [],
    required: true,
  },
}, {
  timestamps: true,
});

const WorkoutModel = model('Workout', workoutSchema);
export default WorkoutModel;
