# PDF chat application using langchain, fastapi and reactjs
This repository houses a complete application enabling:

 **PDF Ingestion:** Users can upload PDF documents, forming the foundation of your custom knowledge base.

 
**Text Extraction:** The system efficiently processes uploaded PDFs to extract their textual content.



**Vector Embeddings:** Langchain generates dense vector representations of the extracted text, capturing semantic relationships.


**Pinecone Storage:** The application utilizes Pinecone, a vector database, to store these embeddings for fast and effective retrieval.

**AI-Powered Query Answering:** Leverage Google Generative AI as a large language model (LLM) to process user queries and retrieve relevant PDFs based on their semantic meaning using Pinecone's similarity search.


**Zapier Integration:** Automate workflows by connecting to external services through Zapier's platform.
Tech Stack:

**Frontend:** ReactJS (https://react.dev/) for interactive user interface.


**Backend:**
Langchain ([https://www.amazon.com/Generative-AI-LangChain-language-ChatGPT/dp/1835083463]) for vector embedding generation.
FastAPI ([https://fastapi.tiangolo.com/]) for building a robust and efficient API.


**LLM:** Google Generative AI ([Bard google ai ON [invalid URL removed]]) for contextually understanding user queries.


**Vector Database:** Pinecone ([https://www.pinecone.io/]) for storing and searching vector embeddings.


**Automation:** Zapier ([https://zapier.com/]) for connecting the application with other services.

# Installation:

**Prerequisites:**
Node.js and npm (or yarn) installed (https://nodejs.org/en)
A Pinecone account and API key (https://www.pinecone.io/)
Google Generative AI access (details may vary)
A Zapier account (optional)


This applicaton takes pdf as an input as uses it as a custom knowledge 

You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with the what you're seeing right now - where you go from here is up to you!

Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.

This project was bootstrapped for you with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

# Known Issues and Workarounds
While this application offers a powerful knowledge base solution, there are a couple of technical hurdles we're currently addressing:

 **1. Frontend-Backend Integration:**

Issue: Directly connecting the ReactJS frontend to the FastAPI backend using traditional routing methods encounters challenges due to incompatibilities with Langchain.
Explanation: Langchain's way of handling requests might not align perfectly with how FastAPI expects API endpoints to be defined. This can lead to errors or unexpected behavior when trying to integrate them seamlessly.
Workaround: We're exploring alternative approaches to bridge the gap between the frontend and backend. Potential solutions include:
Proxy Server: Setting up a proxy server to mediate communication between the frontend and backend. This can handle any necessary transformations or adaptations to ensure smooth data exchange.
GraphQL: Utilizing GraphQL as an API layer that sits on top of FastAPI. GraphQL allows for a more flexible way to define queries and mutations, potentially providing a better fit for Langchain's functionalities.
2. Agent Retrieval Chain Unpredictability:

Issue: The agent retrieval chain, which likely involves fetching information from external sources using Zapier, might exhibit unpredictable behavior due to the deprecation of the Zapier toolkit in the latest Langchain community build.
Explanation: Langchain is an actively developed project, and sometimes updates can introduce changes that break compatibility with previously used tools. In this case, the Zapier toolkit, which was likely used to integrate with Zapier's automation platform, might no longer function as intended in the latest Langchain version.
Workaround: We'll need to investigate alternative methods for interacting with Zapier. Here are some possibilities:
Official Zapier Integration: Check if Langchain's developers have introduced a more official or updated way to integrate with Zapier in the newer builds.
Alternative Automation Tools: Explore other automation tools or libraries that might be compatible with the current Langchain version and offer similar functionalities to Zapier.
We're actively working on resolving these issues to ensure a seamless and robust application experience. Stay tuned for updates as we implement the chosen workarounds or discover more permanent solutions.
