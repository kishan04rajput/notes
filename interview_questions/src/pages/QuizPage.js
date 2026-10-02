import React, { useEffect, useState } from "react";
import { buildQuizDeck } from "../quiz/buildQuizDeck";
import { formatElapsedTime } from "../quiz/formatElapsedTime";
import { QUIZ_SUBJECTS } from "../quiz/quizSubjects";

const QUESTION_COUNT_OPTIONS = [5, 10, 15, 20, "all"];

const initialQuizState = {
    phase: "setupSubjects",
    selectedSubjectIds: [],
    questionCountChoice: 5,
    deck: [],
    currentIndex: 0,
    isAnswerVisible: false,
    responses: [],
    elapsedSeconds: 0,
};

function AnswerText({ answer }) {
    return answer.split("\n").map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));
}

export const QuizPage = () => {
    const [quizState, setQuizState] = useState(initialQuizState);

    const {
        phase,
        selectedSubjectIds,
        questionCountChoice,
        deck,
        currentIndex,
        isAnswerVisible,
        responses,
        elapsedSeconds,
    } = quizState;

    const selectedSubjectIdSet = new Set(selectedSubjectIds);
    const allSubjectsSelected =
        selectedSubjectIds.length === QUIZ_SUBJECTS.length;
    const currentQuestion = deck[currentIndex];

    useEffect(() => {
        if (phase !== "quiz") {
            return undefined;
        }

        const timerId = window.setInterval(() => {
            setQuizState((previousState) => ({
                ...previousState,
                elapsedSeconds: previousState.elapsedSeconds + 1,
            }));
        }, 1000);

        return () => window.clearInterval(timerId);
    }, [phase]);

    const toggleSubject = (subjectId) => {
        setQuizState((previousState) => {
            const nextSelectedIds = new Set(previousState.selectedSubjectIds);

            if (nextSelectedIds.has(subjectId)) {
                nextSelectedIds.delete(subjectId);
            } else {
                nextSelectedIds.add(subjectId);
            }

            return {
                ...previousState,
                selectedSubjectIds: Array.from(nextSelectedIds),
            };
        });
    };

    const handleSelectAllOrClearAll = () => {
        setQuizState((previousState) => ({
            ...previousState,
            selectedSubjectIds: allSubjectsSelected
                ? []
                : QUIZ_SUBJECTS.map((subject) => subject.id),
        }));
    };

    const handleBackToSubjects = () => {
        setQuizState((previousState) => ({
            ...previousState,
            phase: "setupSubjects",
        }));
    };

    const handleSetupSubjectsNext = () => {
        if (selectedSubjectIds.length === 0) {
            window.alert("Select at least one subject");
            return;
        }

        setQuizState((previousState) => ({
            ...previousState,
            phase: "setupCount",
        }));
    };

    const handleStartQuiz = () => {
        const nextDeck = buildQuizDeck(
            selectedSubjectIds,
            questionCountChoice,
            QUIZ_SUBJECTS,
        );

        setQuizState((previousState) => ({
            ...previousState,
            phase: "quiz",
            deck: nextDeck,
            currentIndex: 0,
            isAnswerVisible: false,
            responses: [],
            elapsedSeconds: 0,
        }));
    };

    const handleShowAnswer = () => {
        setQuizState((previousState) => ({
            ...previousState,
            isAnswerVisible: true,
        }));
    };

    const handleMarkAnswer = (isCorrect) => {
        setQuizState((previousState) => {
            const nextResponses = [
                ...previousState.responses,
                { correct: isCorrect },
            ];
            const isLastQuestion =
                previousState.currentIndex >= previousState.deck.length - 1;

            if (isLastQuestion) {
                return {
                    ...previousState,
                    responses: nextResponses,
                    phase: "summary",
                    isAnswerVisible: false,
                };
            }

            return {
                ...previousState,
                responses: nextResponses,
                currentIndex: previousState.currentIndex + 1,
                isAnswerVisible: false,
            };
        });
    };

    const handleRetake = () => {
        setQuizState(initialQuizState);
    };

    const correctCount = responses.filter((response) => response.correct).length;

    return (
        <div className="max-w-screen-xl mx-auto px-4 pb-16 text-white">
            {phase === "setupSubjects" && (
                <section className="space-y-6">
                    <h1 className="text-3xl font-semibold">Quiz setup</h1>
                    <p className="text-gray-300">
                        Select one or more subjects for your quiz.
                    </p>
                    <ul className="space-y-3">
                        {QUIZ_SUBJECTS.map((subject) => {
                            const isSelected = selectedSubjectIdSet.has(
                                subject.id,
                            );

                            return (
                                <li key={subject.id}>
                                    <button
                                        type="button"
                                        onClick={() => toggleSubject(subject.id)}
                                        aria-pressed={isSelected}
                                        className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${
                                            isSelected
                                                ? "border-blue-500 bg-gray-800"
                                                : "border-gray-700 bg-gray-900 hover:border-gray-500"
                                        }`}
                                    >
                                        {subject.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="button"
                            onClick={handleSelectAllOrClearAll}
                            className="px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400"
                        >
                            {allSubjectsSelected ? "Clear all" : "Select all"}
                        </button>
                        <button
                            type="button"
                            onClick={handleSetupSubjectsNext}
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
                        >
                            Next
                        </button>
                    </div>
                </section>
            )}

            {phase === "setupCount" && (
                <section className="space-y-6">
                    <h1 className="text-3xl font-semibold">Question count</h1>
                    <p className="text-gray-300">
                        How many questions do you want in this quiz?
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {QUESTION_COUNT_OPTIONS.map((option) => {
                            const isSelected = questionCountChoice === option;
                            const label = option === "all" ? "All" : option;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                        setQuizState((previousState) => ({
                                            ...previousState,
                                            questionCountChoice: option,
                                        }))
                                    }
                                    aria-pressed={isSelected}
                                    className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        isSelected
                                            ? "border-blue-500 bg-gray-800"
                                            : "border-gray-700 bg-gray-900 hover:border-gray-500"
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="button"
                            onClick={handleBackToSubjects}
                            className="px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleStartQuiz}
                            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
                        >
                            Start quiz
                        </button>
                    </div>
                </section>
            )}

            {phase === "quiz" && currentQuestion && (
                <section className="space-y-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-lg text-gray-300">
                            Time elapsed: {formatElapsedTime(elapsedSeconds)}
                        </p>
                        <p className="text-lg text-gray-300">
                            Question {currentIndex + 1} of {deck.length}
                        </p>
                    </div>
                    <div className="border border-gray-700 rounded-lg p-6 bg-gray-900">
                        <p className="text-xl leading-relaxed">
                            {currentQuestion.question}
                        </p>
                        {!isAnswerVisible && (
                            <button
                                type="button"
                                onClick={handleShowAnswer}
                                className="mt-6 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Show answer
                            </button>
                        )}
                        {isAnswerVisible && (
                            <div className="mt-6 space-y-4">
                                <div className="text-gray-200 leading-relaxed">
                                    <AnswerText answer={currentQuestion.answer} />
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        aria-label="Mark correct"
                                        onClick={() => handleMarkAnswer(true)}
                                        className="px-5 py-3 rounded-lg border border-green-600 text-green-400 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        ✓
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Mark incorrect"
                                        onClick={() => handleMarkAnswer(false)}
                                        className="px-5 py-3 rounded-lg border border-red-600 text-red-400 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        ✗
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {phase === "summary" && (
                <section className="space-y-6">
                    <h1 className="text-3xl font-semibold">Quiz summary</h1>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-lg text-gray-300">
                            Score: {correctCount} / {deck.length}
                        </p>
                        <p className="text-lg text-gray-300 sm:text-right">
                            Time taken: {formatElapsedTime(elapsedSeconds)}
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {deck.map((item, index) => {
                            const response = responses[index];
                            const markLabel = response?.correct ? "✓" : "✗";
                            const markClass = response?.correct
                                ? "text-green-400"
                                : "text-red-400";

                            return (
                                <li
                                    key={`${item.question}-${index}`}
                                    className="border border-gray-700 rounded-lg p-4 bg-gray-900"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-semibold">
                                                {item.question}
                                            </p>
                                            <div className="mt-2 text-gray-300">
                                                <AnswerText answer={item.answer} />
                                            </div>
                                        </div>
                                        <span
                                            className={`text-2xl ${markClass}`}
                                            aria-label={
                                                response?.correct
                                                    ? "Marked correct"
                                                    : "Marked incorrect"
                                            }
                                        >
                                            {markLabel}
                                        </span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                    <button
                        type="button"
                        onClick={handleRetake}
                        className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Retake
                    </button>
                </section>
            )}
        </div>
    );
};
