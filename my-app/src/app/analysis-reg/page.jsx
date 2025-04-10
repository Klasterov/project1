import React from "react";

export default function AnalysisReg() {
    return (
        <div className="analysis-reg">
        <h1>Analysis Registration</h1>
        <form action="/api/submit-analysis" method="POST">
            <label htmlFor="analysis-type">Type of Analysis:</label>
            <input type="text" id="analysis-type" name="analysis-type" required />
            <label htmlFor="sample-id">Sample ID:</label>
            <input type="text" id="sample-id" name="sample-id" required />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}