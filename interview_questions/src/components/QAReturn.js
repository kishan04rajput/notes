import { QACard } from "./QACard";

export const QAReturn = ({ QA }) => {
    return (
        <div>
            {QA.map((item, index) => (
                <div key={index}>
                    {item.Q && (
                        <div>
                            <QACard question={item.Q} answer={item.A} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
