import { shuffleArray } from "./shuffleArray";

export function isValidQuestion(item) {
    return Boolean(item?.Q?.trim());
}

export function buildQuizDeck(selectedSubjectIds, countChoice, subjects, random = Math.random) {
    const selectedIdSet = new Set(selectedSubjectIds);
    const selectedSubjects = subjects.filter((subject) =>
        selectedIdSet.has(subject.id),
    );

    const pool = selectedSubjects.flatMap((subject) =>
        subject.questions
            .filter(isValidQuestion)
            .map((item) => ({
                question: item.Q.trim(),
                answer: item.A,
            })),
    );

    if (pool.length === 0) {
        return [];
    }

    if (countChoice === "all") {
        const seenQuestions = new Set();
        const uniquePool = [];

        pool.forEach((item) => {
            if (seenQuestions.has(item.question)) {
                return;
            }
            seenQuestions.add(item.question);
            uniquePool.push(item);
        });

        return shuffleArray(uniquePool, random);
    }

    const questionCount = countChoice;
    const deck = [];

    for (let index = 0; index < questionCount; index += 1) {
        const randomIndex = Math.floor(random() * pool.length);
        deck.push(pool[randomIndex]);
    }

    return deck;
}
