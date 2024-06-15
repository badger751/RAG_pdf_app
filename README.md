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
Installation:

# Prerequisites:
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

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
