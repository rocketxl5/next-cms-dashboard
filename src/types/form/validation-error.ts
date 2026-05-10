// Typed sever validation

// JSON response model
// {
//   "type": "validation",
//   "message": "Validation failed",
//   "errors": {
//     "email": ["Email already exists"]
//   }
// }

export type ValidationError = {
    type: 'validaton';
    message: string;
    errors: Record<string, string[]>;
}