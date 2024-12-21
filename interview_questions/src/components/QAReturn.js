import { QACard } from "./QACard";

export const QAReturn = ({ QA }) => {
    return (
        <div style={{ marginTop: "11vh" }}>
            {QA.map((item, index) => (
                <div key={index}>
                    <QACard question={item.Q} answer={item.A} />
                </div>
            ))}
        </div>
    );
};
