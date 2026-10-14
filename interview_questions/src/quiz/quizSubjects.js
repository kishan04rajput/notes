import { htmlQA } from "../pages/HtmlPage";
import { cssQA } from "../pages/CssPage";
import { tailwindQA } from "../pages/TailwindPage";
import { bootstrapQA } from "../pages/BootstrapPage";
import { javascriptQA } from "../pages/JavascriptPage";
import { typescriptQA } from "../pages/TypescriptPage";
import { mongoDbQA } from "../pages/MongoDbPage";
import { expressQA } from "../pages/ExpressPage";
import { reactQA } from "../pages/ReactPage";
import { reactNativeQA } from "../pages/ReactNativePage";
import { nodeQA } from "../pages/NodePage";
import { rubyQA } from "../pages/RubyPage";
import { rubyOnRailsQA } from "../pages/RubyOnRailsPage";
import { gitQA } from "../pages/GitPage";

export const QUIZ_SUBJECTS = [
    { id: "html", label: "HTML", questions: htmlQA },
    { id: "css", label: "CSS", questions: cssQA },
    { id: "tailwind", label: "Tailwind", questions: tailwindQA },
    { id: "bootstrap", label: "Bootstrap", questions: bootstrapQA },
    { id: "javascript", label: "JavaScript", questions: javascriptQA },
    { id: "typescript", label: "TypeScript", questions: typescriptQA },
    { id: "mongodb", label: "MongoDB", questions: mongoDbQA },
    { id: "express", label: "Express", questions: expressQA },
    { id: "react", label: "React", questions: reactQA },
    { id: "reactnative", label: "React Native", questions: reactNativeQA },
    { id: "node", label: "Node", questions: nodeQA },
    { id: "ruby", label: "Ruby", questions: rubyQA },
    { id: "rails", label: "Ruby on Rails", questions: rubyOnRailsQA },
    { id: "git", label: "GIT", questions: gitQA },
];

/**
 * @param {string} id
 */
export function getSubjectById(id) {
    return QUIZ_SUBJECTS.find((subject) => subject.id === id);
}
