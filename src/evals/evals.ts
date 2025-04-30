//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const analyze_databaseEval: EvalFunction = {
    name: 'analyze_database Evaluation',
    description: 'Evaluates the analyze_database tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please analyze the configuration of my PostgreSQL database using connection string: postgres://user:pass@localhost:5432/mydb");
        return JSON.parse(result);
    }
};

const get_setup_instructionsEval: EvalFunction = {
    name: 'get_setup_instructions Evaluation',
    description: 'Evaluates the get_setup_instructions tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "I want to set up a PostgreSQL database on Linux for production usage. What steps should I follow?");
        return JSON.parse(result);
    }
};

const debug_databaseEval: EvalFunction = {
    name: 'debug_database Evaluation',
    description: 'Evaluates the debug_database tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "I am experiencing replication issues with my PostgreSQL database. How can I debug them?");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [analyze_databaseEval, get_setup_instructionsEval, debug_databaseEval]
};
  
export default config;
  
export const evals = [analyze_databaseEval, get_setup_instructionsEval, debug_databaseEval];