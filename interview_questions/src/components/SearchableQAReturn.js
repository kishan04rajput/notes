import { useMemo, useRef, useState } from "react";
import { QAReturn } from "./QAReturn";

export function filterQuestionsBySearch(questions, rawQuery) {
    const trimmedQuery = rawQuery.trim();
    if (!trimmedQuery) {
        return questions;
    }

    const tokens = trimmedQuery
        .split(/\s+/)
        .filter(Boolean)
        .map((token) => token.toLowerCase());

    return questions.filter((item) => {
        if (!item?.Q) {
            return false;
        }
        const questionLower = item.Q.toLowerCase();
        return tokens.every((token) => questionLower.includes(token));
    });
}

export const SearchableQAReturn = ({ QA }) => {
    const [query, setQuery] = useState("");
    const inputRef = useRef(null);

    const filteredQA = useMemo(
        () => filterQuestionsBySearch(QA, query),
        [QA, query]
    );

    const hasActiveSearch = query.trim().length > 0;
    const showEmptyState = hasActiveSearch && filteredQA.length === 0;

    const handleClearSearch = () => {
        setQuery("");
        inputRef.current?.focus();
    };

    return (
        <div>
            <div style={{ position: "relative", margin: "10px 0" }}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="search question"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        border: "1px solid grey",
                        padding: "10px",
                        paddingRight: query.length > 0 ? "2.5rem" : "10px",
                        color: "white",
                        backgroundColor: "transparent",
                    }}
                />
                {query.length > 0 && (
                    <button
                        type="button"
                        aria-label="Clear search"
                        onClick={handleClearSearch}
                        style={{
                            position: "absolute",
                            right: "8px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            border: "none",
                            background: "transparent",
                            color: "white",
                            cursor: "pointer",
                            padding: "4px 8px",
                            fontSize: "1.1rem",
                            lineHeight: 1,
                        }}
                    >
                        ×
                    </button>
                )}
            </div>
            {showEmptyState ? (
                <p style={{ margin: "10px 0", color: "white" }}>
                    No questions match your search.
                </p>
            ) : (
                <QAReturn QA={filteredQA} />
            )}
        </div>
    );
};
