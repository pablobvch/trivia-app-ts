import { Answer } from "./Answer";
import { Question } from "./Question";

type Payload = Answer | Question[];

export type Action = {
  type: string;
  payload: Payload;
};
