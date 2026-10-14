import { SearchableQAReturn } from "../components/SearchableQAReturn";

export const reactNativeQA = [
    {
      Q: `What is React Native and how is it different from React for the web?`,
      A: `React Native builds mobile apps using React ideas, but it renders native UI components (not HTML). You write JavaScript or TypeScript, and the framework talks to iOS and Android native views.`,
    },
    {
      Q: `What are core components like View, Text, and ScrollView?`,
      A: `View is a container like a div. Text shows text and must wrap strings. ScrollView scrolls content that does not fit on screen. FlatList is preferred for long lists because it renders only visible rows.`,
    },
    {
      Q: `How do you style components in React Native?`,
      A: `Use StyleSheet.create and pass style objects to components. Layout is mostly flexbox. There is no CSS file like on the web—styles are JavaScript objects with camelCase property names.`,
    },
    {
      Q: `How do you write platform-specific code?`,
      A: `Use Platform.OS or Platform.select to branch for ios and android. You can also use file extensions like .ios.js and .android.js so the bundler picks the right file per platform.`,
    },
    {
      Q: `What is the difference between Expo and bare React Native workflow?`,
      A: `Expo gives tooling, easy builds, and many APIs without touching native projects at first. Bare workflow means you own the native iOS and Android folders and link native code yourself. Expo can eject or use prebuild when you need full native control.`,
    },
    {
      Q: `What is React Navigation used for?`,
      A: `It is the common library for moving between screens in React Native. Stack navigation pushes screens on a stack; tab navigation shows bottom or top tabs. It handles back gestures and deep linking with setup.`,
    },
    {
      Q: `What is a native module in React Native?`,
      A: `A native module is code written in Java/Kotlin or Objective-C/Swift that your JavaScript can call. You need one when the app must use device APIs or performance-critical features that JavaScript alone does not provide.`,
    },
    {
      Q: `What is the React Native bridge and New Architecture?`,
      A: `The classic bridge passes serialized data between JavaScript and native code, which can add overhead. The New Architecture (Fabric, TurboModules) improves performance with a more direct model and is the direction of modern React Native.`,
    },
    {
      Q: `How do you debug a React Native app?`,
      A: `Use the in-app dev menu, console logs, React Native DevTools or Flipper, and platform tools like Xcode or Android Studio for native crashes. Error overlays show JavaScript stack traces during development.`,
    },
    {
      Q: `How do you improve list performance in React Native?`,
      A: `Prefer FlatList or SectionList over mapping inside ScrollView. Set keyExtractor, avoid heavy work in renderItem, use memo on row components, and tune windowSize and maxToRenderPerBatch for very long lists.`,
    },
    {
      Q: `What is Hermes in React Native?`,
      A: `Hermes is a JavaScript engine tuned for mobile. It can reduce app startup time and memory use. Many React Native projects enable Hermes by default on Android and often on iOS.`,
    },
    {
      Q: `What is safe area and why does it matter?`,
      A: `Phones with notches and rounded corners need padding so content is not hidden under the status bar or home indicator. SafeAreaView or safe area hooks from libraries add that padding automatically.`,
    },
  ];

export const ReactNativePage = () => <SearchableQAReturn QA={reactNativeQA} />;
