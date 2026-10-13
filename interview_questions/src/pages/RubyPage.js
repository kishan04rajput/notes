import { SearchableQAReturn } from "../components/SearchableQAReturn";

export const rubyQA = [
    {
      Q: `What is Ruby and what are its main traits?`,
      A: `Ruby is a dynamic, object-oriented language focused on readable code. Almost everything is an object, including numbers and strings. It is usually interpreted and runs with a Ruby VM.`,
    },
    {
      Q: `What is the difference between a class and a module in Ruby?`,
      A: `A class can be instantiated and supports single inheritance. A module holds shared behavior and cannot be instantiated. Modules are mixed into classes with include or extend to reuse methods.`,
    },
    {
      Q: `What is the difference between include and extend?`,
      A: `include adds module methods as instance methods on the class. extend adds them as class methods on the class itself. Both are ways to share behavior without deep inheritance trees.`,
    },
    {
      Q: `What are blocks, procs, and lambdas in Ruby?`,
      A: `A block is anonymous code passed to a method (do ... end or { }). A proc is an object wrapper around a block. A lambda is a stricter proc that checks argument count and behaves like a small function.`,
    },
    {
      Q: `What is the difference between symbols and strings?`,
      A: `Strings are mutable text; symbols are immutable names, often used as hash keys. The same symbol literal refers to one object in memory, which is efficient for identifiers.`,
    },
    {
      Q: `What is the difference between ==, ===, and eql? in Ruby?`,
      A: `== compares value with coercion. === is used in case/when and can mean different things per class. eql? compares without coercion and is stricter about type and value.`,
    },
    {
      Q: `How can you make objects immutable in Ruby?`,
      A: `Strings and some values can be frozen with freeze so they cannot change. You can freeze objects to prevent accidental mutation; frozen objects raise an error if code tries to modify them.`,
    },
    {
      Q: `What is Enumerable in Ruby?`,
      A: `Enumerable is a module mixed into collection classes. It provides iterators like each, map, select, and reduce so you can process elements in a consistent, expressive way.`,
    },
    {
      Q: `What does self mean in Ruby?`,
      A: `self is the current object. Inside an instance method, self is the instance. Inside a class body, self is the class. It matters for defining methods and calling others on the right receiver.`,
    },
    {
      Q: `How does garbage collection work in Ruby at a high level?`,
      A: `Ruby tracks objects in memory and frees objects that are no longer reachable. Modern Ruby uses a generational garbage collector to balance pause time and throughput.`,
    },
    {
      Q: `How do you handle errors in Ruby?`,
      A: `Use begin, rescue, and optionally else and ensure. raise creates an exception. rescue catches exceptions so the program can recover or log instead of crashing silently.`,
    },
    {
      Q: `What is metaprogramming in Ruby?`,
      A: `Metaprogramming means code that writes or changes code at runtime. Examples are define_method, send, and hooks like method_missing. It is powerful but should be used carefully for clarity.`,
    },
  ];

export const RubyPage = () => <SearchableQAReturn QA={rubyQA} />;
