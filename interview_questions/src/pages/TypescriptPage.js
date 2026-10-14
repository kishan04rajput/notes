import { SearchableQAReturn } from "../components/SearchableQAReturn";

export const typescriptQA = [
    {
      Q: `What is TypeScript and why do teams use it?`,
      A: `TypeScript is JavaScript with optional static types. Teams use it to catch mistakes early in the editor, document data shapes, and make large codebases easier to refactor.`,
    },
    {
      Q: `What is structural typing in TypeScript?`,
      A: `TypeScript checks if two types have the same shape (same properties and types), not if they were declared with the same name. If the structure matches, the types are compatible.`,
    },
    {
      Q: `What is the difference between type and interface in TypeScript?`,
      A: `Both describe object shapes. Interfaces can be extended and merged; types are more flexible for unions, tuples, and mapped types. For plain objects, either works—pick one style and stay consistent.`,
    },
    {
      Q: `What is type inference in TypeScript?`,
      A: `The compiler figures out types automatically when you do not write them. For example, let x = 5 gives x the type number without an explicit annotation.`,
    },
    {
      Q: `What is the difference between any and unknown?`,
      A: `any turns off type checking—you can do anything with the value. unknown is safer: you must narrow or check the type before using it. Prefer unknown when the type is not known yet.`,
    },
    {
      Q: `What are union and intersection types?`,
      A: `A union (A | B) means the value can be A or B. An intersection (A & B) means the value must satisfy both types at once, often combining multiple object shapes.`,
    },
    {
      Q: `What are generics in TypeScript?`,
      A: `Generics let you write reusable code that works with many types. You use a type parameter like T so a function or class can accept different types while staying type-safe.`,
    },
    {
      Q: `What does strict mode mean in tsconfig?`,
      A: `Enabling strict (or strict-related flags) turns on stricter checks like null safety and clearer function types. It helps catch more bugs but may require more explicit types when migrating old code.`,
    },
    {
      Q: `What are type guards in TypeScript?`,
      A: `Type guards narrow a type inside a branch. Common examples are typeof checks, in checks for properties, and custom functions that return a boolean and tell TypeScript the real type.`,
    },
    {
      Q: `What are Partial, Pick, and Record utility types?`,
      A: `Partial<T> makes all properties of T optional. Pick<T, Keys> keeps only selected keys. Record<Keys, ValueType> builds an object type with fixed keys and one value type.`,
    },
    {
      Q: `Should you use enum or a const object with a union type?`,
      A: `Both represent fixed sets of values. String unions with const objects are common in modern TypeScript because they tree-shake well and feel like plain JavaScript. Enums are fine when your team prefers them.`,
    },
    {
      Q: `What is the difference between void and never as return types?`,
      A: `void means the function returns nothing useful (undefined). never means the function never returns normally—for example it always throws or runs forever. never is also used for impossible cases in type narrowing.`,
    },
  ];

export const TypescriptPage = () => <SearchableQAReturn QA={typescriptQA} />;
